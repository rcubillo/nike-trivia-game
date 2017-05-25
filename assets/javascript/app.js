///////////////////
// Sneaker      //
//      Trivia //
/////////////////
// 
// Pseudo Code - by Narin Sundarabhaya
// 
// A basic Multiple Choice Trivia Game
// 
// Click to Start
// 
// Timer begins at 60 seconds and countdown
// 
// Player goes through all 10 questions
// player can only guess one answer per question
// 
// Once completed, player submit's answers
// HTML is updated with users score
// Score includes: time spent, answers correct, and answers wrong

// Global Variables

var correctArray = ["1987", "35", "stussy", "nastase", "1982", "hatfield", "1985", "cortez", "california", "onitsuka-tiger"];
var radioName = ["firstAir", "swoosh", "partner", "endorser", "firstForce", "airMaxDesigner", "jordan", "firstDesign", "firstStore", "originalBrand"];


// click to start
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().fadeOut(500);
    $('.container').show();
    countdown(60);
});

// click to restart
var restartGame = $('#re-start').on('click', function() {
    $('#answerScreen').fadeOut(500);
    $('.container').show().fadeIn();
    console.log("when is it being clicked?");
    countdown(60);
});


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {

        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + radioName[i] + '"]:checked').val() === correctArray[i]) {

            correctAnswers++;
            console.log("correct!: " + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("correct!: " + wrongAnswers);
        };
    };

    // once submit is clicked...
    // tests
    console.log('Correct Answers: ' + correctAnswers);
    console.log('Wrong Answers: ' + wrongAnswers);
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz