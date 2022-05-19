let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');
const resetButton = document.getElementById('reset');


const playersChoices = [rockButton, paperButton, scissorsButton, lizardButton, spockButton];
const computersChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Random function that chooses a rock, paper, scissors, lizard, spock value once you push the computers choice button
const computerButton = document.getElementById('random');
computerButton.addEventListener('click', random);
function random() {
    const choice = document.getElementById('randomChoice');
    choice.innerText = computersChoices[Math.floor(Math.random() * computersChoices.length)];
}



