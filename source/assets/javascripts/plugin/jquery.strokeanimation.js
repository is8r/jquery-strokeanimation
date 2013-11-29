/**
Stroke Animation Plugin - v1.0

@author Yu Ishihara
@github https://github.com/is8r/jquery-strokeanimation
@version 1.0

@howto
;(function(jQuery) {
  $(function(){
    $('.lines').strokeanimation({
      interval: 5000,
      loop: true,
      //autoStart: false,
      color: '#ffffff'
    });
    //$('.lines').data('strokeanimation').enter();
  });
})(jQuery);
*/

;(function(jQuery) {
    
    var pluginName = 'strokeanimation';
    
    $[pluginName] = function(element, options) {

      //----------------------------------------------------------------------
      //data

      //data for plugin
      var defaults = {
          pluginName: 'strokeanimation',
          color: null,
          loop: true,
          autoStart: false,
          interval: 3000
      }
      var plugin = this;
      plugin.settings = {}
      var $element = $(element);
      var element = element;
      
      //----------------------------------------------------------------------
      //method
      
      plugin.init = function() {
        plugin.settings = $.extend({}, defaults, options);
        plugin.items = options.items;
        
        plugin.start();
      }
      
      plugin.start = function(e) {
        var path,
            svg;

        //init
        $element.find('path').each(function(i, el) {
          el.setAttribute('stroke-dashoffset', '0');
          if(plugin.settings.color) el.attributes.getNamedItem('stroke').nodeValue = plugin.settings.color;
        });
        $element.find('circle').each(function(i, el) {
          el.setAttribute('stroke-dashoffset', '0');
          if(plugin.settings.color) el.attributes.getNamedItem('stroke').nodeValue = plugin.settings.color;
        });

        //start
        if(plugin.settings.autoStart) {
          plugin.enter();
        }
        if(plugin.settings.loop) {
          setInterval(plugin.enter, plugin.settings.interval);
        }
      }

      plugin.enter = function(e) {
        var length,
            i;
        
        //visible
        element.style.display = 'block';

        //refresh and enter
        $element.find('path').each(function(i, el) {
          el.style.transition = el.style.WebkitTransition = 'none';
          length = el.getTotalLength();
          el.style.strokeDasharray = length + ' ' + length; 
          el.style.strokeDashoffset = length;
          el.getBoundingClientRect();
          el.style.transition = el.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
          el.style.strokeDashoffset = '0';
        });
        $element.find('circle').each(function(i, el) {
          el.style.transition = el.style.WebkitTransition = 'none';
          length = el.attributes.getNamedItem('r').nodeValue*10;
          el.style.strokeDasharray = length + ' ' + length; 
          el.style.strokeDashoffset = length;
          el.getBoundingClientRect();
          el.style.transition = el.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
          el.style.strokeDashoffset = '0';
        });
      }
      
      plugin.init();
    }
    
    //----------------------------------------------------------------------
    
    $.fn[pluginName] = function(options) {
      if(!options) options = {};
      options.items = [];
      return this.each(function(i) {
        options.id = i;
        options.items.push($(this));
        if (undefined == $(this).data(pluginName)) {
          var plugin = new $[pluginName](this, options);
          $(this).data(pluginName, plugin);
        }
      });
    }
    
})(jQuery);
