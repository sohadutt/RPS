let tie = "It's a tie!";
let win = "You win!";
let loss = "You lose!";
let botScore = 0;
let playerScore = 0;
let rock = "Rock"
let paper = "Paper"
let scissor = "Scissors"

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
    let playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice !== rock && playerChoice !== paper && playerChoice !== scissor) {
        error.log("Please try again.");
        return playerPlay();
    }
    return playerChoice;
}

function gamePlay() {
    let bot = botPlay();
    let player = playerPlay();
    let result = gameLogic(bot, player);
    console.log(`Bot chose: ${bot}`);
    console.log(`You chose: ${player}`);
    console.log(result);

    if (result === win) {
        playerScore++;
    } else if (result === loss) {
        botScore++;
    }
    console.log(`Scores => Player: ${playerScore} | Bot: ${botScore}`);
}

function rounds(rounds) {
    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}:`);
        gamePlay();
    }
 
    console.log(`Final Scores => Player: ${playerScore} | Bot: ${botScore}`);

    if (playerScore > botScore) {
        console.log("Congratulations! You Win!");
    }
        else if (playerScore < botScore) {
        console.log("Game Over! You Lose!");
    }
    else {
        console.log("It's a tie!");
    }
}

rounds(5); // You can change the number of rounds here