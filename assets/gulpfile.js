var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    watch = require('gulp-watch'),
    filter = require('gulp-filter'),
    _      = require('lodash'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    svgmin = require('gulp-svgmin'),
    notification = require('node-notifier');
    gutil = require('gulp-util')


function handleError(err){
  // Notification
  var notifier = notification
  notifier.notify({ message: 'Error: ' + err.message });
  // Log to console

  gutil.log(gutil.colors.red('Error'), err.toString());
  this.emit('end')
}


// CSS files compilation
gulp.task('css', function () {

  return gulp.src('css/src/index.css')
    .pipe(postcss([
      require("postcss-import")(),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ]))
    .pipe(gulpif(argv.production, postcss([require("cssnano")()])))
    .pipe(gulp.dest('css/dist/'))
});



// SVG
gulp.task('svgsymbol', function () {

  var cssFilter = filter('**/*.css', { restore: true })
  var svgFilter = filter('**/*.svg', { restore: true })

  return gulp.src('img/icons/*.svg')
    .pipe( plumber() )
    .pipe( svgmin() )
    .pipe( require('through2').obj(function( file, enc, cb ) { // clean the mess up
      var fileString = file.contents.toString()

      _.each([
        /<title>.*<\/title>/gi,
        /<desc>.*<\/desc>/gi,
        /<!--.*-->/gi,
        /<defs>.*<\/defs>/gi,
        / +sketch:type=\"MSShapeGroup\"/gi,
        / +sketch:type=\"MSPage\"/gi,
        / +sketch:type=\"MSLayerGroup\"/gi,
        / fill=\".*\"/gi,
      ], function( regex ) {
        fileString = fileString.replace(regex, '')
      })

      file.contents = new Buffer( fileString )
      this.push( file )

      cb()
    }) )
    .pipe(
      require('gulp-svg-symbols')({
        id: 'macxim-Svg--%f',
        className: '.macxim-Svg--%f',
        fontSize: 26
      })
    )
    .pipe( cssFilter )
    .pipe( rename('svg-symbols.css') )
    .pipe( gulp.dest('css/src') ) // save css
    .pipe( cssFilter.restore )
    .pipe( svgFilter )
    .pipe( require('gulp-rename')('svg-symbols.svg') )
    .pipe( gulp.dest('../_includes') ) // save template

});

// Watching assets
gulp.task('watch', function() {
  gulp.watch('css/src/**/*.css', ['css']);
});



// Main tasks
//// `gulp` — For production just run `gulp --production`
gulp.task('default', ['css', 'watch']);

// Converts a bunch of SVG files to a single svg file containing each one as a symbol.
// See https://github.com/Hiswe/gulp-svg-symbols/
gulp.task('svg', ['svgsymbol']);
