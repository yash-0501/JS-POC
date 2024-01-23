// A module for the number guessing game
const NumberGuessingGame = (function () {
    // Private variables
    let guessNumber;
    let low;
    let high;
    let discard;
    let start;
    let hMsg;
    let lMsg;
    let exitMsg;
    let winMsg;
    let checkTryAgain = 0;

    let playCounter = 0;
    const maxIterations = 3;

    const winFunc = function(...args){
        let check = prompt(args[0] + "\n"+args[1]+" \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
        console.log(check);
    
        
        while(check!==args[3]){
            check = prompt(args[1] + " \n\n Enter 'Y' or 'N'").toLowerCase();
            console.log(check);
        }
    
        alert(args[2])
    }


    const tryAgain = function(message){
        let check = prompt(message + "\n Do you want try your luck again xD? \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
        console.log(check);
    
        
        while(check!=='y' && check!=='n'){
            check = prompt("Enter 'Y' or 'N'").toLowerCase();
            console.log(check!='n');
            console.log(check);
        }
    
        if(check === 'y'){
            checkTryAgain = 1;
        }else{
            alert("Nikal!")
            checkTryAgain = 0;
        }
    }

    // Private function to get a valid guess from the user
    function getGuess(message) {
        let num = parseInt(prompt(message));
        if (num === discard) return num;

        while (num < low || num > high || isNaN(num)) {
            
            num = parseInt(prompt(`Invalid Entry: Enter a number between ${low} and ${high} or press ${discard} to exit!`));
            if (num === discard) return num;
        }

        return num;
    }

    // Private function to handle game setup
    function setupGame() {
        let message = start;
        let flag = false;
        let guess;
        do {
            
            guess = getGuess(message);
            if (guess === guessNumber) {
                if (!winMsg) winMsg = "Correct Guess! Thanks for playing";
                flag = true;
                break;
            } else if (guess < guessNumber) {
                message = lMsg || "Number too low, guess higher!";
            } else {
                message = hMsg || "Number too high, guess lower!";
            }

        } while (guess !== discard);

        if (flag) {
            winFunc(winMsg, "HaHa! Too Ez? Was it!", "I know, but I am!", 'n');
        }

        if (guess === discard) {
            console.log("Exit")
            tryAgain(exitMsg || "Thanks for playing!");
        }
    }

    // Private function to get a random guess number
    function getGuessNumber() {
        return Math.floor(Math.random() * (high - low)) + low;
    }

    // Private function to create prompts for the game
    function createPrompts() {
        hMsg = prompt("Enter your higher message!");
        lMsg = prompt("Enter your lower message!");
        exitMsg = prompt("Enter your exit message!");
        winMsg = prompt("Enter your win message!");

        setupGame();
    }

    // Public function to create a custom game
    function createOwnGame() {
        low = parseInt(prompt("Enter your lower range number only!"));
        while (isNaN(low)) {
            low = parseInt(prompt("Please! enter a valid lower range number!"));
        }

        high = parseInt(prompt("Enter your upper range number!"));
        while (isNaN(high) || Math.abs(high - low) < 2) {
            high = parseInt(prompt(`Please enter a valid number, not too close to low: ${low}\nHigh should be at least 2 greater than low`));
        }

        if (high < low) {
            [high, low] = [low, high];
        }

        guessNumber = getGuessNumber();
        discard = parseInt(prompt(`Enter your exit number: Lower than ${low} and Higher than ${high}`));
        while (discard >= low && discard <= high || isNaN(discard)) {
            discard = parseInt(prompt(`Please enter your exit number: Lower than ${low} and Higher than ${high}`));
        }

        start = `Guess a number between ${low} and ${high} or press: ${discard} to exit!`;

        let check = prompt("Do you want to create your own message prompts for high, low, exits, and victory?\n\nPress 'Y' for Yes or 'N' for No.").toLowerCase();

        while (check !== 'y' && check !== 'n') {
            check = prompt("Enter 'Y' or 'N'").toLowerCase();
        }

        if (check === 'y') {
            createPrompts();
        } else {
            setupGame();
        }
    }

    // Public function to create the main game
    function createGame() {
        low = 1;
        high = 100;
        discard = 0;
        guessNumber = getGuessNumber();
        start = `Guess a number between ${low} and ${high} or press: ${discard} to exit!`;
        setupGame();
    }

    alert("Create a guess game!");

    const game = function gamefunc(){

        if(playCounter >= maxIterations){
            alert("Max Iterations reached, resetting the game!");
            return;
        }

        playCounter++;
        


        let check = prompt("Do you want to create your own game or play default?\n\nPress 'Y' for Yes or 'N' for No.").toLowerCase();

        while (check !== 'y' && check !== 'n') {
            check = prompt("Enter either 'Y' or 'N' only").toLowerCase();
        }

        if (check === 'y') {
            createOwnGame();
        } else {
            createGame();
        }

        // setTimeout(function faltu(){
        // }, 0);
        if(!checkTryAgain) return;
        game();
    
        

    }

    // Return only the public methods
    return {
        game: game,
        createGame: createGame,
        createOwnGame: createOwnGame,
    };

})();

// Example usage



NumberGuessingGame.game();