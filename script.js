
//This will generate the computers choice for Rock Paper Scissors and return it
const getComputerChoice = () => {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let number = Math.floor(Math.random() * choices.length);
    return choices[number];
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if the they select Rock
const userRock = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        return `Lose! ${computerSelection} covers Rock!`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
        return `You win! ${playerSelection} crushes ${computerSelection}`;
    }
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if they select Paper
const userPaper = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
       return `You win! ${playerSelection} covers ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
       return `Lose! ${computerSelection} cuts ${playerSelection}`
    }
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if they select Scissors
const userScissors = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        return `You win! ${playerSelection} cuts ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
       return `Lose! ${computerSelection} crushes ${playerSelection}`
    }
}

//This is a function to simulate 1 round of Rock Paper Scissors using the helper methods above
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        return userRock(playerSelection, computerSelection);
    } else if (playerSelection === "Paper") {
        return userPaper(playerSelection, computerSelection);
    } else if (playerSelection === "Scissors") {
        return userScissors(playerSelection, computerSelection);
    } else {
        return `Error. You have not submitted a valid response.`;
    }
}

//This function runs the Rock Paper Scissors game 5 times and then logs the player selection, computer selection, and the result of each game
function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = window.prompt();
        const computerSelection = getComputerChoice();
        console.log(`The player chose: ${playerSelection}`);
        console.log(`The computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
