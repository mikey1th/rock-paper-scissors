/*Okay, so I know I need tthe code to do a few things to play rock paper scossors:
1.) Get a random number from computer
    - assign it  a value of rock paper or scissors
    - return either rock paper or scissors 
2.) Prompt human to enter one of those same options
3.) create a new function that determines which one wins
*/


//just a fun message
console.log("Rock, Rock, always Rock");

let max = 3;

//function to get computer choice
function getComputerChoice(max){
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0){
        return "rock";
    } else if (computerChoice === 1){
        return "paper";
    } else if (computerChoice === 2){
        return "scissors";
    }
}

//function to get human choice
function getHumanChoice(){
    let humanInput = window.prompt("Let's play rock, paper, scissors!").toLowerCase();
    return humanInput;
}

//let vars for scores
let humanScore = 0;
let computerScore = 0;


//variables from functions
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice(max);


//play a game!
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

 //play a round function inside play a game
    function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return `You tied with the computer!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ){
            humanScore++;
            return `You win ${humanChoice} beats ${computerChoice}!`
    } else {
        computerScore++;
        return `You loose ${computerChoice} beats ${humanChoice}!`
    }
}   
    //manual five rounds
    let round1 = playRound(getHumanChoice(), getComputerChoice(max));
    console.log(round1, `Score: Human ${humanScore} - Computer ${computerScore}`);
    let round2 = playRound(getHumanChoice(), getComputerChoice(max));
    console.log(round2, `Score: Human ${humanScore} - Computer ${computerScore}`);
    let round3 = playRound(getHumanChoice(), getComputerChoice(max));
    console.log(round3, `Score: Human ${humanScore} - Computer ${computerScore}`);
    let round4 = playRound(getHumanChoice(), getComputerChoice(max));
    console.log(round4, `Score: Human ${humanScore} - Computer ${computerScore}`);
    let round5 = playRound(getHumanChoice(), getComputerChoice(max));
    console.log(round5, `Score: Human ${humanScore} - Computer ${computerScore}`);

    if(humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game! Better luck next time!");
    } else {
        console.log ("The game is a tie! Play again.");
    }
}

playGame();



