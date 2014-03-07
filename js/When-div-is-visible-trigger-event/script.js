<script>
/*
jQuery event to trigger action when a div is made visible

original idea from here:
http://stackoverflow.com/questions/1225102/jquery-event-to-trigger-action-when-a-div-is-made-visible
*/
$(function() {
  var _oldShow = $.fn[ 'show' ];
  $.fn[ 'show' ] = function() {
    var hidden = this.find( ':hidden' ).add(this.filter( ':hidden' ));
    var result = _oldShow.apply(this, arguments);

    hidden.filter( ':visible' ).each( function() {
      $(this).triggerHandler( 'show' );
    });
    return result;
  }
});

jQuery( function( $ ) {
  // when result is visible - show form (or do some other stuff - change text, color...)
  $( '.quizResultContainer' ).bind( 'show', function() {
    var fb = $( '#mod_enterToWin' );
    
    // show form
    fb.fadeIn( 1000 );
  });
});
</script>