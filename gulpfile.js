
//  define modules
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

//  main task
gulp.task('default', [
	'animate.css',
	'bootstrap.sass',
	'bootstrap.watch',
	'bootstrap.js',
	'owl.sass',
	'owl.js',
	'magnific.sass',
	'magnific.js'
]);

//  animate css
gulp.task('animate.css', function () {
	return gulp.src([
		'./node_modules/animate.css/animate.min.css',
	])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('animate.css'))
		.pipe(gulp.dest('./css'));
});

//  bootstrap sass
gulp.task('bootstrap.sass', function () {
	return gulp.src([
		'./scss/bootstrap.scss',
		'./scss/bootstrap.rtl.scss'
	])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

//  watch bootstrap files
gulp.task('bootstrap.watch', function () {
	return gulp.watch(['./scss/bootstrap.base.scss', './scss/bootstrap.custom.scss', './scss/bootstrap.rtl.scss', './scss/bootstrap.scss', './scss/bootstrap.variables.scss'], ['bootstrap.sass']);
});

//  bootstrap js
gulp.task('bootstrap.js', function () {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/popper.js/dist/umd/popper.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',
	])
		.pipe(concat('bootstrap.js'))
		.pipe(gulp.dest('./js'));
});

//  owl sass
gulp.task('owl.sass', function () {
	return gulp.src([
		'./node_modules/owl.carousel/src/scss/owl.carousel.scss',
		'./node_modules/owl.carousel/src/scss/owl.theme.default.scss'
	])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('owl.carousel.css'))
		.pipe(gulp.dest('./css'));
});

//  owl js
gulp.task('owl.js', function () {
	return gulp.src([
		'./node_modules/owl.carousel/dist/owl.carousel.min.js'
	])
		.pipe(concat('owl.carousel.js'))
		.pipe(gulp.dest('./js'));
});

//  magnific sass
gulp.task('magnific.sass', function () {
	return gulp.src([
		'./node_modules/magnific-popup/src/css/main.scss',
	])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('magnific.popup.css'))
		.pipe(gulp.dest('./css'));
});

//  magnific js
gulp.task('magnific.js', function () {
	return gulp.src([
		'./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
	])
		.pipe(concat('magnific.popup.js'))
		.pipe(gulp.dest('./js'));
});
