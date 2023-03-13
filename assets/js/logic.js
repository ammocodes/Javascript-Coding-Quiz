// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Globally declared variables

const startScreen = document.getElementById("start-screen");
const start = document.getElementById("start");
const questionsBox = document.getElementById("questions");
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const endScreen = document.getElementById("end-screen");
const finalScoreSpan = document.getElementById("final-score")
const initials = document.getElementById("initials");
const feedback = document.getElementById("feedback");
const submit = document.getElementById("submit");
const scores = document.getElementById("scores");
const correct = new Audio("assets/sfx/correct.wav");
const incorrect = new Audio("assets/sfx/incorrect.wav");

let timer = document.getElementById("time");
let countdown = 60;

// Functions

// Start Game

function startGame() {
    start.addEventListener("click", () => {
        timer.textContent = countdown;
        countdownTimer();
        displayQuestion();
    })
}

function countdownTimer() {
    let timeInterval = setInterval(() => {
        countdown--;
        timer.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timeInterval);
            questionsBox.classList.add("hide");
            endScreen.classList.remove("hide");
            scores.textContent = `${totalScore}`;
            timer.textContent = 0;
        }
    }, 1000);
}

function updateTimer() {
    countdown -= 10;
}

function storeScores() {
    let initialsToStore = initials.value.toUpperCase().trim()
    let scoreToStore = scores;
    let userScores = JSON.parse(window.localStorage.getItem('scores')) || [];
    let newScore = {
        initials: initialsToStore,
        score: scoreToStore
    }
    userScores.push(newScore);
    localStorage.setItem('scores', JSON.stringify(userScores));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    storeScores();
    window.location.replace("highscores.html");
})

