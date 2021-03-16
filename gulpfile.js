const gulp = require('gulp');
const gulpSass = require('gulp-sass');

gulp.task('buildcss', () => gulp.src('./dev-assets/style.scss')
  .pipe(gulpSass())
  .pipe(gulp.dest('./prod-assets')));

gulp.task('watch', () => {
  // gulp.watch('./dev-assets/**/*.scss', ['buildcss']);
  gulp.watch('./dev-assets/**/*.scss', gulp.series('buildcss'));
});
