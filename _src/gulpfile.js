var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../'));
});

gulp.task('default', function () {
    gulp.watch('*.scss', ['sass']);
});


// autoprfixer
//
// minify
//
// rename to .min.css
