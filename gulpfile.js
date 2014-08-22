// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// Style Dependencies
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var nodemon = require('gulp-nodemon');



// Lint

gulp.task('lint-client', function() {
  return gulp.src('./client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-server', function() {
  return gulp.src('./server/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
  return gulp.src('./test/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



// Build
gulp.task('browserify', function() {
  return gulp.src('client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('gifling.js'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/javascripts'))
    .on('error', function(e) { console.log(e); });
});

gulp.task('uglify', ['browserify'], function() {
  return gulp.src('build/gifling.js')
    .pipe(uglify())
    .pipe(rename('gifling.min.js'))
    .pipe(gulp.dest('public/javascripts'));
});



// Server
gulp.task('watch-server', function() {
  nodemon({ script: 'server/index.js', ext: 'js'})
    .on('change', ['lint-server'])
    .on('restart', function() {
      console.log('restarting');
    });
});



// Test

gulp.task('test', ['lint-test'], function() {
  return gulp.src('test/client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('test.js'))
    .pipe(gulp.dest('build'))
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(e) { console.log(e); });
});

gulp.task('test-watch', ['lint-test'], function() {
  return gulp.src('test/client/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('test.js'))
    .pipe(gulp.dest('build'))
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run',
      browsers: ['PhantomJS']
    }))
    .on('error', function(e) { console.log(e); });
});



// Styles

gulp.task('styles', function() {
  return gulp.src('client/index.less')
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(rename('gifling.css'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/stylesheets'))
    .on('error', function(e) { console.log(e); });
});

gulp.task('minify', ['styles'], function() {
  return gulp.src('build/gifling.css')
    .pipe(minifyCSS())
    .pipe(rename('gifling.min.css'))
    .pipe(gulp.dest('public/stylesheets'));
});



// Watch
gulp.task('watch', function() {
  gulp.watch('client/**/*.js', ['browserify']);
  gulp.watch('client/**/*.html', ['browserify']);
  gulp.watch('test/client/**/*.js', ['browserify']);
  gulp.watch('client/**/*.less', ['styles']);
});



// Tasks

// Use 'build' to prepare for production
gulp.task('build', ['uglify', 'minify']);

// Development tasks, just type `gulp`
gulp.task('default', ['browserify', 'watch', 'watch-server']);

