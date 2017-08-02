const questions = [{
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

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let unAnswered = 0;

let startGame = {
        currentQuestion: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        unAnswered:0,
        labels: ["first", "second", "third", "forth"],
        wrongArray: [],
        countdown: function(seconds) {
            var timer = setInterval(function() {
            seconds = seconds - 1;
            $("#time-remain").html(seconds);

            if (this.currentQuestion > 9) {
                clearInterval(timer);
            } else if (seconds <= 0) {
                $('.container').fadeOut(500);
            // loop through correctArray & radioName to match html elements & answers
            for (let i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[this.currentQuestion].name + '"]:checked').val() === questions[this.currentQuestion].correct) {
                    this.correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    this.wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(this.correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(this.wrongAnswers);
            for (let k = 0; k < this.wrongArray.length; k++) {
                $('#wrongAnswers').append("<p>" + this.wrongArray[k].ques + "\n The Correct Answer Was: " + this.wrongArray[k].correct + "</p>");
            }
            $('#timesUp').fadeIn(1000).show();

                // alert("Times Up!");
                clearInterval(timer);
                return;
                }, 1000);
            }
        
        }



    }