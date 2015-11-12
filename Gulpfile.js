var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var debug = require('gulp-debug');

gulp.task('sass', function() {
  gulp.src(path.join(__dirname, 'assets', 'sass', '**.scss'))
    .pipe(debug({title: 'cheese_guardian [sass]:'}))
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.join(__dirname, 'public', 'css')));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(path.join(__dirname, 'assets', 'sass', '**.scss') , ['sass']);
});
