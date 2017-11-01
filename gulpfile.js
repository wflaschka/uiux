// Build the UI/UX website assets & template
// Run all and start watching files with: 
// 		PROMPT> gulp
// or run specific builds, e.g.:
// 		PROMPT> gulp watch
// 		PROMPT> gulp html
// 		PROMPT> gulp scripts
// This works on MacOS and Linux, but hastn' been
// tested on Windows...

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
		rootSource   + 'assets/scripts/**/*',
		'!' + rootSource   + 'assets/scripts/jquery.modal.min.js'
	],
	materializeJs: [],
	styles: [
		rootSource + 'assets/styles/**/*.css',
		'!' + rootSource + 'assets/styles/sources-and-projects-for-reference'
//		,'node_modules/nouislider/distribute/*.css'
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
log(" ")
log(" ")
log("NOTE NOTE NOTE:")
log("    You'll need to add new template/components subfolders to gulpfile!")
log(" ")

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
gulp.task('html', function(callback) {
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

// [NOT IN USE] Less/CSS
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

// [NOT IN USE] Handle MaterializeCSS's javascript
// gulp-concat documentation: https://www.npmjs.com/package/gulp-concat
gulp.task('materializeJs', function() {
	return gulp.src(paths.materializeJs)
		.pipe(sourcemaps.init())
			.pipe(concat('materialize.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(buildTargets.scripts));
});

// TEMPLATING FUNCTIONALITY
// https://www.npmjs.com/package/gulp-handlebars-master
// uses https://www.npmjs.com/package/handlebars
var templateData = {
	"dataset": [
		{
			"image": "/assets/images/artwork/art-1.jpg",
			"artist": "Camille Oudinot",
			"title": "Fading Faces",
			"price": "$930",
			"from": "New York, NY",
			"pieces": "1 piece",
			"selfie": "/assets/images/profiles/person-1.jpg",
			"follow": "add",
			"hearts": 55
		},
		{
			"image": "/assets/images/artwork/art-narrow-1.jpg",
			"artist": "Sethlan Semelon",
			"title": "Rhapsody in the Beginning of Summer",
			"price": "$1930",
			"from": "St. Louisville de la Mar, North Dakota",
			"pieces": "230 pieces",
			"selfie": "/assets/images/profiles/person-2.jpg",
			"follow": "add",
			"hearts": 23
		},
		{
			"image": "/assets/images/artwork/art-wide-1.jpg",
			"artist": "Nan Park",
			"title": "Uncanny Valley",
			"price": "$450",
			"from": "Schenectady, NY",
			"pieces": "15 pieces",
			"selfie": "/assets/images/profiles/person-3.jpg",
			"follow": "friend",
			"hearts": 11
		},
		{
			"image": "/assets/images/artwork/art-3.jpg",
			"artist": "Jane Do",
			"title": "Roommate #2",
			"price": "$633",
			"from": "New York, NY",
			"pieces": "22 pieces",
			"selfie": "/assets/images/profiles/person-1.jpg",
			"follow": "add",
			"hearts": 123
		},
		{
			"image": "/assets/images/artwork/art-4.jpg",
			"artist": "Jephesandra Tawarna",
			"title": "Getting Coffee / Knife Wound",
			"price": "$1024",
			"from": "New York, NY",
			"pieces": "44 pieces",
			"selfie": "/assets/images/profiles/person-2.jpg",
			"follow": "add",
			"hearts": 61
		},
		{
			"image": "/assets/images/artwork/art-5.jpg",
			"artist": "Jimothy St. Creus de la Mare",
			"title": "Oily Water",
			"price": "$1930",
			"from": "New York, NY",
			"pieces": "60 pieces",
			"selfie": "/assets/images/profiles/person-3.jpg",
			"follow": "add",
			"hearts": 31
		},
		{
			"image": "/assets/images/artwork/art-6.jpg",
			"artist": "Caulie Dempsei Alexandrian",
			"title": "Lurid Overhead Squish",
			"price": "$2450",
			"from": "New York, NY",
			"pieces": "20 pieces",
			"selfie": "/assets/images/profiles/person-1.jpg",
			"follow": "friend",
			"hearts": 22
		},
		{
			"image": "/assets/images/artwork/art-2.jpg",
			"artist": "Amy Yu",
			"title": "First Argument",
			"price": "$4430",
			"from": "New York, NY",
			"pieces": "6 pieces",
			"selfie": "/assets/images/profiles/person-2.jpg",
			"follow": "add",
			"hearts": 1
		}
	]
}

// Set up the template data for use in various contexts.
var templateDataSingleton = {}
templateDataSingleton['dataset'] = templateData["dataset"][0];
log(templateDataSingleton);
// For single component pages, we'll send just one record:
templateData['single'] = templateData["dataset"][0];
// Some templates need to know whether they're 
// displaying single or in a big group, for example
// components/details/heart.html & pages/hearts.html
// because we don't want to repeat the javascript:
templateData['single']['isSingle'] = true; 
templateData['cards'] = templateData["dataset"];


gulp.task('build-html-component-pages', function() {
	// Master used for components:
	var master = paths.html_templates.layouts + 'component-only.html';

	// Options for generation, from:
	// https://www.npmjs.com/package/gulp-compile-handlebars
	options = {
		ignorePartials: true, //ignores the unknown partials
		// batch : Javascript array of filepaths to use as partials
		batch : [paths.html_templates.partials],
		helpers: {
            capitals : function(str){
                return str.toUpperCase();
            }
		}
	}

	return gulp.src(paths.html_templates.components)
		.pipe( 
			hbsmaster(
				master, 
				templateData['single'],
				options
				)
			)
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
			,paths.html_templates.component_partials + "cards/"
			,paths.html_templates.component_partials + "details/"
			,paths.html_templates.component_partials + "modals/"
			,paths.html_templates.component_partials + "typography/"
			,paths.html_templates.component_partials
		],
		helpers: {
            capitals : function(str){
                return str.toUpperCase();
            }
			,slice: function(from, to, context, options) {
				var item = "";
				for (var i=from, j=to; i<j; i++) {
					item = item + options.fn(context[i]);
				}
				return item;
			}
		}
	}
	return gulp.src(paths.html_templates.pages)
		.pipe( hbsmaster(master, templateData, options))
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
	callback);
});

gulp.task('default', ['watch']);
