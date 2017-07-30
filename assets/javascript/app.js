///////////////////
// Sneaker      //
//      Trivia //
/////////////////

/* Pseudo Code - by Narin Sundarabhaya

A basic Multiple Choice Trivia Game
 
Click to Start

Timer begins at 60 seconds and countdown

Player goes through all 10 questions
player can only guess one answer per question

Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
            ques: "When was the first Air Max made?",
            ans: ["2000", "1987", "1995", "1988"],
            name: "firstAirmax",
            correct: "1987",
            divClass: ".firstAirmax"
        },
        {
            ques: "Nike paid design student, Carolyn Davison, how much for their Swoosh Logo?",
            ans: ["$1000", "$13", "$100", "$35"],
            name: "swoosh",
            correct: "$35",
            divClass: ".swoosh"
        },
        {
            ques: "What was the first clothing brand to partner with Nike?",
            ans: ["Patta", "Undefeated", "Stussy", "Diamond Supply Co."],
            name: "colab",
            correct: "Stussy",
            divClass: ".colab"
        },
        {
            ques: "Who was Nike's first professional athlete endorser?",
            ans: ["John McEnroe", "Michael Jordan", "Ilie Nastase", "Steve Prefontaine"],
            name: "endorser",
            correct: "Ilie Nastase",
            divClass: ".endorser"
        },
        {
            ques: "When was the first Air Force 1 made?",
            ans: ["1982", "1983", "1984", "1985"],
            name: "firstForce",
            correct: "1982",
            divClass: ".firstForce"
        },
        {
            ques: "Who designed the Air Max technology?",
            ans: ["Phil Knight", "Bill Bowerman", "Tinker Hatfield", "Hidefumi Hommyo"],
            name: "airMaxDesigner",
            correct: "Tinker Hatfield",
            divClass: ".airMaxDesigner"
        },
        {
            ques: "When was the first Air Jordan 1's released to the public?",
            ans: ["2000", "1987", "1995", "1985"],
            name: "jordan",
            correct: "1985",
            divClass: ".jordan"
        },
        {
            ques: "Nike's first sneaker design goes under what name today?",
            ans: ["Air Max 1", " Cortez", "Structure Triax", "Air Force 1"],
            name: "firstDesign",
            correct: "Cortez",
            divClass: ".firstDesign"
        },
        {
            ques: "Which state was Nike's first retail space was opened in?",
            ans: ["Oregon", "New York", "California", "Florida"],
            name: "retailStore",
            correct: "California",
            divClass: ".retailStore"
        },
        {
            ques: "Nike was originally a distribution company for which brand?",
            ans: ["Adidas", "New Balance", "Saucony", "Onitsuka Tiger"],
            name: "distribution",
            correct: "Onitsuka Tiger",
            divClass: ".distribution"
        }
    ] // end questions object

var labels = ["first", "second", "third", "forth"];
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let wrongArray = [];
let unAnswered = 0;

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $('.questions .invisible').hide();
    $('.questions firstAirMax').show();
    $(".questions :not('#sub-but')").empty();

    // loops through the 10 questions 
    $('.questions').prepend('<div class="' + questions[currentQuestion].name + '"></div>');
    $(questions[currentQuestion].divClass).append('<div class ="ques-title">' + questions[currentQuestion].ques + '</div>');
    // loops through answers for each radio button
    for (var i = 0; i <= 3; i++) {
        $(questions[currentQuestion].divClass).append('<button type="button" class="btn btn-primary btn-lg" name="' + questions[currentQuestion].name + '" value="' + questions[currentQuestion].ans[i] + '/></button>');
    }
}

// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (currentQuestion > 9) {
            clearInterval(timer);
        } else if (seconds <= 0) {
            $('.container').fadeOut(500);
            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            for (var k = 0; k < wrongArray.length; k++) {
                $('#wrongAnswers').append("<p>" + wrongArray[k].ques + "\n The Correct Answer Was: " + wrongArray[k].correct + "</p>");
            }
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);



}; // end countdown

// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {
    currentQuestion++;
    if (currentQuestion <= 8) {
        tallyScore();
        questionDisplay();
    } else if (currentQuestion <= 9) {
        tallyScore();
        $("#sub-but").prop('value', 'Submit');
        questionDisplay();

    } else if (currentQuestion === 10) {
        // once submit is clicked...
        // tests
        // stop timer
        countdown();
        // fade out questions
        $('.container').fadeOut(500);
        // show answerScreen
        $('#answerScreen').show();
        $('#correctScreen').append(correctAnswers);
        $('#wrongScreen').append(wrongAnswers);
        // display correctAnswers
        // $('#correctScreen').append(correctAnswers);
        // display wrongAnswers
        for (var k = 0; k < wrongArray.length; k++) {
            $('#wrongAnswers').append("<p>" + wrongArray[k].ques + "\n The Correct Answer Was: " + wrongArray[k].correct + "</p>");
        }
    }
}); // end gradeQuiz

function tallyScore() {
    if ($('input:radio[name="' + questions[currentQuestion - 1].name + '"]:checked').val() === questions[currentQuestion - 1].correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
        wrongArray.push(questions[currentQuestion - 1]);
    };
};