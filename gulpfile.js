var gulp = require('gulp');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var ngmin = require('gulp-ngmin');
var ngtemplates = require('gulp-angular-templatecache');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var app = 'app';
var components = 'bower_components';
var dist = 'dist';

var copiedFiles = [
    app + '/index.html',
    app + '/favicon.ico',
    app + '/pattern.png'
];

var imageFiles = [
    app + '/img/**/*.{png,jpg}'
];

var angularTemplates = [
    app + '/**/*.html',
    '!' + app + '/{index,404}.html'
];

var sassFiles = app + '/app.scss';
var sassLibraries = [ app, components ];

var jsSources = [
    components + '/angular-animate/angular-animate.js',
    components + '/angular-ui-router/release/angular-ui-router.js',

    app + '/**/*-module.js',
    app + '/app.js',
    app + '/**/*.js',
    '!' + app + '/**/*_test.js'
];

var copiedJsFiles = [
    components + '/angular/angular.js'
];

gulp.task('sass', [], function () {
    return gulp.src(sassFiles)
        .pipe(sass({ includePaths: sassLibraries }))
        .pipe(gulp.dest(dist + '/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(dist + '/css'));
});

gulp.task('angular', [ 'angular-scripts', 'angular-templates' ]);

gulp.task('angular-scripts', [], function () {
    return gulp.src(jsSources)
        .pipe(ngmin({ dynamic: false }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dist + '/js'));
});

gulp.task('angular-templates', [], function () {
    return gulp.src(angularTemplates)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(ngtemplates({ module: 'app', root: '/' }))
        .pipe(ngmin({ dynamic: false }))
        .pipe(concat('app-templates.js'))
        .pipe(gulp.dest(dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('copy-files', function () {
    return gulp.src(copiedFiles).pipe(gulp.dest(dist));
});

gulp.task('copy-js-files', [], function () {
    return gulp.src(copiedJsFiles).pipe(gulp.dest(dist + '/js'));
});

gulp.task('clean', [], function () {
    return gulp.src(dist, { read: false }).pipe(clean({ force: true }));
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('default', [ 'sass', 'angular', 'copy-files', 'copy-js-files', 'connect']);