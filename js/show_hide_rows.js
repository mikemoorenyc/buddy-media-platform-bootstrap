// use this when you have a top nav that shows & hides rows throughout a tab
// example here: https://disney.buddymedia.com/profilebuddy/content/16688
//
// thanks goes to Artem for making this DRY. my original was a mess.

<script>
	$(document).ready(function(){
		first  = $('#row_1');
		second = $('#row_2');
		third  = $('#row_3');
		fourth = $('#row_4');
		fifth  = $('#row_5');
		sixth  = $('#row_6');

		$('#mod_nav li').click(function(e) {
			$(this).addClass('active').siblings().removeClass('active');

			var row = $(this).attr('class'); // breaks here, row = 'row_X active'
			var temp = [];
			temp = row.split(' ');

			$('.row').each(function(i) {
				var curr_row = $(this).attr('id');
				if (curr_row != 'row_0') {
					$(this).hide();
				};
			});

			$('#' + temp[0] + '').show();
			e.preventDefault();
		});
	});
</script>