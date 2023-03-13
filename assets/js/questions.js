// Questions for the quiz
// Source: Google

// Javascript Questions

const questions = [
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function myFunction()"],
        correct: 0
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "call function myFunction()", "myFunction()", "myFunction"],
        correct: 2
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        correct: 2
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
        correct: 0
    },

    {
        question: "How does a WHILE loop start?",
        choices: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10; i++)"],
        correct: 0
    },
    {
        question: "How does a FOR loop start?",
        choices: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)"],
        correct: 3
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "/*This is a comment*/"],
        correct: 1
    },

]

// Total score tracker
let totalScore = 0

// Random question generator

function displayQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length)
    for (let i = 0; i < questions.length; i++) {
        const element = questions[randomQuestion];
        questionsBox.textContent = element.question;
        choices.textContent = ""
        startScreen.classList.add("hide")
        questionsDiv.classList.remove("hide")
        element.choices.forEach((el) => {
            let choicesBtn = document.createElement("button")
            choices.appendChild(choicesBtn)
            choicesBtn.addEventListener("click", () => {
                setTimeout(() => {
                    displayQuestion()
                }, 1000)
                if (choicesBtn.innerText.includes(`${element.correct}`) === true) {
                    rightAnswer()
                }else {
                    wrongAnswer()
                }
            })
            choicesBtn.textContent = `${el}` 
        })
    }
    if (countdown <= 0) {
        questionsDiv.classList.add("hide")
    }
}

// Correct answer function

function correctAnswer() {
    correct.play();
    feedback.classList.remove("hide");
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000);
    feedback.textContent = "Correct";
    totalScore++;
}

// Wrong answer function

function wrongAnswer() {
    incorrect.play();
    feedback.classList.remove("hide");
    setTimeout(() => {
        feedback.classList.add("hide")
    }, 1000);
    feedback.textContent = "Wrong";
    updateTimer();
}

