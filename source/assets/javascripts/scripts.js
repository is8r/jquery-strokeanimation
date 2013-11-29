//= require 'common/_common.js'
//= require 'common/_extend.js'

//= require 'plugin/jquery.strokeanimation.js'

;(function(jQuery) {
  $(function(){
    $('.lines').strokeanimation({
    	interval: 5000,
    	loop: true,
    	autoStart: false,
    	color: '#ffffff'
    });
    $('.lines').data('strokeanimation').enter();
  });
})(jQuery);
