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
    let botChoice = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3 and it doesn't really need the +1 parameter.
    if (botChoice === 1) {
        return rock;
    } else if (botChoice === 2) {
        return paper;
    } else {
        return scissor;
    }
}

function playerPlay() {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

function gamePlay() {
    let bot = botPlay();
    let player = playerPlay(playerChoice);
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

function rounds(rounds) {
    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}:`);
        gamePlay();
    }
 
    console.log(`Final Scores => Player: ${playerScore} | Bot: ${botScore}`);

    if (playerScore > botScore) {
        result.textContent +=("Congratulations! You Win!");
    }
        else if (playerScore < botScore) {
        result.textContent +=("Game Over! You Lose!");
    }
    else {
        result.textContent +=("It's a tie!");
    }
}
window.onload = function () {
document.getElementById("rock").addEventListener("click", handleClick);
document.getElementById("paper").addEventListener("click", handleClick);
document.getElementById("scissors").addEventListener("click", handleClick);
};