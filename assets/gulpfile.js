var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssnext = require("gulp-cssnext");

gulp.task('default', function() {
  gulp.src("css/stylesheets/index.css")
    .pipe(cssnext({
      compress: false,
      features: {
        import: {
          path: [
            "node_modules",
          ]
        },
        autoprefixer: {
          browsers: ["last 2 versions"]
        }
      }
    }))
    .pipe(gulp.dest("./dist/stylesheets"))
  watch('css/**/*.css', ['./dist/stylesheets/'])
});