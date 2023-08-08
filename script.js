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
let playerSelection;
let computerSelection;

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
     computerSelection = getComputerSelection();
     playerSelection = playerPressed.getAttribute("id");
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
function logSelections(){
    const playerSelectionDisplay = document.createElement("img");
    const computerSelectionDisplay = document.createElement("img");

    playerSelectionDisplay.src=`img/${playerSelection}.png`;
    computerSelectionDisplay.src=`img/${computerSelection}.png`;

    playerDisplayContainer.appendChild(playerSelectionDisplay);
    computerDisplayContainer.appendChild(computerSelectionDisplay);

    
}

function removeLoggedSelections(){
    if(computerDisplayContainer.querySelector("img")){
        playerDisplayContainer.removeChild(playerDisplayContainer.querySelector("img"));
        computerDisplayContainer.removeChild(computerDisplayContainer.querySelector("img"));

    }
}


function logRoundWinner(winner){

    switch(winner){
        case "draw":
            gameResultDisplay.textContent="Draw!";

            break;
        case "player":
            gameResultDisplay.textContent="You win!";

            playerScore++;
            break;
        case "computer":
            gameResultDisplay.textContent="Computer wins!";

            computerScore++;

            break;
    }
}
function logScore(){
    playerScoreDisplay.textContent = `Player: ${playerScore}`
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
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

}

function playGame(){
    removeLoggedSelections();
    const roundWinner = playRound(this);
    logRoundWinner(roundWinner);
    const gameWinner = checkGameWinner();
    logScore();
    logSelections();
    if(gameWinner){
        logGameWinner(gameWinner);
        playerScore = 0;
        computerScore= 0;
        console.log(playerScore);
        logScore();
    }
}


const gameResultDisplay = document.getElementById("announce-result")
const gameResultContainer = document.getElementById("round-result");

const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score");

const playerDisplayContainer = document.getElementById("player-display-container");
const computerDisplayContainer = document.getElementById("computer-display-container")

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");


    
    paperChoice.addEventListener("click", playGame);
    rockChoice.addEventListener("click", playGame);
    scissorsChoice.addEventListener("click", playGame);
 
