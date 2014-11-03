(function ($) {
  'use strict';

  $.fn.lavalamp = function() {
    var self = this;
    var $window = $(window);
    var $lavalamp = self.find('#lavalamp');
    var $previous = self.find('#lavalamp-previous');
    var $next = self.find('#lavalamp-next');
    var canScroll = true;
    var ajaxCallSimulation = 1000; // Should be longer than the CSS 'start' animation duration.
    var endSpeed = 500; // Matches the CSS 'end' animation duration.

    self.animate = function(direction, scrollTarget) {
      var startClass = direction + '-start';
      var endClass = direction + '-end';

      // Triggers either 'up-start' or 'down-start' CSS animation,
      // which ends up covering the viewport.
      canScroll = false;
      $lavalamp.addClass(startClass);

      // This timeout simulates an Ajax call.
      setTimeout( function() {
        $(window).scrollTop(scrollTarget);
        $lavalamp.removeClass(startClass).addClass(endClass);
      }, ajaxCallSimulation);

      // This timeout waits for the 'end' animation to finish.
      // Could detect its end via JS but it's an overkill.
      // Plus, it adds flexibility to prevent flickering.
      setTimeout( function() {
        canScroll = true;
        $lavalamp.removeClass();
      }, ajaxCallSimulation + endSpeed);
    }

    $previous.click( function() {
      // The document's height is used to scroll to the bottom of the page.
      // Better techniques surely exist.
      self.animate('down', $(document).height());
    });

    $next.click( function() {
      self.animate('up', 0);
    });

    $window.on('mousewheel', function(ev){
      // Disables scrolling while the content is updated and the page scrolls
      // to the top or bottom.
      // Doesn't seem to work in Firefox though.
      if (!canScroll) {
        ev.preventDefault();
      }
    })

    return self;
  };
})(jQuery);