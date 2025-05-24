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

function botPlay(bot) {
    let botChoice = Math.floor(Math.random() * 3) + 1;
    if (botChoice === 1) {
        return rock;
    } else if (botChoice === 2) {
        return paper;
    } else {
        return scissor;
    }
}

function playerPlay(player) {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    
    if (playerChoice !== rock && playerChoice !== paper && playerChoice !== scissor) {
        error.log("Please try again.");
        return playerPlay(player);
    }
    
    return playerChoice;
}

function playGame() {
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

function rounds() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        playGame();
    }
      console.log(`Player: ${playerScore}`);
      console.log(`Bot: ${botScore}`);
}

rounds()