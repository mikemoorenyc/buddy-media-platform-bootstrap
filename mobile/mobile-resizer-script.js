<script>
$(document).ready(function(){

$('.moduleHeader h3, .modulePhoto .title').wrapInner('<span />');

});

</script>

<script>
$(document).ready(function(){
  $('#main').wrap('<div id="main-wrap" />');
	
	$('.moduleSlideshow .photogallery_swipe_gallery, .moduleYouTube .youtube_videos').addClass('bmclearfix');
	
/*photogallery resizing*/
	var galx = $('.moduleSlideshow .moduleContent').width();
	$('.moduleSlideshow .photogallery_quad_gallery_each_a, .moduleSlideshow .swipe_pagination_dots').width(galx);

/*youtubegallery resizing*/
	var tubex = $('.moduleYouTube .moduleContent').width();
	$('.moduleYouTube .youtube_video_information_title_wrapper, .moduleYouTube .swipe_pagination_dots').width(tubex);	
	
/*quad productgallery resizing*/
	var quadx = $('.productgallery_quad_swipe_gallery_wrapper').width();
	$('.productgallery_quad_swipe_gallery_wrapper .productgallery_quad_gallery_each_a').width(quadx / 2);
	$('.productgallery_quad_swipe_gallery_wrapper .swipe_pagination_dots').width(quadx);	
	
/*singel productgallery resizing*/
	var prodx = $('.productgallery_single_swipe_gallery_wrapper').width();
	$('.productgallery_single_swipe_gallery_wrapper .productgallery_single_swipe_gallery li > div').width(prodx);
	$('.productgallery_single_swipe_gallery_wrapper .swipe_pagination_dots').width(prodx);		
	

/*fire on resize*/
$(window).resize(function(){
	var galx = $('.moduleSlideshow .moduleContent').width();
	$('.moduleSlideshow .photogallery_quad_gallery_each_a, .moduleSlideshow .swipe_pagination_dots').width(galx);	

	var tubex = $('.moduleYouTube .moduleContent').width();
	$('.moduleYouTube .youtube_video_information_title_wrapper, .moduleYouTube .swipe_pagination_dots').width(tubex);
	
	var quadx = $('.productgallery_quad_swipe_gallery_wrapper').width();
	$('.productgallery_quad_swipe_gallery_wrapper .productgallery_quad_gallery_each_a').width(quadx / 2);
	$('.productgallery_quad_swipe_gallery_wrapper .swipe_pagination_dots').width(quadx);		
	
/*singel productgallery resizing*/
	var prodx = $('.productgallery_single_swipe_gallery_wrapper').width();
	$('.productgallery_single_swipe_gallery_wrapper .productgallery_single_swipe_gallery li > div').width(prodx);
	$('.productgallery_single_swipe_gallery_wrapper .swipe_pagination_dots').width(prodx);	

});


});
</script>

<script>
$(document).ready(function(){

var windowx = $(window).width();
var percenter = windowx / 640 ;
if ( 640 >= windowx ) {
$('#main, .bmhelper').css({
'font-size' : ( 16 * percenter )+'px' 
});
} else {

$('#main, .bmhelper').css({
'font-size' : (16)+'px' 
});

}

$(window).resize(function(){

var windowx = $(window).width();
var percenter = windowx / 640 ;
if ( 640 >= windowx ) {
$('#main, .bmhelper').css({
'font-size' : ( 16 * percenter )+'px' 
});
} else {

$('#main, .bmhelper').css({
'font-size' : (16)+'px' 
});

}

});

});
</script>


<script>
$(window).load(function(){

	$('.moduleSlideshow .photogallery_swipe_gallery, .moduleYouTube .youtube_videos').addClass('bmclearfix');
	
/*photogallery resizing*/
	var galx = $('.moduleSlideshow .moduleContent').width();
	$('.moduleSlideshow .photogallery_quad_gallery_each_a, .moduleSlideshow .swipe_pagination_dots').width(galx);

/*youtubegallery resizing*/
	var tubex = $('.moduleYouTube .moduleContent').width();
	$('.moduleYouTube .youtube_video_information_title_wrapper, .moduleYouTube .swipe_pagination_dots').width(tubex);	
	
/*quad productgallery resizing*/
	var quadx = $('.productgallery_quad_swipe_gallery_wrapper').width();
	$('.productgallery_quad_swipe_gallery_wrapper .productgallery_quad_gallery_each_a').width(quadx / 2);
	$('.productgallery_quad_swipe_gallery_wrapper .swipe_pagination_dots').width(quadx);	
	
/*singel productgallery resizing*/
	var prodx = $('.productgallery_single_swipe_gallery_wrapper').width();
	$('.productgallery_single_swipe_gallery_wrapper .productgallery_single_swipe_gallery li > div').width(prodx);
	$('.productgallery_single_swipe_gallery_wrapper .swipe_pagination_dots').width(prodx);		

});

</script>