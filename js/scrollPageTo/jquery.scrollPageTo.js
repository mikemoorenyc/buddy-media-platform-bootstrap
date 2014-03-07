<script>
/*!
 * jQuery plugin
 * Scroll Page to element with ID
 */
; (function( $ ) {
    "use strict";

    $.fn.scrollPageTo = function() {
      return this.each(function() {
        var href, modPos;

        if ( $( this ).attr( 'rel' ) === 'scrollPageTo' ) {
          href = $( this ).attr( 'href' ).substr(1);
          modPos = Math.ceil( $( '#' + href ).offset().top );
          
          $( this ).on( 'click', function() {
            FB.Canvas.getPageInfo(function( info ) { 
              FB.Canvas.scrollTo( 0, modPos );
            });
            return false;
          })
        }
      });
    };
  }( jQuery ));
</script>