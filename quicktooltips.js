(function($){ 
    'use strict'
    $.fn.quickToolTips = function(options) {
           var tooltips=document.createElement("div");
           var body=document.body;
           var $tooltips=$(tooltips);
           var defaults={'offsetX':0,
                         'offsetY':0,
                         'displayEvent':'mouseover',
                         'hideEvent':'mouseout',
                          displayFunction:function(){},
                          hideFunction:function(){},
                         'messages':[],
                        };
           options=$.extend({}, defaults, options);
           tooltips.className="quicktooltips";
           body.insertBefore(tooltips,body.firstChild);
           body.style.position='relative';
           $tooltips.css({'position':'absolute','display':'none'});
           return this.each(function(index,element) {
                var docLeft,docTop;
                var $element=$(element);
                var message=element.getAttribute('data-tipsmsg')||options.messages[index]||' ';
                $element.on(options.displayEvent,function(){
                    docLeft=$element.offset().left+options.offsetX+'px';
                    docTop=$element.offset().top-options.offsetY+'px';
                    $tooltips.css({'top':docTop,'left':docLeft}).html(message).show();
                    options.displayFunction.call(element);
                })
                $element.on(options.hideEvent,function(){
                    $tooltips.hide();
                    options.hideFunction.call(element);
                })
        }) 
        return this;
    }
})(jQuery)

