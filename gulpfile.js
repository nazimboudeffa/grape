var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/Grape.js',
    'src/core/Graph.js',
    'src/core/Node.js',
    'src/core/Edge.js'
    ])
    .pipe(concat('grape.js'))
    .pipe(gulp.dest('./build/'));
});
