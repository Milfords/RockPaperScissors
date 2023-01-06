

const getComputerChoice = () => {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let number = Math.floor(Math.random() * choices.length);
    return choices[number];
}

const userRock = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        return `Lose! ${computerSelection} beats Rock!`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
        return `You win! ${computerSelection} loses to ${playerSelection}`;
    }
}

const userPaper = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
       return `You win! ${playerSelection} covers ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
       return `Lose! ${computerSelection} beats ${playerSelection}`
    }
}

const userScissors = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        return `You win! ${playerSelection} cuts ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
       return `Lose! ${computerSelection} crushes ${playerSelection}`
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        return userRock(playerSelection, computerSelection);
    } else if (playerSelection === "Paper") {
        return userPaper(playerSelection, computerSelection);
    } else {
        return userScissors(playerSelection, computerSelection);
    }
    // if (playerSelection === computerSelection) {
    //     return `Tie! both players selected ${computerSelection}`
    // } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
    //     return `Lose! ${computerSelection} beats Rock!`
    // } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
    //     return `You win! ${computerSelection} loses to ${playerSelection}`;
    // }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = window.prompt();
        const computerSelection = getComputerChoice();
        console.log(`The player chose: ${playerSelection}`);
        console.log(`The computer chose: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

// console.log(`The player chose: ${playerSelection}`);
// console.log(`The computer chose: ${computerSelection}`);
// console.log(playRound());
game();
