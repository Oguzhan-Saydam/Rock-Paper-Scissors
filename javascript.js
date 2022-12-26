let treshhold1 = 34;
let treshhold2 = 67;
let randomNumber = Math.random() * 100;

function getComputerChoice() {
    if (randomNumber < treshhold1) {
        return "rock";
    }
    else if (randomNumber < treshhold2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//console.log(getComputerChoice());

let playerSelection = prompt("Select your weapon!");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You won! Rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won! Paper bears rock"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won! Scissors beats paper"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost! Paper beats rock"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost! Rock beats scissors"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lost! Scissors beats paper"
    } else if (playerSelection == computerSelection) {
        return "Draw!"
    } else {
        return "Please enter a valid value!"
    }}

//"rock" && computerSelection == "rock") {
//    return "Draw!"
//} else if (playerSelection == "paper" && computerSelection == "paper") {
//    return "Draw!"
//} else if (playerSelection == "scissors" && computerSelection == "scissors") {

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }}

console.log(game())    

//console.log(playRound(playerSelection, computerSelection));