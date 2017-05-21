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

// click to start
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().fadeOut(500);
    $('.container').css('visibility', 'visible');
    countdown(60);
});


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {

        seconds = seconds - 1;
        console.log(seconds);
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);
}