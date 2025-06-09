let tie = "It's a tie!";
let win = "You win!";
let loss = "You lose!";
let botScore = 0;
let playerScore = 0;
let rock = "Rock";
let paper = "Paper";
let scissor = "Scissors";


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
    let bot = botPlay();
    let player = playerChoice;
    let result = gameLogic(bot, player);
    console.log(`Bot chose: ${bot}`);
    console.log(`You chose: ${player}`);
    console.log(result);

    if (result === win) {
        playerScore++;
    } else if (result === loss) {
        botScore++;
    }
    result.textContent += (`Scores => Player: ${playerScore} | Bot: ${botScore}`);
}

// Ui 
const result = document.querySelector(".display");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => handleClick(rock));
paperBtn.addEventListener("click", () => handleClick(paper));
scissorBtn.addEventListener("click", () => handleClick(scissor));

function handleClick(playerChoice) {
    gamePlay(playerChoice);
}