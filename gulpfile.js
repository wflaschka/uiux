// wflaschka 20170719 -- Revision for Semantic-UI
// wflaschka 20170722 -- Revision for MaterializeCSS
// wflaschka 20170910 -- Revision for Spectre.less
// wflaschka 20170915 -- Revision for flashflex "Steal all the things!"
// wflaschka 20170921 -- Revision for html templates

var gulp                 = require('gulp');
var path                 = require('path');
var concat               = require('gulp-concat');
var del                  = require('del');
var relative             = require('relative');
var debug                = require('gulp-debug');
var runSequence          = require('run-sequence');
var sass                 = require('gulp-sass');
var sourcemaps           = require('gulp-sourcemaps');
var autoprefixer         = require('gulp-autoprefixer');
var sassdoc              = require('sassdoc');
var util                 = require("gulp-util"); // https://github.com/gulpjs/gulp-util
var log                  = util.log;
var less                 = require('gulp-less');
var cleancss             = require('gulp-clean-css');
var csscomb              = require('gulp-csscomb');
var rename               = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix           = new LessPluginAutoPrefix({ browsers: ["last 4 versions"] });
var hbsmaster            = require('gulp-handlebars-master');
var fs                   = require('fs');

// Paths
var rootTarget           = 'dist/';
var rootSource           = 'src/';

var buildTargets = {
	'scripts'     : rootTarget + 'assets/scripts'
	, 'images'    : rootTarget + 'assets/images'
	, 'pdfs'      : rootTarget + 'assets/pdfs'
	, 'styles'    : rootTarget + 'assets/styles'
	, 'fonts'     : rootTarget + 'assets/fonts'
	, 'shell'     : rootTarget
	, 'html'      : rootTarget
	, 'fullbuild' : rootTarget
	, 'assets'    : rootTarget + 'assets/'
};
var paths = {
	scripts: [
		rootSource   + 'assets/scripts/**/*'
//		,'node_modules/nouislider/distribute/*.js'
//		,'node_modules/sweetalert2/dist/*.js'
	],
	materializeJs: [],
	styles: [
		rootSource    + 'assets/styles/**/*.css'
//		,'node_modules/nouislider/distribute/*.css'
	],
	fonts: [
		rootSource    + 'assets/fonts/**/*'
//		,"node_modules/materialize-css/dist/fonts/**/*"
	],
	pdfs: [
		rootSource    + 'assets/pdfs/**/*'
	],
	images: [
		rootSource    + 'assets/images/**/*.*'
		,'!' + rootSource + 'assets/images/**/*.psd'
		,'!' + rootSource + 'assets/images/**/*.ai'
	],
	sass: [
		rootSource    + 'assets/styles/site.scss'
	],
	less: [
	],
	html: [
		rootSource    + '**/*.htm?'
	],
	html_templates: {
		 index: rootSource + 'templates/pages/index.html'
		,layouts: rootSource + 'templates/layouts/'
		,partials: rootSource + 'templates/partials/'
		,pages: [
			rootSource + 'templates/pages/**/*',
			'!' + rootSource + 'templates/pages/index.html'
		]
		,components: rootSource + 'templates/components/**/*'
		,component_partials: rootSource + 'templates/components/' // path used for including components into pages
	},
	shell: [
		rootSource + '**/*.sh'
	]
};

// Options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
var sassdocOptions = {
  dest: buildTargets.styles + '/sassdoc'
};


////////////////////////////////////////////////////////////////////////////////////
// Start work:
log("Gulpfile building...")

// Clean target directory of everything
gulp.task('clean', function() {
	return del([buildTargets.fullbuild]);
});

// Javascripts
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(gulp.dest(buildTargets.scripts));
});

// Styles
glp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe(gulp.dest(buildTargets.styles));
});

// SASS
gulp.task('sass', function () {
	log("    - Generate CSS files " + (new Date()).toString());
	log("    - Reading from: " + paths.sass);
	log("    - Writing to: " + buildTargets.styles);

	return gulp
		.src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write('/maps'))
		.pipe(gulp.dest(buildTargets.styles))
		.pipe(sassdoc(sassdocOptions))
		.resume();
});

// Images
gulp.task('images', function() {
	return gulp.src(paths.images)
		.pipe(gulp.dest(buildTargets.images));
});

// PDFs
gulp.task('pdfs', function() {
	return gulp.src(paths.pdfs)
		.pipe(gulp.dest(buildTargets.pdfs));
});

// HTML
gulp.task('html', function(callback) {
//	return gulp.src(paths.html)
//		.pipe(gulp.dest(buildTargets.html));
  runSequence(
	'build-html-index',
	'build-html-pages',
	'build-html-component-pages',
	callback);
});

// FONTS
gulp.task('fonts', function() {
	return gulp.src(paths.fonts)
		.pipe(gulp.dest(buildTargets.fonts));
});

// Shell scripts
gulp.task('shell', function() {
	return gulp.src(paths.shell)
		.pipe(gulp.dest(buildTargets.shell));
});

// Less CSS
gulp.task('less', function() {
    gulp.src(paths.less)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
        .pipe(gulp.dest(buildTargets.styles))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(buildTargets.styles))
});

// Handle MaterializeCSS's javascript
// gulp-concat documentation: https://www.npmjs.com/package/gulp-concat
gulp.task('materializeJs', function() {
	return gulp.src(paths.materializeJs)
		.pipe(sourcemaps.init())
			.pipe(concat('materialize.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(buildTargets.scripts));
});

// TEMPLATING FUNCTIONALITY 20170921
gulp.task('build-html-component-pages', function() {
	// Master used for components:
	var master = paths.html_templates.layouts + 'component-only.html';

	// Options for generation, from:
	// https://www.npmjs.com/package/gulp-compile-handlebars
	options = {
		ignorePartials: true, //ignores the unknown partials
		// batch : Javascript array of filepaths to use as partials
		batch : [paths.html_templates.partials]
	}

	return gulp.src(paths.html_templates.components)
		.pipe( hbsmaster(master, [], options))
		.pipe(gulp.dest(buildTargets.html + "components/"));
});

gulp.task('build-html-index', function() {
	var master = paths.html_templates.layouts + 'project-index.html';
	options = {
		ignorePartials: true, //ignores the unknown partials
		batch : [paths.html_templates.partials]
	}
	return gulp.src(paths.html_templates.index)
		.pipe( hbsmaster(master, [], options))
		.pipe(gulp.dest(buildTargets.html));
});

gulp.task('build-html-pages', function() {
	var master = paths.html_templates.layouts + 'page.html';
	options = {
		ignorePartials: true, //ignores the unknown partials
		batch : [
			paths.html_templates.partials
			,paths.html_templates.component_partials + "headers/"
			,paths.html_templates.component_partials
		]
	}
	return gulp.src(paths.html_templates.pages)
		.pipe( hbsmaster(master, [], options))
		.pipe(gulp.dest(buildTargets.html));
});

// Rerun the task when a file changes
// invoke with: gulp watch
gulp.task('watch', ['all'], function() {
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.less, ['less']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.fonts, ['fonts']);
	gulp.watch(paths.pdfs, ['pdfs']);
	gulp.watch(paths.shell, ['shell']);
	gulp.watch(rootSource + '**/*.scss', ['sass']);
	gulp.watch(rootSource + '**/*.sass', ['sass']);
	gulp.watch(rootSource + '**/*.less', ['less']);
});

gulp.task('all', function(callback) {
  runSequence(
	'clean',
	'images', 'scripts', 'styles',
	'less', 'sass', 'fonts', 'pdfs',
	'html', 'shell',
	'materializeJs',
	callback);
});

gulp.task('default', ['watch']);
