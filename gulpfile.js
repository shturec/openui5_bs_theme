var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var rename = require("gulp-rename");

gulp.task('concat_css', function(){
	return gulp.src(['./css/common/**/*.css','./css/shell/**/*.css', './css/buttons/**/*.css','./components/navbar/**/*.css','./css/tables/**/*.css',,'./css/forms/**/*.css'])
			.pipe(concatCss("theme.css"))
			.pipe(gulp.dest('./dist'))
});

gulp.task('minify_css', function () {
    return gulp.src('./dist/theme.css')
			.pipe(csso())
			.pipe(rename("theme.min.css"))
			.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat_css', 'minify_css']);