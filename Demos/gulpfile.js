var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');

var config = {
  baseDir: '柱状图',
  stylusPath: '柱状图/static/stylus/*.styl',
  watchFiles: [ '柱状图/*.html', '柱状图/static/css/*.css']
}

gulp.task('stylus', function() {
  return gulp.src(config.stylusPath)
  .pipe(stylus())
  .pipe(gulp.dest('柱状图/static/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('server', ['stylus'], function() {
  browserSync.init({
    files: config.watchFiles,
    server: {
      baseDir: config.baseDir
    }
  });
  gulp.watch(config.stylusPath, ['stylus'])
  gulp.watch('柱状图/*.html').on('change', browserSync.reload);

})
gulp.task('default',['server']);