// var gameObj = {
//     solved: false,
//     arr: [],
//     secretNum: getRandomInt(1, 10),
//     guessNum: parseInt(guess)
// var tryAgain = false;
/*var obj = {

}


function getRandomInt(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function guessingGame () {
    var secretNum = getRandomInt(1, 100);
    var solved = false
    var arr = [];
    const firstName = prompt('What is your name?')  
    while(!solved) {
        // var firstName = prompt('What is your name?') 
        var guess = prompt(firstName + " guess a number between 1 and 100");
        var guessNum = parseInt(guess);
        arr.push(guessNum);
        if (guessNum < 1 || guessNum > 10) {
            alert('Someone doesnt know how to read...')
        } else if (guessNum === secretNum) {
            alert("NAILED IT!!!");
            alert("Great Job! " + firstName + ", Your guess(es) consisted of " + arr + " !")
            solved = true;
            playAgain();
        } else if (guessNum > secretNum) {
            alert("Too high " + firstName + " , try again!");
        } else {
            alert("Too low " + firstName + " , try again!");
        }
       // arr.push(guessNum);
    }
        
}
   
function resetGame () {

}

function playAgain() {
    var ask = prompt('Would you like to play again: Yes or No');
    if (ask === 'Yes' || ask === 'yes') {
        guessingGame ();
        
    } else {
        alert("Thank you for playing " );
        
    } 
} 




guessingGame(); // plays the game, there is a reset in the guessingGame

*/
//console.log(setUp())


function setUp() {
    var gameObj = {
        arr: [],
        solved: false,
        numOfGuesses: 0,
        history: {}
    }
    var playerName = getName ();
    gameObj.playerName = playerName;
    var secretNum = getRandomInt(1, 10);
    gameObj.secretNum = secretNum
    return gameObj;
}

function getName() {
    var name = prompt('What is your name?')
    return name;
}

function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function guessingGame () {
    var gameObj = setUp ()
    var count = 0;
        
    while(!gameObj.solved) {
        // var firstName = prompt('What is your name?') 
        var guess = prompt(gameObj.playerName + " guess a number between 1 and 10");
        var guessNum = parseInt(guess);
        
        gameObj.arr.push(guessNum);                       //pushing to array
        count +=1
        
        if (guessNum < 1 || guessNum > 10) {
            alert('Someone doesnt know how to read...')
        
        } else if (guessNum === gameObj.secretNum) {
            
            alert("Great Job! " + gameObj.playerName + ", Your guess(es) consisted of " + gameObj.arr + " for a total of " + count + " guess!")
            //gameObj.history[gameObj.playerName][count] = count;
            //gameObj.history[history.attempts 
            //gameObj.solved = true;
            gameObj.solved = true;
            playAgain();
        
        } else if (guessNum > gameObj.secretNum) {
            alert("Too high " + gameObj.playerName + " , try again!");
        
        } else {
            alert("Too low " + gameObj.playerName + " , try again!");
        }
       
    }
    //return gameObj;

}

function playAgain() {
    var ask = prompt('Would you like to play again: Yes or No');
    if (ask === 'Yes' || ask === 'yes') {
        guessingGame ();
        
    } else {
        alert ("Thank you for playing " );
        
    } 
    
    
}


guessingGame();


