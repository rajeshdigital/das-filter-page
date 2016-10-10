In terminal run this :

Run > gulp 

Automates the following tasks : 
==================================

gulp.task('monitor', function() {

  gulp.watch('scss/*.scss', ['scsscompile']); // running scss compiler on changes to scss 
  gulp.watch('stylesheets/*.css', ['minifycss']); // changes to css will then minify into this file
  gulp.watch('javascripts/*.js', ['uglify']); // changes  to JS files will also get compressed 
});

# Starts express engine for server behaviour

# visit : http://localhost:3000/ 