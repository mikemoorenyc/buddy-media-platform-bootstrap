// use this script to hide the the background behind a start image of a personality quiz
// once the quiz is activated, the sapplet will be flexible

$(function() {

	var quizImage = $(".modulePersonalityQuiz .personalityQuizStartImage").length;

	if (quizImage <= 1) {
		$(".modulePersonalityQuiz .moduleContainer").css("height", "273px"); // change this value to the height of your start image
	}
	else {
		return;
	}

	$('.modulePersonalityQuiz .personalityQuizStartControls .bmButton').click(function() {
		$('.modulePersonalityQuiz .moduleContainer').css('height', 'auto');
	});

});
