const
  gulp      = require('gulp'),
  console   = require('better-console'),
  print     = require('gulp-print').default
;

const 
  log       = require('../helpers/log')
;

const config = require('../config/build.js').html;

module.exports = function(callback) {
  
  console.log('Building HTML files...');

  return gulp.src(config.src)
  .pipe(gulp.dest(config.outputDir))
  .pipe(print(log.created))
  ;
}
