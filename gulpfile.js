var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    babel = require('gulp-babel');

gulp.task('scripts', function () {
  return gulp.src('./app/index.js')
    .pipe(babel({
      presets: ['babel-preset-es2015']
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function () {
  return gulp.src('./dist/index.js')
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('build', function () {
  runSequence('scripts', 'uglify');
});

gulp.task('default', ['build']);
