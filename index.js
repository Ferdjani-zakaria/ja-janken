const btnChoice = document.querySelectorAll('.btnChoice');
const resultDisplay = document.querySelector('#round_result');
const playerPoint = document.querySelector('#player_score');
const computerpoint = document.querySelector('#computer_score');

const resultContainer = document.querySelector('#game_result')

let playerScore, computerScore;

const startGame = () => {
    playerScore = 0;
    computerScore = 0;
    resultContainer.textContent = "";
}

window.onload = startGame;


const getComputerChoice = () =>{
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

const playRound = (playerSelection) =>{

    let computerSelection = getComputerChoice()
    
    if (playerSelection === computerSelection) {
                resultDisplay.textContent = 'Draw!'
                playerPoint.textContent = `Humain player score : ${playerScore}`;
                computerpoint.textContent = `My score : ${computerScore}`;
    }
    // checking if the player won
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper"))     {
        
                resultDisplay.textContent =`You win the round! ${playerSelection} beats ${computerSelection}`;
                playerScore++;
                playerPoint.textContent = `Humain player score : ${playerScore}`;
                computerpoint.textContent = `My score : ${computerScore}`;
    }
    else  {
                resultDisplay.textContent =`You lose the round! ${computerSelection} beats ${playerSelection}`;
                computerScore++;
                playerPoint.textContent = `Humain player score : ${playerScore}`;
                computerpoint.textContent = `My score : ${computerScore}`;;

    }

    if (playerScore === 5) {
        resultContainer.textContent = "You win the game!";
    }

    if (computerScore === 5) {
        resultContainer.textContent = "I (the computer) win!";
    }

}


btnChoice.forEach((btn)=>{
    btn.addEventListener('click', function (e) {

        if(playerScore === 5 || computerScore === 5){
            startGame();
            playRound(e.target.id) 
        }

       else{
        playRound(e.target.id) 
       }

    }
)
})
