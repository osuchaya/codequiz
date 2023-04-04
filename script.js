//global variables
var score = 0;
var timer;
var currentQuestion = 0;
var timeLeft = 60;
var userArray = [];

let questions = [
    {
        question: "In JavaScript, which keyword refers to an object?",
        answers: ["That", "This", "Those"],
        correctAnswer: 2,
    },

    {
        question: "How many equal signs denotes strictly equal in JavaScript?",
        answers: ["3", "2", "1"],
        correctAnswer: 1,
    },
    {
        question: "If you want to make a single line comment, how many / do you put in front of a code line?",
        answers: ["None", "One", "Two"],
        correctAnswer: 3,
    },

    {
        question: "Which of these is used with Math.random() function to generate random integers?",
        answers: ["Math.wall", "Math.floor", "Math.sink"],
        correctAnswer: 2,
    },
    {
        question: "JavaScript is inserted between which tag in HTML?",
        answers: ["price", "bag", "script"],
        correctAnswer: 3,
    },
]


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
    for (var i = 1; i <= 3; i++) {   //because radio id starts from 1
        var answerBtn = document.getElementById("label" + i); //for subsequent labels(2,3)
        answerBtn.textContent = questions[currentQuestion].answers[i - 1]; //since i variable starts from 1
        //but array index starts from 0 and the answers start from 0 as answers = array
    }
}

function checkAnswers() {
    var radios = document.getElementsByName("answer");
    var scorecount = document.querySelector(".scorecount");
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
        scorecount.innerHTML = score
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
        checkAnswers();
        if (questions.length > currentQuestion + 1) {

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
        submitBtn.addEventListener("click", function () {
            console.log(userInput.value)
            console.log(score)
            var userInfo = {
                name: userInput.value,
                score
            }
            console.log(userInfo);
            userArray.push(userInfo);
            localStorage.setItem("scores", JSON.stringify(userArray))

            var scorelead = document.getElementById("scorelead");
            for (var i = 0; i < userArray.length; i++) {
                var element = document.createElement("li")
                element.innerText = userArray[i].name+" "+userArray[i].score
                scorelead.appendChild(element)
                console.log("created element")
                scorelead.style.display = "block"
        
            }
        })
    }
    function getinfo() {
        var localStorageArray = JSON.parse(localStorage.getItem("scores"))
        console.log(localStorageArray)
        if (localStorageArray !== null) {
            userArray = localStorageArray
        }
    }
  

    getinfo()
}








//for loop around userArray that stores userscores then display them using ul
//in HTML

//


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

