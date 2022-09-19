// using constant type for the choices variable, have the required strings in it
const choices =['rock', 'paper', 'scissors']

// function for the computer to randomly return either Rock, Paper, or Scissors
function getComputerChoice(choices) {
    return choices [Math.floor(Math.random()*choices.length)]
}
console.log(getComputerChoice(choices))

// function for playing a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){

}

// the parameters for my playRound function
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(choices);

function getPlayerChoice() {
    const input = prompt("Pick between Rock, Paper or Scissor");
    input = input.toLowerCase();
}