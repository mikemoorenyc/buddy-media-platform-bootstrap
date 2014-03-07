<script>
	// a simple script to fix the terrible markup in the poll sapplet

	$(document).ready(function() {
		var answers = $('.modulePoll .pollAnswer label');
		answers.each(function(i) {
			$(this).contents().filter(function() {
				return this.nodeType == 3;
			})
			.wrap('<span></span>')
			.end()
			.filter('br')
			.remove();
		});
	});
</script>
