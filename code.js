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
    if (rtn!= null)
    {
        rtn = rtn.toLowerCase();
        while (rtn != "rock" && rtn != "paper" && rtn != "scissors")
            {
                rtn = prompt("Invalid input, try again");
            }
    }

    return rtn;
}

function playRound(humanChoice, computerChoice)
{
    if(playerScore >= 5 || computerScore >=5)
        return "The game has concluded";
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
    if (playerScore >= 5)
        victoryMessage.textContent = "Player reaches five points first!";
    return message;
}

function computerWins(humanChoice, computerChoice)
{
    computerScore++; roundNumber++;
    let message = `Computer wins!, ${computerChoice} beats ${humanChoice}`;
    if (computerScore >= 5)
        victoryMessage.textContent = "Computer reaches five points first!"
    return message;
}

function changeResultsMessage(message)
{
    resultsMessage.textContent = message;
    playerScoreMessage.textContent = `Player Score: ${playerScore}`;
    computerScoreMessage.textContent = `Computer Score: ${computerScore}`;
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// init Results Display
const results = document.querySelector("#results");
const resultsMessage = document.createElement("p");
results.appendChild(resultsMessage);
const playerScoreMessage = document.createElement("p");
results.appendChild(playerScoreMessage);
const computerScoreMessage = document.createElement("p");
results.appendChild(computerScoreMessage);
const victoryMessage = document.createElement("p");
results.appendChild(victoryMessage);

let roundNumber = 0;
let computerScore = 0;
let playerScore = 0;

btnRock.addEventListener("click", () => changeResultsMessage(playRound("rock", getComputerChoice())));
btnPaper.addEventListener("click", () => changeResultsMessage(playRound("paper", getComputerChoice())));
btnScissors.addEventListener("click", () => changeResultsMessage(playRound("scissors", getComputerChoice())));