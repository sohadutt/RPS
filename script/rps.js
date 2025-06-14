let tie = "It's a tie!";
let win = "You win!";
let loss = "You lose!";
let botScore = 0;
let playerScore = 0;
let rock = "Rock";
let paper = "Paper";
let scissor = "Scissors";
const emojiMap = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};

function gameLogic(bot, player) {
    if (bot === player) {
        return tie;
    }
    if ((bot === rock && player === scissor) || 
        (bot === paper && player === rock) || 
        (bot === scissor && player === paper)) {
        return loss;
    } else {
       return win
    }
}

function botPlay() {
    let botChoice = Math.floor(Math.random() * 3) + 1;
    if (botChoice === 1) {
        return rock;
    } else if (botChoice === 2) {
        return paper;
    } else {
        return scissor;
    }
}

function gamePlay(playerChoice) {
    const resultDiv = document.querySelector('.result');
    const scoreDiv = document.querySelector('.score');
    const botChoiceDiv = document.querySelector('.bot-choice');
    const playerChoiceDiv = document.querySelector('.player-choice');
    const resulthead = document.querySelector('.result-head');
    let bot = botPlay();
    let player = playerChoice;
    let result = gameLogic(bot, player);
    console.log(`Bot chose: ${bot}`);
    console.log(`You chose: ${player}`);
    console.log(result);

    if (result === win) {
        playerScore++;
        resulthead.innerHTML = "You Win!";
    } else if (result === loss) {
        botScore++;
        resulthead.innerHTML = "You Lose!";
    }
    scoreDiv.innerHTML = `Player Score: ${playerScore} - Bot Score: ${botScore}`;
    botChoiceDiv.innerHTML = `${emojiMap[bot.toLowerCase()]}`;
    playerChoiceDiv.innerHTML = `${emojiMap[player.toLowerCase()]}`;
    resultDiv.innerHTML = result;

    
    if (playerScore === 5 || botScore === 5) {
        if (playerScore > botScore) {
            resultDiv.innerHTML = "Congratulations! You are the champion!";
        } else {
            resultDiv.innerHTML = "Sorry, the bot is the champion!";
        }
        return endmodal();
    }
}

// Ui 
document.addEventListener("DOMContentLoaded", () => {

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");



rockBtn.addEventListener("click", () => handleClick(rock));
paperBtn.addEventListener("click", () => handleClick(paper));
scissorBtn.addEventListener("click", () => handleClick(scissor));
});

function handleClick(playerChoice) {
    gamePlay(playerChoice);
}

function endmodal() {
    const modal = document.getElementById("endModal");
    modal.style.display = "flex";
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function() {
        modal.style.display = "none";
        resetGame();
    };
}
function resetGame() {
    playerScore = 0;
    botScore = 0;
    const scoreDiv = document.querySelector('.score');
    const resultDiv = document.querySelector('.result');
    const botChoiceDiv = document.querySelector('.bot-choice');
    const playerChoiceDiv = document.querySelector('.player-choice');
    
    scoreDiv.innerHTML = `Player Score: ${playerScore} - Bot Score: ${botScore}`;
    resultDiv.innerHTML = "";
    botChoiceDiv.innerHTML = "";
    playerChoiceDiv.innerHTML = "";
}


