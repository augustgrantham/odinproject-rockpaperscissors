//variables

let humanScore = 0;
let computerScore = 0;
let numbOfRounds = 0;

//execution
playGame();
//functions


function getComputerChoice() 
{
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    switch(randomNum) 
    {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    
    return computerChoice;
}

function getHumanChoice()
{
    let humanChoice = prompt("Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("Rock ties with rock!");
                break;
            case "paper":
                console.log("Rock is beaten by paper, you lose!");
                computerScore++;
                break;
            case "scissors":
                console.log("Rock beats scissors! You win!");
                humanScore += 1;
                break;
        }
    }
    if(humanChoice === "paper")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("Paper beats rock, you win!");
                humanScore += 1;
                break;
            case "paper":
                console.log("Paper ties with paper");
                break;
            case "scissors":
                console.log("Paper is beaten by scissors, you lose!");
                computerScore++;
                break;
        }
    }
    if(humanChoice === "scissors")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("Scissors is beaten by rock, you lose!");
                computerScore++;
                break;
            case "paper":
                console.log("Scissors beats paper! You win!");
                humanScore += 1;
                break;
            case "scissors":
                console.log("Scissors tie with scissors");
                break;
        }
    }
    numbOfRounds++;
}

function playGame()
{
    while(numbOfRounds <= 5)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore)
    {
        console.log("Congratulations! You win!");
    }
    else
    {
        console.log("You lost :( Good luck next time!");
    }
}