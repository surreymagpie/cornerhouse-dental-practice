const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function (cb) {
  gulp.src('sass/styles.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('static/css/'));
  cb();
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.{sass, scss}', gulp.series('sass'));
})

gulp.task('default', gulp.series( 'sass', 'watch'));
