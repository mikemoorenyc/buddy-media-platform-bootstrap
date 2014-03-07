<!-- Chris Nager 11/15/11

     This script allows you to change the default FormBuilder button text,
     which normally reads "Click here to begin." Artem and I threw this
     together so that the client could change the button text by just
     entering the desired text in the bm_buttonText variable. To use, just
     add a hidden HTML sapplet and copy and paste this script inside. Be
     sure to target your "#mod_whatever .bmButton span" correctly. -->

<script>
    $( document ).ready( function() {
        var bm_buttonText = 'Enter Now';
        $( 'span', '#mod_form .bmButton' ).html( bm_buttonText );
    });
</script>
