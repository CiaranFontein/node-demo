const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

gulp.task("default", function() {
  console.log("Doing the default");
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task("hello", function(done) {
  console.log("Hello world");
  done();
});
