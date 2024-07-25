function getComputerChoice() {
    let x = (Math.random() * 3);
    if (x < 1)
        return "rock";
    else if (x < 2)
        return "paper";
    else   
        return "scissors";
}

function getHumanChoice() {
    let y = prompt("Input choice (rock/paper/scissors)");
    y = y.toLowerCase();
    if (y != "rock" && y != "paper" && y != "scissors") {
        console.log("Invalid input");
        getHumanChoice();
    }
    return y;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "rock")
                return "You Tie!";
            else if (computerChoice === "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock.";
            }
            else {
                humanScore++;
                return "You Win! Rock beats Scissors.";
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                return "You Win! Paper beats Rock";
            }
            else if (computerChoice === "paper")
                return "You Tie!";
            else {
                computerScore++;
                return "You Lose! Scissors beats Paper.";
            }
        }
        else {
            if (computerChoice === "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors.";
            }   
            else if (computerChoice === "paper") {
                humanScore++;
                return "You Win! Scissors beats Paper.";
            }
            else
                return "You Tie!";
        }
    }
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("Player: " + humanScore + ", Computer: " + computerScore);
    }
}
playGame();