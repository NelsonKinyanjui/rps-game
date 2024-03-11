let randomNumber = Math.random();


function getComputerChoice (){
if (randomNumber > 0 && randomNumber < 1 / 3){
    return 'rock';

}

else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){

     return 'paper';

}

else if (randomNumber >= 2 / 3 && randomNumber < 1){

    return 'scissors';
     
}
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection , computerSelection){
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ){
        playerScore ++;
        return `You Win ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ){
        computerScore ++;
        return `You lose ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors' ){
    
        return `That's a Tie.`;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ){
        computerScore ++;
        return `You lose ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' ){
        
        return `That's a Tie.`;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper' ){
        playerSelection ++;
        return `You Win ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' ){
        
        return `That's a Tie`;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ){
        computerScore ++;
        return `You lose ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock' ){

        playerSelection ++;
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
   
}

const playerSelection= prompt('Your choice' , '');
