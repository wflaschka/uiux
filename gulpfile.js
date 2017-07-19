// wflaschka 20170719
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var del = require('del');
var relative = require('relative');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var util = require("gulp-util"); // https://github.com/gulpjs/gulp-util
var log = util.log;

var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 4 versions"] });

// https://semantic-ui.com/introduction/advanced-usage.html
var watch_semantic = require('./semantic/tasks/watch');
var build_semantic = require('./semantic/tasks/build');

// Paths
var rootTarget = 'dist/';
var rootSource = 'src/';

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
		,'node_modules/nouislider/distribute/*.js'
		,'node_modules/sweetalert2/dist/*.js'
	],
	styles: [
		rootSource    + 'assets/styles/**/*.css'
		,'node_modules/nouislider/distribute/*.css'
	],
	fonts: [
		rootSource    + 'assets/fonts/**/*'
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
//		rootSource    + 'assets/styles/bulma.scss'
		,rootSource    + 'assets/styles/site.scss'
	],
	less: [
//		rootSource    + 'assets/styles/bulma.scss'
	],
	html: [
		rootSource    + '**/*.htm?'
	],
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
// log("--paths:"); log(paths);
// log("--buildTargets:"); log(buildTargets);

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
gulp.task('styles', function () {
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
gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe(gulp.dest(buildTargets.html));
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

// import Semantic-UI tasks with custom task names
// https://semantic-ui.com/introduction/advanced-usage.html
gulp.task('watch ui', 'Watch UI for Semantic UI', watch_semantic);
gulp.task('build ui', 'Build UI for Semantic UI', build_semantic);


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
	'build ui',
	callback);
});

gulp.task('default', ['watch', 'watch ui']);



// https://github.com/Semantic-Org/Example-External-Gulpfile/blob/master/gulpfile.js
// /*******************************
//             Custom
// *******************************/
// 
// var
//   gulp         = require('gulp'),
// 
//   // require tasks as dependencies
//   watch        = require('./semantic/tasks/watch'),
//   build        = require('./semantic/tasks/build')
// ;
// 
// 
// /*******************************
//              Tasks
// *******************************/
// 
// 
// gulp.task('watch-ui', watch);
// gulp.task('build-ui', build);
// 
// // Gulp help descriptions also work
// // gulp.task('watch-ui', 'Watch UI for Semantic UI', watch);
// // gulp.task('build-ui', 'Build UI for Semantic UI', build);