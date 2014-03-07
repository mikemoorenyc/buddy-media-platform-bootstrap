// input placeholders - wrong way, there is no better way in cms

<script>
(function( $ ) {

    $(function() {
        var labels = [];

        var checkText = function( e ) {
            var el = $( e.target ),
                val = el.val();

            if ( e.type === 'blur' && ( val === '' || ($.inArray( val, labels ) !== -1 ) ) ) {
                el.siblings( 'label' ).removeClass( 'hidden' );

                return;
            }

            el.siblings( 'label' ).addClass( 'hidden' );
        };

        $( '.fieldText', '.moduleFormBuilder' ).each(function() {
            var lbl = $( 'label', this ).clone();

            lbl.find( '.requiredField' ).remove();
            labels.push( lbl.text() );
        });

        $( '.fieldText input', '.moduleFormBuilder' ).on( 'click blur focus', checkText );
    });

}( jQuery ));
</script>
