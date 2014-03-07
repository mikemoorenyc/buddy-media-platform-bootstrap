// fix for "click" event on thumbs "in frame"

<script>
!function( $ ) {
    $(function() {

        // bind click once
        function bindThumbClick() {
            $( '#mod_youtube' ).one( 'click', '.main_container .video_thumbs', function( e ) {
                $( this ).find( '.pagination_thumb_img' ).trigger( 'click' );
            });
        }

        // call this on load
        bindThumbClick();

        // when we click back - bind again
        $( '#mod_youtube' ).on( 'click', '.back_to_menu_btn', function() {
            bindThumbClick();
        });
        $( '#mod_youtube' ).on( 'click', '.group_title', function() {
            bindThumbClick();
        });
    });
}( jQuery );
</script>
