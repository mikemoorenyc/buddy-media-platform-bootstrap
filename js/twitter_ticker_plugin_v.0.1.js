<script type="text/javascript">
	
	/**
	 *
	 * Twitter Ticker Plugin v.0.1
	 *
	 * example: http://workshop.rs/demo/news-ticker-in-4-lines/
	 * https://apps.facebook.com/prod_preview_iframe/p.php?fb_sig_profile_id=245986392108242&bm_fb_api_key=9761b8afac3c578cb8ebda9754381452&bm_fb_app_id=123881210991106&bm_sig_locale=zz_ZZ&preview=true&nocache=true
	 *
	 * Use:
	 * $('#mod_twitter').twitterTicker(); or $('#mod_twitter').twitterTicker({speed: 4500});	
	 * where 4500 == 4.5sec
	 *
	 * You can have 1 or more twitter sapplets on page using this plugin, call (see at the end of this script):
	 *
	 * $('#mod_twitter_one').twitterTicker();
	 * $('#mod_twitter_2').twitterTicker({speed: 4500});
	 * $('#mod_twitter_my').twitterTicker({speed: 5000});
	 * ...
	 * $('#mod_twitter_nth').twitterTicker({speed: 2500});
	 *
	 */
	(function($, doc, win) {

		/**
		 *
		 * Constructor function
		 *
		 */
		function Ticker(el, options) {
			this.defaults = {
				speed: 3500	/* default tick speed is 3.5sec */
			}
			this.options = $.extend(this.defaults, options);

			this.t = false;
			this.timerOn = false;

			this.el = $(el);	/* get module */
			this.items = this.el.find('.items').find('div').eq(0); /* items list */

			this.init();
		};

		/**
		 *
		 * Init Ticker
		 *
		 */
		Ticker.prototype.init = function() {
			this.tick();
			this.mouseEvents();
		};

		/**
		 *
		 * Handle mouse events:
		 * 1. Mouse over sapplet - stop ticking, so you can read/share tweet
		 * 2. Mouse out of sapplet - start again
		 *
		 */
		Ticker.prototype.mouseEvents = function() {
			var that = this;

			this.el
				.bind('mouseenter', function() {
					that.stopTick();
				})
				.bind('mouseleave', function() {
					that.startTick();
				});
		};

		/**
		 *
		 * Tick function, self-invoke
		 *
		 */
		Ticker.prototype.tick = function() {
			var that = this;

			this.items.find('.item').eq(0)
				.slideUp(
					function() {
						$(this).appendTo(that.items).slideDown();
					});

			this.t = setTimeout(
				function() {
					that.tick();
				}, 
				this.options.speed);
		};

		/**
		 *
		 * Start tick after stop
		 *
		 */
		Ticker.prototype.startTick = function() {
			if (!this.timerOn) { 
				this.tick();
				this.timerOn = true;
			}
		};

		/**
		 *
		 * Stop tick if ticking
		 *
		 */
		Ticker.prototype.stopTick = function() {
			clearTimeout(this.t);
			this.timerOn = false;
		};

		/**
		 *
		 * Main Plugin prototype function
		 *
		 */
		$.fn.twitterTicker = function(options) {
			return this.each(function() {
				new Ticker(this, options);
			});
		};

	}(jQuery, document, window));	/* end Twitter Ticker Plugin */

	
	/* regular jQuery begins here... */
	$(document).ready(function(){
		$('#mod_twitter').twitterTicker();
		$('#mod_porsche').twitterTicker({speed: 4000});
	});

</script>