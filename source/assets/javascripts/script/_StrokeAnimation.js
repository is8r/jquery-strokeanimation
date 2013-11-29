/*
Stroke Animation Plugin without jQuery - v1.0

@author Yu Ishihara
@repo xxxxxx
@version 1.0
*/

var StrokeAnimation = (function() {
  
  //onload
  var addListener = function( e, str, func ) {
    if( e.addEventListener ) e.addEventListener( str, func, false );
  };
  addListener( window, "load", init );
  
  //prop
  var paths,circles;
  var selector = '.lines';
  var interval = 3000;
  var color = '#ffffff';

  //init
  function init() {
    var path;
    var svg;

    svg = document.querySelector(selector);
    svg.style.display = 'block';

    paths = document.querySelectorAll(selector + ' > path');
    circles = document.querySelectorAll(selector + ' > circle');
    
    for (i = 0; i < paths.length; i++) {
      path = paths[i];
      path.setAttribute('stroke-dashoffset', '0');
      path.attributes.getNamedItem('stroke').nodeValue = color;
    };
    for (i = 0; i < circles.length; i++) {
      path = circles[i];
      path.setAttribute('stroke-dashoffset', '0');
      path.attributes.getNamedItem('stroke').nodeValue = color;
    };
    update();
    setInterval(update, interval);
  }

  //update
  function update() {
    var length;
    var i;
    var paths = document.querySelectorAll('.lines > path');
    var circles = document.querySelectorAll('.lines > circle');
    var path;
    for (i = 0; i < paths.length; i++) {
      path = paths[i];
      path.style.transition = path.style.WebkitTransition =
  'none';
      length = path.getTotalLength();
      path.style.strokeDasharray = length + ' ' + length; 
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
      path.style.strokeDashoffset = '0';
    };
    for (i = 0; i < circles.length; i++) {
      path = circles[i];
      path.style.transition = path.style.WebkitTransition =
  'none';
      length = path.attributes.getNamedItem('r').nodeValue*10;
      path.style.strokeDasharray = length + ' ' + length; 
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
      path.style.strokeDashoffset = '0';
    };
  }

})();