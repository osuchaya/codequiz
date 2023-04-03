//global variables
var score = 0;
var timer;
var currentQuestion = 0;
var timeLeft = 60;
var userArray = [];
var scorecount = document.querySelector(".scorecount")
let questions = [
    {
        question: "What does html stand for?",
        answers: ["hypnotext markup language", "hypertext markup language", "hypotext markup language"],
        correctAnswer: 2,
    },

    {
        question: "what does css stand for?",
        answers: ["cascading style sheet", "color style sheet", "copy style sheet"],
        correctAnswer: 1,
    },
    {
        question: "which of the programming language has name similar to island in Indonesia?",
        answers: ["python", "perl", "java"],
        correctAnswer: 3,
    },

    {
        question: "how do you call a step that allows you to publish your code to a live site?",
        answers: ["employment", "deployment", "imployment"],
        correctAnswer: 2,
    },
    {
        question: "which of the following is NOT developer community forum",
        answers: ["stackoverflow", "dev.to", "quora"],
        correctAnswer: 3,
    },
]

function showQuestion(questions) {
    let titleDiv = document.getElementById(".question-text")
    titleDiv.textContent = questions.question - text
    let alts = document.querySelectorAll('.alternative')
    console.log(alts);
    alts.forEach(function (element, index) {
        element.textContent = questions.alternatives[index];
        element.addEventListener('click', function () {
            if (questions.correctAnswer == index) {
                alert("correct answer!");

            } else { alert("wrong answer") }
        })
    })
}
var time = document.querySelector(".timer")
var timeInterval;
function countdown() {


    timeInterval = setInterval(function () {
        time.innerHTML = timeLeft
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval)
        }
    }
        , 1000);

    //if answer wrong then subtract time from clock
}


function displayQuestions() {
    var questiontext = document.querySelector(".question-text");
    questiontext.textContent = questions[currentQuestion].question;
    for (var i = 1; i <= 3; i++) {
        var answerBtn = document.getElementById("label" + i);
        answerBtn.textContent = questions[currentQuestion].answers[i - 1];
    }
}

function checkAnswers() {
    var radios = document.getElementsByName("answer");
    var userAnswer = 0;
    for (var i = 0; i < 3; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value)
            userAnswer = radios[i].value
        }
    }
    var correctAnswer = questions[currentQuestion].correctAnswer;
    console.log(correctAnswer)
    if (userAnswer == correctAnswer) {
        score++;
        scorecount.innerHTML=score
    } else {
        if (timeLeft > 10) {
            timeLeft = timeLeft - 10;
        } else { clearInterval(timeInterval) }

    }
}


window.onload = function () {



    var welcome = document.querySelector(".welcome-section");
    var startbutton = document.querySelector(".start-button");

    var quizcontainer = document.querySelector(".quiz-container");

    var answercontainer = document.querySelector(".answers-container");



    var nextBtn = document.querySelector("#next");



    quizcontainer.style.display = "none"

    startbutton.addEventListener("click", function () {
        console.log("clicked")
        welcome.style.display = "none"
        quizcontainer.style.display = "block"
        answercontainer.style.display = "block"
        countdown();
        displayQuestions();
    })

    nextBtn.addEventListener("click", function () {

        if (questions.length > currentQuestion + 1) {
            checkAnswers();
            currentQuestion = currentQuestion + 1;
            displayQuestions();
        } else {
            endQuiz();
        }
    })

    var lastContainer = document.querySelector(".last-container");
    var userInput = document.querySelector(".userInput");
    var submitBtn = document.querySelector(".submit");

    lastContainer.style.display = "none";
    function endQuiz() {
        lastContainer.style.display = "block";
        quizcontainer.style.display = "none";
        time.style.display = "none";
        submitBtn.addEventListener("click",function(){
            console.log(userInput.value)
            console.log(score)
            var userInfo = {
                name: userInput.value,
                score
            }
            console.log(userInfo);
            userArray.push(userInfo);
            localStorage.setItem("scores",JSON.stringify(userArray))
        })
    }
    function getinfo() {
        var localStorageArray = JSON.parse(localStorage.getItem("scores"))
        console.log(localStorageArray)
        if (localStorageArray!==null) {
            userArray=localStorageArray
        }
    }
    getinfo()
}
//for loop around userArray that stores userscores then display them using ul
//in HTML

/*target H3 and buttons : give them id in HTML so in JS use queryselector to target element.
make variable
do arrays of questions in object; set value to button for answers
textcontent of button to answer property of question

questions [0] object (text, choices, answer)
if {questions [0].answer 
once you make a variable for the element
addeventlistener to each button
when button is clicked to 
if 

make a function that will do what you want when function is clicked
e.g. alert or do comparison
make that function to execute
add eventlistener 


text of question , choices of answers
display the question (getElement.textContent)*/

