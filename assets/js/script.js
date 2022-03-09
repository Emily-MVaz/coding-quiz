// const
const startButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");
const showResults = document.getElementById("results");

//var



//Questions
const myQuestions = [
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
            a: "<!-- This is a comment -->",
            b: "/* This is a comment */",
            c: "//This is a comment"
        },
        correctAnswer: "c"
     },
     {
        question: "" ,
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: "a"
     },
];



// Functions

//making the quiz
function quizStart(){

}


//showing the result
function quizResults(){

}


// show results when submit is clicked
submitButton.addEventListener("click", showResults)

//