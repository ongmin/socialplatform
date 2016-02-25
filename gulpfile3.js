//node modules
var gulp = require('gulp');
var connect = require('gulp-connect');

//sources watched for livereload
var htmlSources =['src/*.html'];
var cssSources = ['src/css/*.css'];
var jsSources = ['src/js/*.js'];
var jsonSources = ['src/js/*.json'];
var allSources = htmlSources.concat(cssSources).concat(jsSources).concat(jsonSources);

//local-server
gulp.task('server', function() {
  connect.server({
    root: 'server',
    livereload: true
  });
});

//livereload
gulp.task('livereload', function() {
  gulp.src(allSources)
    .pipe(connect.reload());
});

//watch the file changes to trigger livereload
gulp.task('watch', function() {
  gulp.watch(allSources, ['livereload']);
});

//gulp default
gulp.task('default', ['server', 'livereload', 'watch']);
