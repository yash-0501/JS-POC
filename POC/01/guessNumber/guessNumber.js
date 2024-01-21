const numberToGuess = Math.floor(Math.random()*1000)%50
console.log(numberToGuess)

let guess = -1;

const getGuess = function (){
    let num = -1;
    num = parseInt(prompt("Guess a number between 1 and 50"));
    if(num>=1 && num<=50)
        return num;
    
    console.log("Invalid Number Entered");
    getGuess();
}

do{
    guess = getGuess();
    if(guess == numberToGuess)
        console.log("Correct Guess");
    else if(guess < numberToGuess)
        console.log("Number too high");
    else
        console.log("Number too low");
}while(guess!=numberToGuess)