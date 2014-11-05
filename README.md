lavalamp.js
===========

A replacement for infinite scrolling. Works both ways (next and previous).

## Demo

[![LavaLamp screenshot](https://raw.github.com/jgthms/lavalamp.js/master/lavalamp.gif)](http://jgthms.com/lavalamp.js/lavalamp.html)

## HTML structure

* `a.button#previous` = `Load previous`
* your page content
* `a.button#next` = `Load next`
* `a#lavalamp` including a `span` = `Loading`

## How it works

There are 2 buttons: `#previous` and `#next`, that encapsulate the page.

When either of them is clicked, the `#lavalamp` HTML element covers the whole viewport while both the **content** of the page and the **scroll position** are updated.

Because all 3 elements look the same, it looks like the button clicked is **expanding** to cover the page.

For example, if you click *next*:

* the `lavalamp` is displayed, and initially positioned on top of the `next` button
* the `lavalamp`'s `bottom` and `height` properties are animated through CSS to cover the whole page
* scrolling is temporarily disabled
* the page scrolls to the top
* when the new content is loaded, the `lavalamp` is animated upwards to match the `previous` button
* the `lavalamp` is hidden and reset, scrolling is re-enabled

## Additional details

* For the sake of the **demo**, I use a `setTimeout` to simulate an Ajax call (the content remains unchanged).
* I also use a timeout after the last animation. I *could* use to detect CSS animation ends, but a timeout provides more flexibility, and prevents having to deal with browser inconsistencies. Plus, it's only 1 line.
* The `previous` button is the first child, the `next` button is the last child. It's *possible* to have other elements before and/or after, but then the illusion of the clicked button expanding is harder to execute because the `lavalamp` needs to be positioned *exactly* on the clicked button (which in the case, would not be exactly at `top: 0;` or `bottom: 0;`). It's possible to change the CSS animation values if needed though.
* The viewport is the whole `body`. It's possible to have a fixed **header** and/or **footer** as well, because the `lavalamp` is fixed as well. So, if you have a header that's `70px` high, just change the CSS animation's `top` values to be `70px`, not `0`; (GIF demo coming soon).

## Is this production-ready?

Definitely **not**. It's merely a demo to showcase the intended user experience. Feel free to implement as you wish.

## License

The MIT License (MIT)

Copyright (c) 2014 Jeremy Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.