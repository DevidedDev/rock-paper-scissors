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
function logSelectionsImgs(){
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
            roundResultDisplay.textContent="Draw!";
            break;
        case "player":
            roundResultDisplay.textContent="You win!";
            break;
        case "computer":
            roundResultDisplay.textContent="Computer wins!";
    }
}

function changeDisplayContainersBg(winner){
    const classes = ["bg-yellow", "bg-green", "bg-red"];
    classes.forEach(function (colorClass){
        computerDisplayContainer.classList.remove(colorClass);
        playerDisplayContainer.classList.remove(colorClass);
    }); 
    
    switch (winner){
        case "player":
            computerDisplayContainer.classList.add("bg-red");
            playerDisplayContainer.classList.add("bg-green");
            break;
        case "computer":
            computerDisplayContainer.classList.add("bg-green");
            playerDisplayContainer.classList.add("bg-red");
            break;
        case "draw":
            computerDisplayContainer.classList.add("bg-yellow");
            playerDisplayContainer.classList.add("bg-yellow");
            break;
    }

}

function changeScore(winner){
    switch(winner){
        case "draw":
            break;
        case "player":
            playerScore++;
            break;
        case "computer":
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

function logGameEnd(gameWinner){
    if(gameWinner === "computer"){
        gameResultDisplay.textContent = `A few lines of code rly beat you...`

    }else{
        gameResultDisplay.textContent = `Nice, you won!`;
        
    }

}

function removeGameEndLog(){
    gameResultDisplay.textContent="";
}

function playGame(){
    removeLoggedSelections();
    removeGameEndLog();
    const roundWinner = playRound(this);
    logRoundWinner(roundWinner);
    changeScore(roundWinner);
    const gameWinner = checkGameWinner();
    logScore();
    logSelectionsImgs();
    changeDisplayContainersBg(roundWinner);
    if(gameWinner){
        logScore();
        logGameEnd(gameWinner);
        playerScore = 0;
        computerScore= 0;
        console.log(playerScore);
        
    }
}


const gameResultDisplay = document.getElementById("announce-result")

const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score");

const playerDisplayContainer = document.getElementById("player-display-container");
const computerDisplayContainer = document.getElementById("computer-display-container")

const roundResultDisplay = document.getElementById("round-result");

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");


    
    paperChoice.addEventListener("click", playGame);
    rockChoice.addEventListener("click", playGame);
    scissorsChoice.addEventListener("click", playGame);
 
