var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');

// Removing unused classes in CSS
gulp.task('uncss', function() {
    return gulp.src('./css/dojekyll.min.css')
      .pipe(uncss({
      html: ['./_site/**/*.html'],
      ignore: [/fp/],
      timeout: 1000
    }))
    .pipe(gulp.dest('./assets/css/uncss/'));
  });