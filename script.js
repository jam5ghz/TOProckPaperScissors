const computerChoice = () =>{
    const arrayRPS = ['rock','paper','scissors']
    const randNum = Math.floor(Math.random()*3)
    const compChoice = arrayRPS[randNum]
    return compChoice

}


const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection === computerSelection){
        return 'you tied ' + computerSelection + ' '+ playerSelection
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else {
        return 'you lose' + computerSelection +' beats ' + playerSelection
    }
}

const playerSelection = "rock";
const computerSelection = computerChoice();
console.log(playRound(playerSelection, computerSelection));