<script>
//
// do not use this file,
// this is testing file...
//

;(function( $, window, undefined ) {

  // defaults
  var pluginName = 'instagramScroll',
      document = window.document,
      defaults = {
        'visible': 1,
        'step': 1
      };

  // plugin constructor
  function InstagramScroll( el, options ) {
    this.$el = $( el );

    // extend default options
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;

    // init plugin
    this.init();
  };

  // init plugin
  InstagramScroll.prototype.init = function() {
    this.currentIndex = 0;
    this.itemsLength = 0; // items in feed
    this.oWidth = 0;      // outer width of one item

    // step == to items we see at once and is in px how many we scroll
    // TO-DO: change to independent step
    this.step = 0;

    this.cacheElements();
    this.bindEvents();
    this.render();

    // get how many pages
    this.pages = this.getPages();
  };

  // cache elements
  InstagramScroll.prototype.cacheElements = function() {
    this.$mContent = this.$el.find( '.moduleContent' );

    // items
    this.$items = this.$el.find( '.item' );
    this.itemsLength = this.$items.length;
  };

  // bind Events
  InstagramScroll.prototype.bindEvents = function() {
    this.$mContent.on( 'click', '.prev, .next', $.proxy( this.navigate, this ));
  };

  // render UI
  InstagramScroll.prototype.render = function() {
    this.buildNav();
    this.buildReel();
  };

  // add navigation buttons
  InstagramScroll.prototype.buildNav = function() {
    var prev = $( '<a />', {
          'class': 'prev',
          'href': '#',
          'text': '‹'
        }),
        next = $( '<a />', {
          'class': 'next',
          'href': '#',
          'text': '›'
        });

    this.$mContent.append( prev, next );
  };

  // build items reel
  InstagramScroll.prototype.buildReel = function() {
    var one = this.$items.eq( 0 ),
        reel = $( '<div />', {
          'class': 'itemsReel'
        }),
        viewport = $( '<div />', {
          'class': 'viewport'
        });

    // this outer width of item: padding + margins
    this.oWidth = one.outerWidth( true );

    // create reel
    this.$items.wrapAll( reel );
    this.$reel = this.$el.find( '.itemsReel' );
    this.$reel.width( this.oWidth * this.itemsLength );

    // viewport
    this.$reel.wrap( viewport );
    this.$viewport = this.$el.find( '.viewport' );
    this.$viewport.width( this.oWidth * this.options.visible );

    // step == to items we see at once and is in px how many we scroll
    // TO-DO: change to independent step
    this.step = this.oWidth * this.options.visible;
  };

  // on click - navigate
  InstagramScroll.prototype.navigate = function( e ) {
    var dir = $( e.target ).attr( 'class' ),
        left;

    dir === 'prev' ? this.currentIndex -= 1 : this.currentIndex += 1;
    this.checkIndex();
    left = this.currentIndex * this.step;
    this.$reel.css( 'left', -left );

    e.preventDefault();
  };

  InstagramScroll.prototype.checkIndex = function() {
    // console.log( 'checking index' + this.currentIndex + ' pages ' + this.pages );
    if ( this.currentIndex < 0 ) {
      this.currentIndex = this.pages - 1;
    } else if ( this.currentIndex > ( this.pages -1 )) {
      this.currentIndex = 0;
    }
  };

  InstagramScroll.prototype.getPages = function() {
    return Math.ceil( this.itemsLength / this.options.visible );
  };

  // Main
  $.fn[ pluginName ] = function( options ) {
    return this.each(function() {
      if ( !$.data( this, 'plugin_' + pluginName )) {
        $.data( this, 'plugin_' + pluginName, new InstagramScroll( this, options ));
      }
    });
  };

}( jQuery, window ));


jQuery( function( $ ) {
  $( '#mod_instagram' ).instagramScroll({
    'visible': 3
  });

  $( '#mod_instagram2' ).instagramScroll();
});

</script>