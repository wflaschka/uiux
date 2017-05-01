// wflaschka 20170325
// NOTE: Autoprefixer seems to be broken.

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

// Handle vue files:
// https://www.npmjs.com/package/gulp-vueify
// 20170430 ugh might need: https://github.com/vuejs/vueify#configuring-options
// var fs = require("fs")
// var browserify = require('browserify')
// var vueify = require('gulp-vueify');

//oOR:
// https://www.npmjs.com/package/gulp-vue-module
// Discussion
// https://forum-archive.vuejs.org/topic/630/gulp-workflow-for-vue-js


// Paths
var rootTarget = 'dist/';
var rootSource = 'src/';

var buildTargets = {
	'scripts'     : rootTarget + 'assets/scripts'
	, 'vue'       : rootTarget + 'assets/scripts/vue'
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
		// ,rootSource + 'assets/scripts/validate_*.js'
	],
	vue: [
		// rootSource   + 'assets/scripts/vue-bulma-carousel/**/*.vue'
		rootSource   + 'assets/scripts/vue-bulma-carousel/src/App.vue'
	],
	styles: [
		rootSource    + 'assets/styles/**/*.css'
		,'node_modules/nouislider/distribute/*.css'
		// ,'node_modules/sweetalert2/dist/*.css'
		//,rootSource + 'assets/semantic/dist/semantic.min.css'
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
	],
	sass: [
		rootSource    + 'assets/styles/bulma.sass'
		,rootSource    + 'assets/styles/site.sass'
		// ,rootSource   + 'assets/styles/interactive/sweetalert-build.scss' // 20170430 only if we want standalone css for this
		// ,'node_modules/bulma/sass/**/*.*'
	],
	// sass: [
	// 	rootSource    + 'assets/styles/bulma.sass'
	// 	,rootSource    + 'assets/styles/site.sass'
	// ],
	less: [
		rootSource    + 'assets/styles/spectre.less'
		,rootSource   + 'assets/styles/spectre-carousel/carousels-bulma.less'
		,'node_modules/spectre.css/spectre-icons.less'
	],
	html: [
		rootSource    + '**/*.htm?'
		// ,'!' + rootSource + 'assets/**/*.*'
		// ,'!' + rootSource + 'partials/**/*.*'
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
// log("Gulpfile building...")
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

// VUE -- 20170430 can't get working
gulp.task('vue', function () {
	log("    - Generate Vue files " + (new Date()).toString());

	browserify(paths.vue)
	  .transform(vueify, {
	    // sass: {
	      // includePaths: []
	    // },
	  })
	  .bundle()
	  .pipe(fs.createWriteStream("bundle.js"));
	return true;
	// return gulp.src(paths.vue)
	// .pipe(vueify())
	// .pipe(gulp.dest(buildTargets.vue));
});

// SASS
// https://www.sitepoint.com/simple-gulpy-workflow-sass/
gulp.task('sass', function () {
	log("    - Generate CSS files " + (new Date()).toString());
	log("    - Reading from: " + paths.sass);
	log("    - Writing to: " + buildTargets.styles);

	return gulp
		.src(paths.sass)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write('/maps'))
		// .pipe(autoprefixer(autoprefixerOptions))
		// .pipe(autoprefixer())
		// .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest(buildTargets.styles))
		.pipe(sassdoc(sassdocOptions))
		// Release the pressure back and trigger flowing mode (drain)
		// See: http://sassdoc.com/gulp/#drain-event
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
	// del([buildTargets.html + '**/*.htm?']);
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
	callback);
});

gulp.task('default', ['watch']);

