var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/Grape.js',
    'src/core/Graph.js',
    'src/grapeobjects/Node.js',
    'src/grapeobjects/Edge.js'
    ])
    .pipe(concat('grape.js'))
    .pipe(gulp.dest('./build/'));
});
