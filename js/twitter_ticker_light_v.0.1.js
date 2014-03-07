<script type="text/javascript">

	$(document).ready(function() {

		/**
	 	 *
	 	 * Main variables
	 	 * example: http://workshop.rs/demo/news-ticker-in-4-lines/
	 	 *
	 	 */
	 	var module = 'mod_twitter'; /* twitter module to scroll */
	 	var speed = 4000; /* scrolling speed */
		var t;

		/**
	 	 *
	 	 * Scrolling function
	 	 *
	 	 */
		var tick = function() {
			$('.item', '#' + module + ' .items').eq(0)
				.slideUp(
					function() {
						$(this).appendTo(items).slideDown();
					});
			t = setTimeout(function() { tick(); }, speed);
		};
	
		/* selecting items container */
		var items = $('div:first', '#' + module + ' .items');
		
		/* on mouse: enter - stop scroll, on mouse leave - start scrol again */
		items
			.bind('mouseenter', function() { 
				clearTimeout(t);
			})
			.bind('mouseleave', function() { 
				tick();
			});

		/* on document loaded - start scrolling items */
		tick();
	});

</script>