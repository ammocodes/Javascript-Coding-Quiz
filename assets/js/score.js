// Retrieve the user's score from local storage and display it on the highscores page

const highscoresOl = document.getElementById("scores");

let getScores = JSON.parse(localStorage.getItem("scores"));
if (getScores != null) {
    for (let i = 0; i < getScores.length; i++) {
        const element = getScores[i];
        let li = document.createElement("li")
        li.textContent = `${element.initials} - scored ${element.score} points`;
        scores.appendChild(li)
    } 
}

// Clear the highscores from the local storage

const clearScore = document.getElementById("clear");

clearScore.addEventListener("click", () => {
    scores.innerHTML = "";
    localStorage.clear("userScores");
});
