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
function startQuiz(questions, quizContainer, showResults, submitButton){
   

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

                // `<div class="question"> ${questions[i].question} </div>
                // <div class="answers"> ${answers.join('')} </div>` 
                
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'

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

            // var selector = `input[name=question${i}]:checked`;
            // userAnswer = (answerContainer[i].querySelector(selector) || {}).value;
            //can i use just querySelector like this??

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


startQuiz(myQuestions, quizContainer, showResults, submitButton);

