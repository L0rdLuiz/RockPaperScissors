var min = 1;
var max = 4;
var computerChoice = 0;
var humanChoice = 0;

function getComputerChoice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice(humanChoice) {
    humanChoice = window.prompt("Do you want Rock, Paper or Scissor? 1- Rock, 2- Paper, 3-Scissor");
    return humanChoice;
}

console.log(getHumanChoice(humanChoice));