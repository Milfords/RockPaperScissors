
let submit = document.querySelector("#submit");

const submitAnswer = submit.addEventListener("click", () => {
    let playerSelection = document.querySelector("#player-selection").value;
    let computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
    updateComputerChoice(computerSelection);
    playerSelectionImg(playerSelection);
    computerSelectionImg(computerSelection);
}, false)

//This will generate the computers choice for Rock Paper Scissors and return it
const getComputerChoice = function() {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let number = Math.floor(Math.random() * choices.length);
    return choices[number];
}

//This function runs the Rock Paper Scissors game and then logs the player selection, computer selection, and the result of the game
function game(playerSelection, computerSelection) {
    console.log(`The player chose: ${playerSelection}`);
    console.log(`The computer chose: ${computerSelection}`);
    playRound(playerSelection, computerSelection);
}

//This is a function to simulate 1 round of Rock Paper Scissors using the helper methods above
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        userRock(playerSelection, computerSelection);
    } else if (playerSelection === "Paper") {
        userPaper(playerSelection, computerSelection);
    } else if (playerSelection === "Scissors") {
        userScissors(playerSelection, computerSelection);
    } else {
        return `Error. You have not submitted a valid response.`;
    }
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if the they select Rock and write a statement at the bottom of the page
const userRock = function(playerSelection, computerSelection) {
    let newh2 = document.querySelector('h2');
    if (playerSelection === computerSelection) {
        newh2.textContent = `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        newh2.textContent = `Lose! ${computerSelection} covers Rock!`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
        newh2.textContent = `You win! ${playerSelection} crushes ${computerSelection}`;
    }
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if they select Paper and write a statement at the bottom of the page
const userPaper = function(playerSelection, computerSelection) {
    let newh2 = document.querySelector('h2');
    if (playerSelection === computerSelection) {
        newh2.textContent = `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
        newh2.textContent = `You win! ${playerSelection} covers ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Scissors") {
        newh2.textContent = `Lose! ${computerSelection} cuts ${playerSelection}`
    }
}

//HELPER METHOD: This is a method to figure out if the user wins, loses, or ties if they select Scissors and write a statement at the bottom of the page
const userScissors = (playerSelection, computerSelection) => {
    let newh2 = document.querySelector('body');
    if (playerSelection === computerSelection) {
        newh2.textContent = `Tie! Both players picked ${playerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Paper") {
        newh2.textContent = `You win! ${playerSelection} cuts ${computerSelection}`;
    } else if (playerSelection !== computerSelection && computerSelection === "Rock") {
        newh2.textContent = `Lose! ${computerSelection} crushes ${playerSelection}`
    }
}

//This function updates the UI to let the user know which option the computer generated for the game
const updateComputerChoice = function(computerSelection) {
    document.querySelector("#computer-selection").textContent = `Computer Choice: ${computerSelection}`;
}

//This function changes the picture on the players side based on their selection
const playerSelectionImg = function(playerSelection) {
    if (playerSelection === "Rock") {
        document.querySelector("#player-img").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEEu0UWMAPZp7RJAQ7jz5s_qVFZTaaI81NA&usqp=CAU");
    } else if (playerSelection === "Paper") {
        document.querySelector("#player-img").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Paper_450x450.jpg/220px-Paper_450x450.jpg");
    } else {
        document.querySelector("#player-img").setAttribute("src", "https://belusaweb.s3.amazonaws.com/product-images/designlab/25-inch-large-scissors-bmegscissorsl25-white1662723566.jpg");
    }
}

//This function changes the picture on the computers side based on the random selection for the game
const computerSelectionImg = function(computerSelection) {
    if (computerSelection === "Rock") {
        document.querySelector("#computer-img").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEEu0UWMAPZp7RJAQ7jz5s_qVFZTaaI81NA&usqp=CAU");
    } else if (computerSelection === "Paper") {
        document.querySelector("#computer-img").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Paper_450x450.jpg/220px-Paper_450x450.jpg");
    } else {
        document.querySelector("#computer-img").setAttribute("src", "https://belusaweb.s3.amazonaws.com/product-images/designlab/25-inch-large-scissors-bmegscissorsl25-white1662723566.jpg");
    }
}