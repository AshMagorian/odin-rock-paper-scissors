

function getComputerChoice()
{
    let random = Math.floor(Math.random()*3);
    if (random === 0)
    {return "rock"}
    else if (random === 1)
    {return "paper"}
    else
    {return "scissors"}
}

function getHumanChoice()
{
    let rtn = prompt("Rock, paper or scissors?");
    while (rtn.toLowerCase() != "rock" && rtn.toLowerCase() != "paper" && rtn.toLowerCase() != "scissors")
    {
        rtn = prompt("Invalid input, try again");
    }
    return rtn.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
        return `It's a tie! Both players picked ${humanChoice}`;
    else if (humanChoice === "rock")
    {
       return (computerChoice === "scissors") ? playerWins(humanChoice, computerChoice) : computerWins(humanChoice, computerChoice); 
    }
    else if (humanChoice === "paper")
    {
        return (computerChoice === "rock") ? playerWins(humanChoice, computerChoice) : computerWins(humanChoice, computerChoice); 
    }
    else if (humanChoice === "scissors")
    {
        return (computerChoice === "paper") ? playerWins(humanChoice, computerChoice) : computerWins(humanChoice, computerChoice); 
    }
}

function playerWins(humanChoice, computerChoice)
{
    playerScore++; roundNumber++;
    let message = `Player wins!, ${humanChoice} beats ${computerChoice}`;
    return message;
}

function computerWins(humanChoice, computerChoice)
{
    computerScore++; roundNumber++;
    let message = `Computer wins!, ${computerChoice} beats ${humanChoice}`;
    return message;
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
const totalRounds = 5;

do
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
}
while (roundNumber < 5)

console.log(`Final score: player: ${playerScore}, computer: ${computerScore}`);


