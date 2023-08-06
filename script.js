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

function getComputerChoice(){
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
    
    while(true){
        let promptDisplay = "Rock, Paper or Scissors?";
        let input = prompt(promptDisplay).toLocaleLowerCase();
        switch(input){
            case "rock":
            case "scissors":
            case "paper":
                return input;
        }      
        promptDisplay = "Wrong value. Try again: " + promptDisplay;      
    }   
}
console.log(getPlayerSelection());