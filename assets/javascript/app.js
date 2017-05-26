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

var questions = {
        firstAir: {
            ques: "When was the first Air Max made?",
            ans: ["2000", "1987", "1995", "1988"]
        },
        swoosh: {
            ques: "Nike paid design student, Carolyn Davison, how much for their Swoosh Logo?",
            ans: ["$1000", "$13", "$100", "$35"]
        },
        partner: {
            ques: "What was the first clothing brand to partner with Nike?",
            ans: ["Patta", "Undefeated", "Stussy", "Diamond Supply Co."]
        },
        endorser: {
            quest: "Who was Nike's first professional athlete endorser?",
            ans: ["John McEnroe", "Michael Jordan", "Ilie Nastase", "Steve Prefontaine"]
        },
        firstForce: {
            quest: "When was the first Air Force 1 made?",
            ans: ["1982", "1983", "1984", "1985"]
        },
        airMaxdesigner: {
            ques: "Who designed the Air Max technology?",
            ans: ["Phil Knight", "Bill Bowerman", "Tinker Hatfield", "Hidefumi Hommyo"]
        },
        jordan: {
            ques: "When was the first Air Jordan 1's released to the public?",
            ans: ["2000", "1987", "1995", "1985"]
        },
        firstDesign: {
            ques: "Nike's first sneaker design goes under what name today?",
            ans: ["Air Max 1", " Cortez", "Structure Triax", "Air Force 1"]
        },
        firstStore: {
            ques: "Which state was Nike's first retail space was opened in?",
            ans: ["Oregon", "New York", "California", "Florida"]
        },
        originalBrand: {
            ques: "Nike was originally a distribution company for which brand?",
            ans: ["Adidas", "New Balance", "Saucony", "Onitsuka Tiger"]
        }
    } // end questions object

var correctArray = ["1987", "35", "stussy", "nastase", "1982", "hatfield", "1985", "cortez", "california", "onitsuka-tiger"];
var radioName = ["firstAir", "swoosh", "partner", "endorser", "firstForce", "airMaxDesigner", "jordan", "firstDesign", "firstStore", "originalBrand"];


// click to start
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
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

// click to restart
var restartGame = $('#wrong-start').on('click', function() {
    $('#timesUp').fadeOut(500);
    $('.container').show().fadeIn();
    $('input:radio').prop('check', false);
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
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
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