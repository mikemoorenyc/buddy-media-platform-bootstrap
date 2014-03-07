USE
===

This is used to provide a responsive mobile experience with a design set at a width of 640px. Tab will resize dynamically if screen width is under 640px. If over 640px, tab will remain centered on screen. [Live example](https://tabs.buddymedia.com/?m=1&bm_th=1384312040&bm_sig_locale=zz_ZZ&preview=true&nocache=true)

Advantages
----------

* No media queries. It's essentially like you're just zooming in and out on the tab.
* One design. No need to make multiple designs based on multiple screen sizes. 
* Flexible. If you want something to say a fixed pixel size, you can. 

How to use
----------

* Write all CSS values in .em. This is basically how the whole thing works. We change the font-size at the body level to shrink this values proportionally.
* You may use percentages for width. This will still work. 
* Base font-size is 16px, so remember that when writing your CSS. 
* For background images make sure you declare `background-size: 100% auto` or something like that so the background images scale dynamically as well. 
