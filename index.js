const getComputerChoice = () =>{
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

const playRound = (playerSelection, computerSelection) =>{
    let good_eng_playerSelection = playerSelection.toUpperCase().slice(0,1).concat(playerSelection.slice(1).toLowerCase());
    return  good_eng_playerSelection === computerSelection ? "Draw!" :
            (good_eng_playerSelection === "Rock" && computerSelection === "Scissors") || 
            (good_eng_playerSelection === "Paper" && computerSelection === "Rock") ||
            (good_eng_playerSelection === "Scissors" && computerSelection === "Paper") ?  `You win! ${good_eng_playerSelection} beats ${computerSelection}` :
            `You lose! ${computerSelection} beats ${good_eng_playerSelection}`
    
}

const game = () =>{
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("select between : Rock, Paper and Scissors");
        let round_result = playRound(playerSelection, getComputerChoice());
        console.log(round_result)
            if (round_result.includes("win!")){
                playerScore++
            }
            if (round_result.includes("lose!")){
                computerScore++
            }
    }
    return  playerScore > computerScore ? "You win the game!" :
            playerScore < computerScore ? "I (the computer) win!" : "The game was a draw!"
}