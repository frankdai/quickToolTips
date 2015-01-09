# quickToolTips jQuery plugin
A simple jQuery plugin that show and hide a tooltips over elements 

[Checkout Out Demo](http://frankdai.github.io/quickToolTips/) 

 * Customized event type (mouseover,mouseenter,mouseout,mouseleave,focus,blur etc.)
 * Customized functions to be called when tooltips show and hide 
 * Customized offset value against element
 * Tested on Chrome/Firefox/Opera/IE 7+

To use, simply put your intended tips message in your element data-tipsmsg attribute:

```html
<div class="tips" data-tipsmsg="tab1">Tab1</div>
```
Add this plugin after jQuery library and then fire up this plugin (): 

```javascript
$('.tips').quickToolTips();
```

A more complex way will be:
```javascript
$('.tips').quickToolTips({
        'offsetX':50,
        'offsetY':10,
        displayEvent:"focus",
        hideEvent:'blur',
        displayFunction:function(){
            $(this).addClass('hello');
        },
        hideFunction:function(){
            $(this).removeClass('hello')
        },
        'messages':['tip1','tip2','tip3','tip4']
});
```

Options explaination are follow (all of them are optional)

| options | type | explaination | default value |
| ------- | :--: |------------ | :-------------: |
| offsetX | number |Horizontal offset from left edge of element to left edge of tooltips in pixel. Negative value will offset the tips message in right direction  | 0 |
| offsetY | number | Vertical offset from top edge of element to top edge of tooltips in pixel. Negative value will offset the tips message in bottom direction | 0 |
| displayEvent* | string | event type to be fired in order to show the tips message  | mouseover |
| hideEvent* | string | event type to be fired in order to hide the tips message | mouseout |
| displayFunction | function | function to be called when tooltip shows | empty function | 
| displayFunction | function | function to be called when tooltip hides | empty function |
| message | array | array of strings or html snippet which are used when data-tipsmsg attribute are not available | empty array

* Currently supported event type: mouseover/mouseout, mouseenter/mouseleave, focus/blur, click/click (similar to jQuery toggle function. Both displayEvent and hideEvent has to be sent to 'click'). You can also mix click/mouseout event but please consider making it user-friendly. 

