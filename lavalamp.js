(function ($) {
  'use strict';

  $.fn.lavalamp = function() {
    var self = this;
    var $lavalamp = self.find('#lavalamp');
    var $previous = self.find('#lavalamp-previous');
    var $next = self.find('#lavalamp-next');
    var canScroll = true;
    var startSpeed = 1000;
    var endSpeed = 500;

    this.animate = function(direction, scrollTarget) {
      var startClass = direction + '-start';
      var endClass = direction + '-end';

      canScroll = false;
      $lavalamp.addClass(startClass);

      setTimeout( function() {
        canScroll = true;
        $(window).scrollTop(scrollTarget);
        $lavalamp.removeClass(startClass).addClass(endClass);
      }, startSpeed);

      setTimeout( function() {
        $lavalamp.removeClass();
      }, startSpeed + endSpeed);
    }

    $previous.click( function() {
      self.animate('down', $(document).height());
    });

    $next.click( function() {
      self.animate('up', 0);
    });

    $(window).on('mousewheel', function(ev){
      if (!canScroll) {
        ev.preventDefault();
      }
    })

    return this;
  };
})(jQuery);