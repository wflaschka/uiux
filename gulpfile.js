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

// Paths
var rootTarget = 'dist/';
var rootSource = 'src/';

var buildTargets = {
	'scripts'     : rootTarget + 'assets/scripts'
	, 'images'    : rootTarget + 'assets/images'
	, 'styles'    : rootTarget + 'assets/styles'
	, 'shell'     : rootTarget
	, 'html'      : rootTarget
	, 'fullbuild' : rootTarget
	, 'assets'    : rootTarget + 'assets/'
};
var paths = {
	scripts: [
		rootSource   + 'assets/scripts/**/*'
		// ,rootSource + 'assets/scripts/validate_*.js'
	],
	styles: [
		rootSource    + 'assets/styles/*.css'
		//,rootSource + 'assets/semantic/dist/semantic.min.css'
	],
	images: [
		rootSource    + 'assets/images/**/*.*'
		,'!' + rootSource + 'assets/images/**/*.psd'
	],
	sass: [
		rootSource    + 'assets/styles/bulma.sass'
		// ,'node_modules/bulma/sass/**/*.*'
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

// HTML
gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe(gulp.dest(buildTargets.html));
});

// Shell scripts
gulp.task('shell', function() {
	return gulp.src(paths.shell)
		.pipe(gulp.dest(buildTargets.shell));
});

// Rerun the task when a file changes
// invoke with: gulp watch
gulp.task('watch', ['all'], function() {
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.shell, ['shell']);
});

gulp.task('all', function(callback) {
  runSequence(
	'clean',
	'images', 'scripts', 'styles',
	'sass',
	'html', 'shell',
	callback);
});

gulp.task('default', ['watch']);

