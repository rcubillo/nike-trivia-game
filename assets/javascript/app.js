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


var correctArray = ["1987", "35", "stussy", "nastase", "1982", "hatfield", "1985", "cortez", "california", "onitsuka-tiger"]


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
            $("#time-remain").html(seconds);

            if (seconds <= 0) {
                alert("Times Up!");
                clearInterval(timer);
                return;
            }
        }, 1000);
    } // end countdown

// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {
    var correctAnswers = 0;
    var wrongAnswers = 0;

    var questionOne = $('.firstAir input[name="firstAir"]').on('click', function() {
        if ($('input:radio[name="firstAir"]:checked').val() === correctArray[0]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionOne

    var questionTwo = $('.swoosh input[name="swoosh"]').on('click', function() {
        if ($('input:radio[name="swoosh"]:checked').val() === correctArray[1]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionTwo

    var questionThree = $('.partner input[name="partner"]').on('click', function() {
        if ($('input:radio[name="partner"]:checked').val() === correctArray[2]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionThree

    var questionFour = $('.endorser input[name="endorser"]').on('click', function() {
        if ($('input:radio[name="endorser"]:checked').val() === correctArray[3]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionFour

    var questionFive = $('.firstForce input[name="firstForce"]').on('click', function() {
        if ($('input:radio[name="firstForce"]:checked').val() === correctArray[4]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionFive

    var questionSix = $('.airMaxDesigner input[name="airMaxDesigner"]').on('click', function() {
        if ($('input:radio[name="airMaxDesigner"]:checked').val() === correctArray[5]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionSix

    var questionSeven = $('.jordan input[name="jordan"]').on('click', function() {
        if ($('input:radio[name="jordan"]:checked').val() === correctArray[6]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionSeven

    var questionEight = $('.firstDesign input[name="firstDesign"]').on('click', function() {
        if ($('input:radio[name="firstDesign"]:checked').val() === correctArray[7]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionEight

    var questionNine = $('.firstStore input[name="firstStore"]').on('click', function() {
        if ($('input:radio[name="firstStore"]:checked').val() === correctArray[8]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionNine

    var questionTen = $('.originalBrand input[name="originalBrand"]').on('click', function() {
        if ($('input:radio[name="originalBrand"]:checked').val() === correctArray[9]) {
            correctAnswers++;
            console.log("this read right. Correct answers :" + correctAnswers);
        } else {
            wrongAnswers++;
            console.log("Wrong! Wrong Answeres: " + wrongAnswers);
        }
    }); // end questionTen

    // once submit is clicked...

    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').css('visibility', 'visible');
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

    // tests
    console.log('Correct Answers: ' + correctAnswers);
    console.log('Wrong Answers: ' + wrongAnswers);

}); // end gradeQuiz