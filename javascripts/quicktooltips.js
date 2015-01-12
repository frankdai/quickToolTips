(function($){ 
    'use strict'
    $.fn.quickToolTips = function(options) {
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
                var tooltips=document.createElement("div");
                var body=document.body;
                var $tooltips=$(tooltips);
                var docLeft,docTop;
                var $element=$(element);
                var message=element.getAttribute('data-tipsmsg')||options.messages[index]||' ';
                $element.data('clicked',false);
                tooltips.className="quicktooltips";
                body.style.position='relative';
                $tooltips.css({'position':'absolute','display':'none'});
                var show=function(){
                    body.insertBefore(tooltips,body.firstChild);
                    docLeft=$element.offset().left+options.offsetX+'px';
                    docTop=$element.offset().top-options.offsetY+'px';
                    $tooltips.css({'top':docTop,'left':docLeft}).html(message).show();
                    $element.data('clicked',true);
                    options.displayFunction.call(element);
                }
                var hide=function(){
                    $tooltips.remove();
                    $element.data('clicked',false);
                    options.hideFunction.call(element);
                }
                if (options.displayEvent=='click'&&options.hideEvent=='click') {
                  $element.click(function(){
                    if ($element.data('clicked')==false) {
                      show();
                    }
                    else {
                      hide();
                    }
                  })
                }
                else {
                  $element.on(options.displayEvent,show);
                  $element.on(options.hideEvent,hide);
                }
               
        }) 
        return this;
    }
})(jQuery)