const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;

gulp.task('sass', function (cb) {
  gulp.src('sass/styles.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('static/css/'));
  cb();
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.{sass, scss}', gulp.series('sass'));
});

gulp.task('serve', function () {
  exec('hugo server -D --disableFastRender --noHTTPCache');
  exec('firefox localhost:1313');
  gulp.watch('sass/**/*.{sass, scss}', gulp.series('sass'));
});

gulp.task('default', gulp.series( 'sass', 'serve'));
