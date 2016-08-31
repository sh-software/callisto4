var gulp          = require('gulp');

// css related
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var sassdoc       = require('sassdoc');
minifyCSS         = require('gulp-minify-css');

//js related 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


var scripts = [
  'bower_components/shariff/build/shariff.complete.js',
  '_includes/scripts/main.js'
];

var input   = './_includes/**/*.scss';
var output  = './dist';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
browsers: [
       'last 2 versions',
       'android 4',
       'opera 12'
     ]
};

var sassdocOptions = {
  dest: './docs/sassdoc'
};

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(output))
});

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

var _sources = scripts.slice( 0, 1 )
  .concat( scripts.slice( 1 ) );

gulp.task( 'scripts', [ 'minify'] );

gulp.task( 'minify', function() {
  return gulp.src( _sources )
    .pipe( concat( 'main.js' ) )
    .pipe( uglify() )
    .pipe( gulp.dest( output + '/scripts/' ) );
});

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass', 'scripts'])
});


gulp.task('default', ['sass', 'scripts', 'watch']);