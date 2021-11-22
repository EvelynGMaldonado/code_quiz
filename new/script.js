var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz");
var infoEl = document.getElementById("info");

var startButton = document.getElementById("start-quiz");
var timeNotRunning = true;
var questionTittle = document.getElementById("question");

var answer1 = document.getElementById("answers-1");
var answer2 = document.getElementById("answers-2");
var answer3 = document.getElementById("answers-3");
var answer4 = document.getElementById("answers-4");

var answersEl = document.getElementById("answers");

var initialEl = document.getElementById("initial");

var timeEl = document.getElementById("time");
var timeLeftEl = document.getElementById("time-left");

var rightOrWrongEl = document.getElementById("right-or-wrong");

var interval;
var totalTime = 480000;
var currentQuestion = 0;

//TODO: create an array of objects that has three properties `questions:string`, `answers:array`, `rightAnwers:number` 

var questions = [
	{
		question: "How does a FOR loop start?",
		answers: ["for(i=0;i<=5)", "for(i<=5;i++)", "for i=1 to 5", "for(i=0;i<=5;i++)"],
		rightAnswer: "for(i=0;i<=5;i++)"
	},
	{
		question: "How do you start writing a while loop in Java?",
		answers: ["while x > y {", "x > y while {", "while x > y:", "while (x > y)"],
		rightAnswer: "while (x > y)"
	},
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["msg('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')", "alert('Hello World')"],
        rightAnswer: "alert('Hello World')"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<js>", "<javascript>", "<scripting>"],
        rightAnswer: "<script>"
    }
];

function startQuiz(event){
    event.preventDefault();
    clearInterval(interval);
    totalTime--;
    interval = setInterval(function(){
        if(totalTime <= 0){
            totalTime = 480000;
            clearInterval(interval);
            infoEl.style.display = "block";
			quizEl.style.display = "none";
        }
        timeLeftEl.textContent = totalTime;
    },60000)

    introEl.style.display = "inline";   /* it was none before*/ */
    quizEl.style.display = "block"

    displayQuestions();
}

function displayQuestions(){
    questionTittle.textContent = questions[currentQuestion].question

    answer1.textContent = questions[currentQuestion].answers[0];

    answer2.textContent = questions[currentQuestion].answers[1];

    answer3.textContent = questions[currentQuestion].answers[2];

    answer4.textContent = questions[currentQuestion].answers[3];
}

function checkAnswer(event){
    event.preventDefault();
    var textAnswer = event.target.innerText;
    if (textAnswer === questions[currentQuestion].rightAnswer){
        rightOrWrongEl.textContent = "Right"
    }else{
        rightOrWrongEl.textContent = "Wrong";
    }
    rightOrWrongEl.style.display = "block"
    currentQuestion++

    if(currentQuestion === questions.length){
        totalTime = 480000;
		clearInterval(interval);
		infoEl.style.display = "block";
		quizEl.style.display = "none";
        return
    }

    displayQuestions();
}

startButton.addEventListener("click",function(event){
    if(timeNotRunning){
        event.preventDefault();
        let gameLength = 10;
        startTimer(gameLength);
    }
});


function startTimer(secondsLeft) {
    timeNotRunning = false;
    var timer = setInterval(function(){
        secondsLeft--;
        //update the part of the page that has the timer
        counter.textContent = secondsLeft + "s left in game.";
        if(secondsLeft <= 0){
            clearInterval(timer);
            timeNotRunning = true;
            counter.textContent = "You Lost!";
            //update score (you lost)
        }
    },1000);
}


var score = {
    wins: 0,
    losses: 0
}
if(localStorage.getItem(score)!==null){
    score = JSON.parse(localStorage.getItem("score"));
} else {
    localStorage.setItem("score",JSON.stringify(score));
}


startQuizBtn.addEventListener("click", startQuiz);
answersEl.addEventListener("click", checkAnswer);
