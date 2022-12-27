const computerPlayer = () =>{
    const arrayRPS = ['Rock','Paper','scissors']
    const randNum = Math.floor(Math.random()*3)
    console.log(arrayRPS[randNum])

}

computerPlayer()