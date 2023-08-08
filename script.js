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
function getPlayerSelection(){
    let promptDisplay = "Rock, Paper or Scissors?";
    
       
}


function playRound(playerSelection, computerSelection){
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

function logGameWinner(winner){

    if (winner === "player"){
        console.log("Nice job, you won the game!")
    }else{
        console.log("You lost...A 10 line algorithm rly beat you... O_o")
    }

}

function logRoundWinner(winner){
    switch(winner){
        case "draw":
            console.log("Round ended with a draw!")
            break;
        case "player":
            console.log("You won this round! Nice job!")
            break;
        case "computer":
            console.log("The computer won this round")
            break;
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let isPlaying = true;
    while(isPlaying){
        
        //const result = playRound(getPlayerSelection(), getComputerSelection());
        
        switch(result){
            case "player":
                playerScore++;
                logRoundWinner(result);
                break;
            case "draw":
                logRoundWinner(result);
                break;
            case "computer":
                computerScore++;
                logRoundWinner(result);
                break;    
        }
        console.log(`Current score: --Player: ${playerScore} -- Computer: ${computerScore} --`);

        if(computerScore === 5){
            logGameWinner("computer");
            isPlaying = false;
        }else if(playerScore === 5){
            logGameWinner("player")
            isPlaying = false;
        }
    }
}

game();
