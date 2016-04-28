define(function(){
    // the purpose of this module is to export a class that has a ctor that takes the
    // element and render method that displays the message passed to render method.

    var Renderer = function(element){
       this.element = element;
    };

    Renderer.prototype.render = function(message){
        this.element.html(message);
    };

    return Renderer;
});
