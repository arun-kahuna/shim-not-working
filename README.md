# shim-not-working

In gulpfile.js, I used both require('requirejs') and require('gulp-requirejs') just for illustration.
In my real project, I am using gulp-requirejs to compile all the requirejs code into one file. 
I have to use a third party commonJS module called dagre-d3 and import it into my AMD code. 
I wanted to use shim to include it into my build. 
With r.js, (require('requirejs') ), shim is working as expected. 

That is, in the browser, index.html, I can see the console statemnt from :

require(['lib/modules/template','dagre-d3'], function(template,d) {
  console.log(d);
  template.showName("Arun");
});

So window.dagreD3 object is being injected for 'dagre-d3' dependency.

But if we use gulp-requirejs module to compile all the amd code into single file, shim is not doing correct thing.
Although there are not errors on the gulp step. It gives http://requirejs.org/docs/errors.html#mismatch ERROR on the browser.
