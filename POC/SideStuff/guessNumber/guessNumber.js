
const tryAgain = function(message){
    let check = prompt(message + "\n Do you want try your luck again xD? \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
    console.log(check);

    
    while(check!=='y' && check!=='n'){
        check = prompt("Enter 'Y' or 'N'").toLowerCase();
        console.log(check!='n');
        console.log(check);
    }

    if(check === 'y'){
        createGame();
    }else{
        alert("Nikal!")
    }
}

const getGuess = function (message = "Enter a number", lower, upper, discard = 0){
    let num = parseInt(prompt(message));
    if(num == discard) return num;
    while(num<lower || num>upper || isNaN(num)){
        num = parseInt(prompt("Invalid Entry: Enter a number between " + lower + " and " + upper +" or press: " +discard+ " to exit!"));
        console.log(num)
        if(num == discard)
            break
    }
    
    return num
}

const winFunc = function(...args){
    let check = prompt(args[0] + "\n"+args[1]+" \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
    console.log(check);

    
    while(check!==args[3]){
        check = prompt("ARE YOU HANDSOME? \n\n Enter 'Y' or 'N'").toLowerCase();
        console.log(check);
    }

    alert(args[2])
}

const setupGame = function(guessNumber,low=1,high=100,dis=0,start,hMsg,lMsg,exitMsg,winMsg){

    let message = start;
    let flag = false;

    do{
        guess = getGuess(message, low, high, dis);
        if(guess == guessNumber){
            if(winMsg == undefined)
                winMsg = "Correct Guess! Thanks for playing"
            flag = true;
            break;
        }else if(guess < guessNumber){
            message = lMsg ||  "Number too low, guess higher!";
        }
        else{
            message = hMsg ||  "Number too high, guess lower!";
        }
    }while(guess!=dis)

    if(flag){
       let prompt1 = "HaHa! Too Ez? Was it! \n So, ARE YOU HANDSOME?";
       let prompt2 = "I know, but I am!"
       let checker = 'n';
        winFunc(winMsg, prompt1, prompt2,checker);
    }

    if(guess == dis){
        let msg = exitMsg ||  "Thanks for playing!";
        tryAgain(msg);
    }
}

const getGuessNumber = function(low=1, high=100){
    console.log("Low, High: ",low,high);
    const guessNumber = Math.floor(Math.random() * (high - low) ) + low;
    console.log(guessNumber)
    return guessNumber;

}

// getGuessNumber(1, 10)

const createPrompts = function (guessNumber,low,high,dis,start){
    let hMsg = prompt("Enter your higher message!");
    
    let lMsg = prompt("Enter your lower message!");
    
    let exitMsg = prompt("Enter your exit message!");

    let winMsg = prompt("Enter your win message!");

    setupGame(guessNumber,low,high,dis,start,hMsg,lMsg,exitMsg,winMsg);
}

const createOwnGame = function(){
    let low = parseInt(prompt("Enter your lower range number only!"));
    console.log(low);
    while(isNaN(low)){
        low = parseInt(prompt("Please! enter a valid lower range number!"));
        console.log(low);
    }

    let high = parseInt(prompt("Enter your upper range number!"));
    console.log(high);
    
    while(isNaN(high) || Math.abs(high - low)<2){
        high = parseInt(prompt("Please enter a valid number, not too close to low: "+low+" \n High should atleast differ by low with 2"));
        console.log(high);
    }

    if(high < low){
        [high,low] = [low,high];
    } 
    
    let guessNumber = getGuessNumber(low,high);

    let dis = parseInt(prompt("Enter your exit number: Apart from the range (not between) "+low+" and "+high));

    while(dis>=low && dis<=high || isNaN(dis)){
        dis = parseInt(prompt("Again! Please enter your exit number: Apart from the range "+low+" and Higher than "+high));
    }
    console.log(low,high,dis);

    let start = "Guess a number between " + low + " and " + high +" or press: " +dis+ " to exit!";

    let check = prompt("Do you want to create your own message prompts for high, low, exits and vistory? \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
    console.log(check);

    
    while(check!=='y' && check!=='n'){
        check = prompt("Enter 'Y' or 'N'").toLowerCase();
        console.log(check!='n');
        console.log(check);
    }

    if(check === 'y'){
        createPrompts(guessNumber,low,high,dis,start);
    }else{
        setupGame(guessNumber,low,high,dis,start);
    }
    
}

const createGame = function(){
    alert("Create a guess game!");

    let check = prompt("Do you want to create your own game or play default? \n\n Press'Y' for Yes or 'N' for No.").toLowerCase();
    console.log(check);

    
    while(check!=='y' && check!=='n'){
        check = prompt("Enter 'Y' or 'N'").toLowerCase();
        console.log(check!='n');
        console.log(check);
    }

    if(check == 'y'){
        createOwnGame();
    }else{
        let guessNumber = getGuessNumber();
        setupGame(guessNumber);
    }
    

    
}

createGame();



