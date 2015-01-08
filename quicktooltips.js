(function($){ 
    'use strict'
    $.fn.quickToolTips = function(options) {
           var init=function() {
              var tooltips=document.createElement("div");
              var body=document.body;
              var $tooltips=$(tooltips);
              tooltips.className="quicktooltips";
              body.insertBefore(tooltips,body.firstChild);
              body.style.position='relative';
              $tooltips.css({'position':'absolute','display':'none'});
              return $tooltips
           }
           var defaults={'offsetX':0,
                         'offsetY':0,
                         'displayEvent':'mouseover',
                         'hideEvent':'mouseout',
                          displayFunction:function(){},
                          hideFunction:function(){},
                         'messages':[],
                        };
           options=$.extend({}, defaults, options);
           return this.each(function(index,element) {
                var docLeft,docTop;
                var $element=$(element);
                var message=element.getAttribute('data-tipsmsg')||options.messages[index]||' ';
                var $tooltips;
                $element.on(options.displayEvent,function(){
                    $tooltips=init();
                    docLeft=$element.offset().left+options.offsetX+'px';
                    docTop=$element.offset().top-options.offsetY+'px';
                    $tooltips.css({'top':docTop,'left':docLeft}).html(message).show();
                    options.displayFunction.call(element);
                })
                $element.on(options.hideEvent,function(){
                    $tooltips.remove();
                    options.hideFunction.call(element);
                })
        }) 
        return this;
    }
})(jQuery)

