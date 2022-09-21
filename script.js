// using constant type for the choices variable, have the required strings in it
const choices =['rock', 'paper', 'scissors'];

// function for the computer to randomly return either Rock, Paper, or Scissors
function getComputerChoice() {
    const decision = choices[Math.floor(Math.random()*choices.length)];
    return decision
}

// function to get the players choice
function getPlayerChoice(){
    let input = false;
    while (input === false) {
        const playerChoice = prompt("Rock, Paper or Scissors");
        if(playerChoice == null){
            continue;
        }
        const playerChoiceInLower = playerChoice.toLowerCase();
        if (playerChoice.includes(playerChoiceInLower)){
            input = true;
            return playerChoiceInLower;
        }
    }
}

// function for checking the winner
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}
// function for playing a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return `Its a tie! You both chose ${playerSelection}!`
    }
    else if (result  == "Player") {
        return `Goodjob! ${playerSelection} beats ${computerSelection}. You won`
    }
    else {
        return `Oh no! ${computerSelection} beats ${playerSelection}. You lost`
    }
}  

// the parameters for my playRound function


// function to play a 5 round game that keeps score and reports a winner or loser at the end
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()