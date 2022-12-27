let playerScore = 0
let compScore = 0

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
        playerScore++

        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'you win ' + playerSelection +' beats ' + computerSelection
    }
    else {
        compScore++
        return 'you lose ' + computerSelection +' beats ' + playerSelection
    }
}


const game = () =>{
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice').toLowerCase()

        const computerSelection = computerChoice();
        console.log((playRound(playerSelection, computerSelection)));
     }

    if (playerScore === compScore){
        return 'tied'

    } 
    else if (playerScore > compScore){
        return 'you win'
    }
    else{
        return 'you lose'
    }
}
console.log(game())