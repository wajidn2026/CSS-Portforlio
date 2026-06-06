const playersScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const playerHandImg = playerHand.querySelector("img");
const computerHandImg = computerHand.querySelector("img");
const resultText = document.querySelector(".result p");
const gameContainer = document.querySelector(".game-container");
const optionsButton = document.querySelectorAll(".options .choice-btn");
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
optionsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    })
})

function toggleButtons(toggle) {
    optionsButton.forEach(button => {
        button.disabled = toggle;
    })
}

function playRound(choice) {
    toggleButtons(true);
    resultText.textContent = "Rock, Paper, Scissors...";
    playerHandImg.src = "images/icon.png";
    computerHandImg.src = "images/icon.png";
    playerHand.classList.add('shake-hand');
    computerHand.classList.add('shake-hand');
    setTimeout(() => {
        playerHand.classList.remove('shake-hand');
        computerHand.classList.remove('shake-hand');
        const computerChoice = choices[Math.floor(Math.random() = choices.length)];
        playerHandling.src = 'images/$(choice).png';
        computerHandImg = 'images/$(ComputerChoice).png';
        const winner = determineWinner(choice, computerChoice);
        updateScoreboard(winner);
        toggleButtons(false);
    }, 1000)
}

function determineWinner(player, computer) {

}

function updateScoreboard(winner) {
    gameContainer.classList.remove('player-wins-transform');
    if (winner === 'player') {
        resultText.textContent = "YOU WIN!";
        playerScore++;
        playerScoreElement.textContent = playerScore;
        playerScoreElement.classList.add('score-updated');
        gameContainer.classList.add('player-wins transform');
    }

    else if (winner === 'computer') {
       resultText.textContent = "You Lose :(";
        computerScore++;
        computerScoreElement.textContent = computerScore;
        computerScoreElement.add('score-updated');
    }

    else
        resultText.textcontent = "It's a tie!";

    setTimeout(() => {
        playerScoreElement.classList.remove('score-updated');
        computerScoreElement.classList.remove('score-updated');
    }, 500);

    setTimeout(() => {
        gameContainer.classList.remove('player-wins-transform');
    }, 600);
}