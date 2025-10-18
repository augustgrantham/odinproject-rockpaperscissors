//variables

let humanScore = 0;
let computerScore = 0;
//element reference
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const result = document.querySelector("span");
const humanScoreDisplay = document.querySelector("#human");
const robotScoreDisplay = document.querySelector("#robot");

//event
rockBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playRound("rock");
});
paperBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playRound("paper");
});
scissorBtn.addEventListener("click", (event) => {
    event.preventDefault();
    playRound("scissors");
});
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
function checkForWinner() {
    if(computerScore == 5 || humanScore == 5) {
        if(humanScore > computerScore)
        {
            result.textContent = "Result: Congratulations! You win!";
        }
        else
        {
            result.textContent = "Result: You lost :( Good luck next time!";
        }
        }
        else return false;
}
function playRound(humanChoice)
{
    if(!checkForWinner()) {
         computerChoice = getComputerChoice();
        if(humanChoice === "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                result.textContent = "Result: Rock ties with rock!";
                console.log("Rock ties with rock!");
                break;
            case "paper":
                result.textContent = "Result: Rock is beaten by paper, you lose!";
                console.log("Rock is beaten by paper, you lose!");
                computerScore++;
                break;
            case "scissors":
                result.textContent = "Result: Rock beats scissors! You win!";
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
                result.textContent = "Result: Paper beats rock, you win!";
                console.log("Paper beats rock, you win!");
                humanScore += 1;
                break;
            case "paper":
                result.textContent = "Result: Paper ties with paper";
                console.log("Paper ties with paper");
                break;
            case "scissors":
                result.textContent = "Result: Paper is beaten by scissors, you lose!";
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
                result.textContent = "Result: Scissors is beaten by rock, you lose!";
                console.log("Scissors is beaten by rock, you lose!");
                computerScore++;
                break;
            case "paper":
                result.textContent = "Result: Scissors beats paper! You win!";
                console.log("Scissors beats paper! You win!");
                humanScore += 1;
                break;
            case "scissors":
                result.textContent = "Result: Scissors tie with scissors";
                console.log("Scissors tie with scissors");
                break;
        }
    }
    }
    checkForWinner();
    humanScoreDisplay.textContent = "Human: " + (humanScore);
    robotScoreDisplay.textContent = "Robot: " + (computerScore);
    }
   

