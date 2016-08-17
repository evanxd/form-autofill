'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    download = require('gulp-download'),
    fs = require('fs'),
    unzip = require('gulp-unzip'),
    execSync = require('child_process').execSync,
    Promise = require('promise');

gulp.task('build', function() {
  new Promise(function(resolve, reject) {
    // Download Firefox Add-ons SDK.
    if (fs.existsSync(__dirname + '/build/addon-sdk-1.17/bin/cfx')) {
      resolve();
    } else {
      download('https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.zip')
        .pipe(unzip())
        .pipe(gulp.dest('build'))
        .on('end', deferred.resolve);
    }
  })
  .then(function() {
    // Move tbpl-hou script into firefox-addon folder.
    gulp.src('lib/*.js')
        .pipe(gulp.dest('firefox-addon/data'));
  })
  .then(function() {
    // Build it.
    execSync('./build/addon-sdk-1.17/bin/cfx xpi --pkgdir=./firefox-addon/');
    gulp.src('form-autofill.xpi')
        .pipe(clean())
        .pipe(gulp.dest('build'));
  });
});
