/*
Include this in separate sapplet

Describe all sapplets that goes to phase 1, phase 2... do not include sapplets that are the same for every phase (like, Header, Footer...)

TO-DO: GUI for this and re-view code again
*/
<script>

var phases = [
  {
    "pid": 0,
    "sapplets": [
      { "id": "mod_youtubeTabs" },
      { "id": "mod_pl1" },
      { "id": "mod_pl2" },
      { "id": "mod_pl3" },
      { "id": "mod_pl4" },
      { "id": "mod_poll" },
      { "id": "mod_pollGallery" }
    ]
  },
  {
    "pid": 1,
    "sapplets": [
      { "id": "mod_pollTabs" },
      { "id": "mod_northeast" },
      { "id": "mod_west" },
      { "id": "mod_southeast" },
      { "id": "mod_central" },
      { "id": "mod_youtubeTabs" },
      { "id": "mod_pl1" },
      { "id": "mod_pl2" },
      { "id": "mod_pl3" },
      { "id": "mod_pl4" },
      { "id": "mod_twitter" }
    ]
  },
  {
    "pid": 2,
    "sapplets": [
      { "id": "mod_youtubeTabs" },
      { "id": "mod_pl1" },
      { "id": "mod_pl2" },
      { "id": "mod_pl3" },
      { "id": "mod_pl4" },
      { "id": "mod_map" }
    ]
  }
];

var filterApp = filterApp || {};

jQuery( function( $ ) {
  'use strict';

  var App = {
    init: function() {
      this.length = phases.length;

      this.modifySchema();

      this.hidePhase();
      this.loadPhase( 0 );

      this.cacheElements();

      this.render();
      this.bindEvents();
    },

    cacheElements: function() {
      this.$outer = $( '#fanpage_outer' );
      this.$phases = $( '#phases' );
      this.$phasesLinks = this.$phases.find( 'a' );
    },

    bindEvents: function() {
      this.$phasesLinks.on( 'click', this.changePhase );
    },

    render: function() {
      this.buildUI();
    },

    loadPhase: function( n ) {
      var prop, mod, isHidden,
          obj = phases[ n ][ 'sapplets' ];

      for ( prop in obj ) {
        mod = obj[ prop ][ 'id' ];
        isHidden = obj[ prop ][ 'hidden' ];

        if ( !isHidden ) {
          $( '#' + mod ).fadeIn( 'fast', function() { $( this ).show() });
        }
      };

      // App.modifySchema();
    },

    hideOne: function( n ) {
      var prop, mod, isHidden,
          obj = phases[ n ][ 'sapplets' ];

      for ( prop in obj ) {
        mod = obj[ prop ][ 'id' ];
        $( '#' + mod ).fadeOut( 'fast', function() { $( this ).hide(); });
      }
    },

    hidePhase: function() {
      var obj, prop, prop2,
          i = 0;

      if ( !arguments.length ) {
        for ( ; i < phases.length; i += 1 ) {
          this.hideOne( i );
        }
      } else {
        this.hideOne( arguments[ 0 ] );
      }
    },

    buildUI: function() {
      var filterWrapper = $( '<div>', {
            'id': 'phases'
          }),
          el, i = 0;

      for ( ; i < phases.length; i += 1 ) {
        el = $( '<a>', {
          'href': '#p' + i,
          'text': 'Phase ' + ( i + 1 ),
          'class': ( i === 0 ) ? 'active' : ''
        });
        filterWrapper.append( el );
      }

      this.$outer.prepend( filterWrapper );
      this.cacheElements();
    },

    changePhase: function( e ) {
      var phase;

      App.$phasesLinks.removeClass( 'active' );
      phase = $( e.target ).addClass( 'active' ).attr( 'href' ).slice( 2 );

      App.hidePhase();
      App.loadPhase( parseInt( phase ) );
      return false;
    },

    modifySchema: function() {
      // console.log( 'modify Schema called' );
      var prop, mod, i = 0;

      for ( ; i < phases.length; i += 1 ) {
        for ( prop in phases[ i ][ 'sapplets' ] ) {
          var mod = phases[ i ][ 'sapplets' ][ prop ][ 'id' ];
          // console.log( mod );
          phases[ i ][ 'sapplets' ][ prop ][ 'hidden' ] = $( '#' + mod ).is( ':hidden' );
          // $( '#' + mod ).fadeIn( 'fast', function() { $( this ).show() });
        }
      }
    }
  };

  window.filterApp = App;
  filterApp.init();

});
</script>
<style>
  #phases {
    background: #262626;
    color: #00FF00;
    font-size: 12px;
    padding: 8px 10px;
    border: solid #000 1px;
  }
  #phases a {
    margin: 0 10px;
    color: #00FF00;
  }
  #phases a.active {
    font-weight: bold;
    color: #00E5FF;
  }
</style>