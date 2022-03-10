

// variables
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("quiz");
var showResults = document.getElementById("results");

//Questions
var myQuestions = [
    {
    question: "Which of the following displays a string data type?" ,
    answers: {
        a: "var a = 20",
        b: "var a = 'abcde'",
        c: "var a = true "
    },
    
    correctAnswer: "b"
    },
    {
        question: "Which of the following is a single line comment in Javascript? ",
        answers: {
            a: "This is a comment",
            b: "/* This is a comment */",
            c: "//This is a comment"
        },
        correctAnswer: "c"
    }
];

//STRUCTURE

//Quiz Container
function startQuiz(questions, quizContainer, showResults, submitButton, startButton){


    // Display quiz questions
    function displayQuestions(questions, quizContainer){

        //what the user chooses
        var userInput = []
        //the answer choices
        var answers;

        //for every question asked
        for(var i=0; i<questions.length; i++){

            //resets answers
            answers = [];

            //for every answer
            for(letter in questions[i].answers){

                //add a radio button
                answers.push(
                    
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                
                    
                    // `<label>
                    // <input type="radio" name="question ${i}" value="${letter}">
                    // ${letter} :
                    // ${ questions[i].answers[letter]}
                    // </label>`
                );
            }

            //add question and answers to the output
            userInput.push(
                //add questions and add answers
                //template literal

                `<div class="slide">
                    <div class="question"> ${questions[i].question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
                
                // '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
                
                
            );
        }

        quizContainer.innerHTML = userInput.join('');
    }


    //Show quiz results
    function quizResults(questions, quizContainer, showResults){

        // put together all answers
        var answerContainers = quizContainer.querySelectorAll(".answers")

        var userAnswer = "";
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){

            //find the chosen answer
            userAnswer = (answerContainers[i].querySelector("input[name=question" + i + "]:checked") || {}).value;

            //if the answer is correct
            if(userAnswer === questions[i].correctAnswer){
                //number of correct answers goes up
                numCorrect++;

                //answers turn green
                answerContainers[i].style.color = "green";
            }

            //if the answer is wrong or left blank
            else{
                
                //answers turn red
                answerContainers[i].style.color = "red";
            }
        }

        //display number of correct answers
        showResults.innerHTML = numCorrect + " out of " + questions.length;
    }

    displayQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        quizResults(questions, quizContainer, showResults)
    }
}

//pagination functions
function showSlide(n) {
    //hides the current slide on screen
    slides[currentSlide].classList.remove("active-slide");
    //shows the new slide
    slides[n].classList.add("active-slide");
    //updates the slide number
    currentSlide = n;

    //if on the first question, then there is no previous button
    if(currentSlide === 0){
        previousButton.style.display = "none";
    //otherwise there is a previous button
    } else {
        previousButton.style.display = "inline-block";
    }
    //if on the last question there is no next button and submit is shown
    if(currentSlide === slides.length-1){
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    //otherwise there is a next button and submit is hidden    
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}




startQuiz(myQuestions, quizContainer, showResults, submitButton);

//pagination
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");

let currentSlide = 0;

showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}


//event listeners

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
