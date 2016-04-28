var gulp = require('gulp'),
    gulpRequireJs = require('gulp-requirejs');
var requirejs = require('requirejs');

config = {
        name: 'src/app',
        baseUrl: ".",
        out: 'dist/app.build.js',
        paths: {
            "jquery": "lib/jquery-1.12.0",
            "underscore": "lib/underscore",
            "dagre-d3": "node_modules/dagre-d3/dist/dagre-d3"
        },
        shim : {
            "dagre-d3" : {
                exports : 'dagreD3'
            }
        }
};


requirejs.config(config);

//console.log('1 dagreD3: ' + requirejs('dagre-d3'));
gulp.task('rjs', function (cb) {
    requirejs.optimize(config, function(buildResponse){
         console.log('build response', buildResponse);
    }, cb);
});


//NOT WORKING.

gulp.task('gulpRequireJs', function() {
    gulpRequireJs(config)
    .pipe(gulp.dest('.')); // shim is NOT working
});



//shim is working with r.js
//gulp.task('default', ['rjs']);

// shim is working NOT working with gulp-requirejs
gulp.task('default', ['gulpRequireJs']);
