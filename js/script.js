// contains all the logic of the game
const game = () => {
    //variables for the scoreboard and reset button
    let playerScore = 0;
    let tieScore = 0;
    let computerScore = 0;
    let moves = 0;
    const resetButton = document.getElementById('reset');

    // Reset function to reset all values in the game and start over
    function reset() {
        playerScore = 0;
        tieScore = 0;
        computerScore = 0;
        moves = 10;
        document.getElementById('playerCount').innerText = playerScore;
        document.getElementById('computerCount').innerText = computerScore;
        document.getElementById('movesLeft').innerText = `Moves left: ${moves}`;
        document.getElementById('playersChoice').innerText = "";
        document.getElementById('randomChoice').innerText = "";
    }

    resetButton.addEventListener('click', reset);

    //A play function that starts the game once the player chooses one of its options
    function play() {

        const rockButton = document.getElementById('rock');
        const paperButton = document.getElementById('paper');
        const scissorsButton = document.getElementById('scissors');
        const lizardButton = document.getElementById('lizard');
        const spockButton = document.getElementById('spock');
        const playersChoices = [rockButton, paperButton, scissorsButton, lizardButton, spockButton];

        const computerButton = document.querySelector('.random');
        const computersChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        //using a forEach loop to add an eventListener on all players choice buttons
        playersChoices.forEach(option => {
            option.addEventListener('click', function (){
                //Show the players choice
                const displayPlayersChoice = document.getElementById('playersChoice');
                displayPlayersChoice.innerText = option.innerText;
                //incrementing the amount of moves and later subtracting it from the total moves you have
                const movesLeft = document.getElementById('movesLeft')
                moves++;
                movesLeft.innerText = `Moves left ${10 - moves}`;

                //Generating a random choice for the computer
                const choice = computersChoices[Math.floor(Math.random() * computersChoices.length)];
                document.getElementById('randomChoice').innerText = choice;
                console.log(choice);
                console.log(option);
                //check who wins
                winner(this.innerText, choice)
            });
        })

        // Function to decide who will be the winner
        const winner = (player, computer) => {
            const result = document.getElementById('result');
            const playerCounter = document.getElementById('playerCount');
            const tieCounter = document.getElementById('tieCount');
            const computerCounter = document.getElementById('computerCount');
            // if they are identical, show it's a tie
            if (player === computer){
                result.innerText = `It's a tie!`;
                tieScore++;
                tieCounter.innerText = tieScore;
            }
            //else if the player chooses rock and the computer has paper or spock the player will lose and the computer gets a point, else the player gets a point
            else if (player === 'rock'){
                if (computer === 'paper' || computer === 'spock'){
                    result.innerText = `Computer wins!`;
                    computerScore++;
                    computerCounter.innerText = computerScore;
                } else {
                    result.innerText = 'Player wins!';
                    playerScore++;
                    playerCounter.innerText = playerScore;
                }
            }
            //else if the player chooses paper and the computer has scissors or lizard the player will lose and the computer gets a point, else the player gets a point
            else if (player === 'paper') {
                if (computer === 'scissors' || computer === 'lizard'){
                    result.innerText = `Computer wins!`;
                    computerScore++;
                    computerCounter.innerText = computerScore;
                } else {
                    result.innerText = `Player wins!`;
                    playerScore++;
                    playerCounter.innerText = playerScore;
                }
            }
            //else if the player chooses scissors and the computer has spock or rock the player will lose and the computer gets a point, else the player gets a point
            else if (player === 'scissors') {
                if (computer === 'spock' || computer === 'rock'){
                    result.innerText = `Computer wins!`;
                    computerScore++;
                    computerCounter.innerText = computerScore;
                } else {
                    result.innerText = `Player wins!`;
                    playerScore++;
                    playerCounter.innerText = playerScore;
                }
            }
            //else if the player chooses lizard and the computer has rock or scissors the player will lose and the computer gets a point, else the player gets a point
            else if (player === 'lizard') {
                if (computer === 'rock' || computer === 'scissors'){
                    result.innerText = `Computer wins!`;
                    computerScore++;
                    computerCounter.innerText = computerScore;
                } else {
                    result.innerText = `Player wins!`;
                    playerScore++;
                    playerCounter.innerText = playerScore;
                }
            }
            //else if the player chooses spock and the computer has lizard or paper the player will lose and the computer gets a point, else the player gets a point
            else if (player === 'spock') {
                if (computer === 'lizard' || computer === 'paper'){
                    result.innerText = `Computer wins!`;
                    computerScore++;
                    computerCounter.innerText = computerScore;
                } else {
                    result.innerText = `Player wins!`;
                    playerScore++;
                    playerCounter.innerText = playerScore;
                }
            }
        }
    }
    //call the play function in the game function so it starts the function
    play();
}
//call the game function at the end so it starts
game();