define(['underscore', 'jquery'], function(u,j) {

  var showName = function(n) {
    var temp = u.template("<div>Hello <%= name %></div>");
    j("body").append(temp({name: n}));
  };
  return {
    showName: showName
  };
});