//make game
//make a function that plays a round
    //create player points counter and bot points counter
    // make function for player Selection
        //get input from player
            //make input non case sensitive
            //check if input is valid
            //repeat if not valid
        // reuturn player Selection
    // make function for  bot selection and store It
    //function:compare player selection and bot selection
        //return winner
    //log who won
    //add points to winner

//function game: repe  ats 5 rounds
let playerScore = 0;
let computerScore = 0;  

function getComputerSelection(){
    const randNum = Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1: 
            return "rock";
        case 2:
            return  "paper";
        case 3:
            return "scissors";
    }
}



function playRound(playerPressed){
    const computerSelection = getComputerSelection();
    const playerSelection = playerPressed.getAttribute("id");
    console.log("Player: "+ playerSelection);
    console.log("Computer:" + computerSelection);
    if(playerSelection === computerSelection){
        return "draw";

    }else if(//player wins
    (playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")
    ){ 
        return "player";     
    }else return "computer";
    
}



function logRoundWinner(winner){
    
    switch(winner){
        case "draw":
            break;
        case "player":
            playerScore++;
            playerScoreDisplay.textContent = `Player: ${playerScore}`
            break;
        case "computer":
            computerScore++;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`
            break;
    }
}


function checkGameWinner(){
    if(playerScore===5){
        return "player";

    }else if(computerScore===5){
        return "computer";
    }
}

function logGameWinner(gameWinner){
    if(gameWinner === "computer"){
        gameResultDisplay.textContent = `A few lines of code rly beat you...`

    }else{
        gameResultDisplay.textContent = `Nice, you won!`;
        
    }
    gameResultContainer.appendChild(gameResultDisplay);

}

function playGame(){
    const roundWinner = playRound(this);
    logRoundWinner(roundWinner);
    const gameWinner = checkGameWinner();
    if(gameWinner) logGameWinner(gameWinner);
}
const gameResultDisplay = document.getElementById("announce-winner")

const gameResultContainer = document.getElementById("round-result");

const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score");

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");


    
    paperChoice.addEventListener("click", playGame);
    rockChoice.addEventListener("click", playGame);
    scissorsChoice.addEventListener("click", playGame);
 
