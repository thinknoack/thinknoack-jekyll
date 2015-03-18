(function($) {
  Drupal.behaviors.deadBrowser = {
  attach: function(context, settings) {
    if (bowser.msie && bowser.version <= 8) {
        $('body').addClass('deadBrowser');
        $('<div class="hbMarkup"></div>').prependTo('body');
        $('.hbMarkup').load( "/sites/district/themes/blp_boot/js/happybrowser/happybrowserIE.html" );

      }
      else if (bowser.c && !bowser.msie) {
        $('body').addClass('deadBrowser');
        $('<div class="hbMarkup"></div>').prependTo('body');
        $('.hbMarkup').load( "/sites/district/themes/blp_boot/js/happybrowser/happybrowser.html" );

      }
    }
  }
  $(document).ready(function() {
      $('body').on("click", "#dismiss", function(){
        $('.hbMarkup').remove();
      });
  });  
})(jQuery);