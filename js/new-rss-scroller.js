// ex. https://apps.facebook.com/prod_preview_iframe/p.php?category_id=2324&bm_fb_app_id=146934845378292


<script>
(function( $ ) {
    $(function() {

        var RssScroll = function( obj ) {
            
            // defaults
            this.module = obj.module || 'moduleRSS';
            this.visible = obj.visible || 4;
            this.multiplier = 1;
            this.pagesCount = 0;
        };

        RssScroll.prototype = {

            navigate: function( e ) {
                var dir = $( e.target ).attr( 'href' ) === '#prev' ? -1 : 1;

                this.multiplier = ( ( this.multiplier + dir ) < 1 ) ? 1 : ( this.multiplier + dir );
                this.multiplier = ( this.multiplier > this.pagesCount ) ? ( this.multiplier - 1 ) : this.multiplier;

                this.showSlides( this.multiplier );
                return false;
            },


            showSlides: function( m ) {
                this.hideAll();
                $( this.module ).find( '.item' ).slice( (m - 1) * this.visible, (m * this.visible) ).removeClass( 'hidden' );
            },


            hideAll: function() {
                $( this.module ).find( '.item' ).addClass( 'hidden' );
            },


            pages: function() {
                return Math.ceil( $( '.item', this.module ).length / this.visible );
            },


            createNav: function() {
                var nav = $('<div />', { 'class': 'nav' }),
                    navL = $('<a />', { 'class': 'arrow arrow--prev', 'href': '#prev' }),
                    navR = $('<a />', { 'class': 'arrow arrow--next', 'href': '#next' });

                nav.append( navL, navR );
                $( this.module ).find( '.moduleContent' ).append( nav );

                nav.on( 'click', 'a', $.proxy( this.navigate, this ) );
            },


            init: function() {
                this.createNav();
                this.showSlides( 1 );
                this.pagesCount = this.pages();
            }
        };


        var instaScroll = new RssScroll({
            module: '#mod_instagram',
            visible: 4
        });

        instaScroll.init();
    });
}( jQuery ));
</script>




<style>
/* Instagram
   ---------------------------------------------- */

/* item */
#mod_instagram .item {
    float: left;
    padding-bottom: 0;
    margin-bottom: 25px;
    width: 390px;

    -webkit-animation: FadeIn 0.3s forwards;
    -moz-animation: FadeIn 0.3s forwards;
    -o-animation: FadeIn 0.3s forwards;
    animation: FadeIn 0.3s forwards;
}
#mod_instagram .item.even {
    margin-left: 30px;
}
/* nav */
#mod_instagram .nav {
    background: url(https://d3hok70xjqsuiy.cloudfront.net/themes/856/bg-nav-divider_1363723718.gif) no-repeat 756px top;
    height: 32px;
    overflow: hidden;
    position: relative;
    top: -10px;
}
.arrow--prev,
.arrow--next {
    position: absolute;
    right: 25px;
    top: 0;
}
.arrow--prev {
    right: 67px;
}
</style>
