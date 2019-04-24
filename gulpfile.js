var gulp = require( 'gulp' ) ;
var nunjucks = require( 'nunjucks' ) ;
var COMPILE = {
    SRC: '/src/**.html',
    DEST: '/build'
} ;
gulp.task( 'render', function() {
    return gulp.src( COMPILE.SRC )
    .pipe( nunjucks() )
    .pipe( gulp.dest( COMPILE.DEST ) ) ;
} ) ;