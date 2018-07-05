var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');
var path = require('path')

var baseDir = 'Slider';

var config = {
  stylusPath: baseDir + '/static/stylus/*.styl',
  htmlPath: baseDir + '/*.html',
  cssPath: baseDir + '/static/css/*.css'
}

gulp.task('stylus', function() {
  return gulp.src(config.stylusPath)
  .pipe(stylus())
  .pipe(gulp.dest(path.join(baseDir, '/static/css')))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('server', ['stylus'], function() {
  browserSync.init({
    files: [config.htmlPath, config.cssPath],
    server: {
      baseDir: baseDir
    }
  });
  gulp.watch(config.stylusPath, ['stylus'])
  gulp.watch(config.htmlPath).on('change', browserSync.reload);

})
gulp.task('default',['server']);