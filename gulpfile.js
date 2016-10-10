var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var cssnano=require('gulp-cssnano');
var gulpsass = require('gulp-sass');


gulp.task('scsscompile', function() {
        return gulp.src('public/scss/*.scss') // all scss files
        .pipe(concat('main.css')) // combines multiple scss into one css file
        .pipe(gulpsass()) // compile task running now
        .pipe(gulp.dest('public/stylesheets')); // store compiled css file here..
});

gulp.task('minifycss', function() { // minify css
    return gulp.src('public/stylesheets/*.css')
        .pipe(concat('combined.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('public/production'));
});

gulp.task('uglify', function() { // minify js
        return gulp.src('public/javascripts/*.js')
        .pipe(concat('combined.min.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('public/production'));
});

gulp.task('monitor', function() {
  gulp.watch('public/scss/*.scss', ['scsscompile']); // running scss compiler on changes to scss 
  gulp.watch('public/stylesheets/*.css', ['minifycss']); // changes to css will then minify into this file
  gulp.watch('public/javascripts/*.js', ['uglify']); // changes to JS files will also get compressed 

 
});

gulp.task('default', ['monitor']);


// express server
var exp = require("express");
var app = exp();
app.use(exp.static(__dirname + "/public"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running ON at " + port);
    });

