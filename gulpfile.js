var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['move_css']);

gulp.task('move_css', function(){
	gulp.watch("./*.css", function(){
		gulp.src("./*.css").pipe(gulp.dest("."));
		console.log("Minified and Moved CSS");
	});
});