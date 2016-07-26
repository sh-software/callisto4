var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
minifyCSS = require('gulp-minify-css');


var input = './_includes/**/*.scss';
var output = './css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
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

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


gulp.task('default', ['sass', 'watch']);