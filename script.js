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
    while(true){
        let input = prompt(promptDisplay);
        if (input === null){ //if user presses cancel
            alert("choose a value!");
        } else{
            input = input.toLowerCase();
            switch(input){
                case "rock":
                case "scissors":
                case "paper":
                    return input;
            } 
            promptDisplay = "Wrong value. Try again: Rock, Paper or Scissors?";      
        }
    }   
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

console.log(playRound(getPlayerSelection(), getComputerSelection()));