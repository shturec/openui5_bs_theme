var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('default', ['move_css']);

gulp.task('move_css', function(){
	gulp.watch("./*.css", function(){
		gulp.src("./*.css").pipe(csso()).pipe(gulp.dest("."));
		console.log("Minified and Moved CSS");
	});
});