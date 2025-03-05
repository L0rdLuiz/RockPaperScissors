var min = 1;
var max = 3;
var pointsHuman = 0;
var pointsComputer = 0;

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = parseInt(window.prompt("Choose: 1- Rock, 2- Paper, 3- Scissor"), 10);
        if ([1, 2, 3].includes(choice)) break;
        alert("Invalid choice! Please enter 1, 2, or 3.");
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${choiceToString(humanChoice)} | Computer: ${choiceToString(computerChoice)}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return [0, 0];
    }
    if (
        (humanChoice === 1 && computerChoice === 3) || // Rock beats Scissors
        (humanChoice === 2 && computerChoice === 1) || // Paper beats Rock
        (humanChoice === 3 && computerChoice === 2)    // Scissors beats Paper
    ) {
        console.log("You win this round!");
        return [1, 0];
    } else {
        console.log("Computer wins this round!");
        return [0, 1];
    }
}

function choiceToString(choice) {
    return choice === 1 ? "Rock" : choice === 2 ? "Paper" : "Scissors";
}

function playGame() {
    pointsHuman = 0;
    pointsComputer = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(min, max);
        let [humanPoints, computerPoints] = playRound(humanChoice, computerChoice);

        pointsHuman += humanPoints;
        pointsComputer += computerPoints;

        console.log(`Score: Human ${pointsHuman} - ${pointsComputer} Computer`);
    }

    console.log("\nFinal Result:");
    if (pointsHuman > pointsComputer) {
        console.log("🎉 You win the game! 🎉");
    } else if (pointsHuman < pointsComputer) {
        console.log("💻 Computer wins the game! 💻");
    } else {
        console.log("🤝 It's a tie! 🤝");
    }
}

playGame();
