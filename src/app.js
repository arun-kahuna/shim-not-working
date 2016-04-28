
/*
require.config({
    baseUrl: '.',  //'path/to/your/base/file.js',
    paths: {
        "jquery": "lib/jquery-1.12.0",
        "underscore": "../lib/underscore"
    }
});
*/


require(['src/Renderer', 'jquery'], function(Renderer, $){
     var renderer = new Renderer($('body'));
     renderer.render('require.js up and running');
});


require(['lib/modules/template','dagre-d3'], function(template,d) {
  console.log(d);
  template.showName("Arun");
});
