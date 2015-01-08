(function($){
    $.fn.quickToolTips = function(options) {
           var tooltips=document.createElement("div");
           var body=document.body;
           var $tooltips=$(tooltips);
           tooltips.className="quicktooltips";
           body.insertBefore(tooltips,body.firstChild);
           body.style.position='relative';
           $tooltips.css({'position':'absolute','display':'none'});
           return this.each(function() {
                var defaults={'offsetX':0,'offsetY':0,'displayEvent':'mouseover','hideEvent':'mouseout'};
                options=$.extend({}, defaults, options);
                var that=this,
                  $this=$(this);
                var docLeft,docTop;
                var message=this.getAttribute('data-tipsmsg')||' ';
                $this.on(options.displayEvent,function(){
                    docLeft=$this.offset().left+options.offsetX+'px';
                    docTop=$this.offset().top+options.offsetY+'px';
                    $tooltips.css({'top':docTop,'left':docLeft}).html(message).show();
                })
                $this.on(options.hideEvent,function(){
                    $tooltips.hide();
                })
        }) 
        return this;
    }
})(jQuery)

