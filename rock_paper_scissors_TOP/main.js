const score = document.querySelector("#score");
const announcer = document.querySelector("#announcer");
const buttons = document.querySelectorAll("button")

function getComputerChoice() {
    let x = (Math.random() * 3);
    if (x < 1)
        return "rock";
    else if (x < 2)
        return "paper";
    else   
        return "scissors";
}

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        announcer.textContent = playRound(humanChoice, computerChoice);
        score.textContent = "Player: " + humanScore + ", Computer: " + computerScore;
        if (humanScore >= 5) {
            humanScore = 0;
            computerScore = 0;
            announcer.textContent = "You Win! Choose a hand to play again:"
        }
        if (computerScore >= 5) {
            humanScore = 0;
            computerScore = 0;
            announcer.textContent = "You! Choose a hand to play again:"
        }
    })
})

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock")
            return "Computer chose Rock. You Tie!";
        else if (computerChoice === "paper") {
            computerScore++;
            return "Computer chose Paper. You Lose! Paper beats Rock.";
        }
        else {
            humanScore++;
            return "Computer chose Scissors. You Win! Rock beats Scissors.";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "Computer chose Rock. You Win! Paper beats Rock";
        }
        else if (computerChoice === "paper")
            return "Computer chose Paper. You Tie!";
        else {
            computerScore++;
            return "Computer chose Scissors. You Lose! Scissors beats Paper.";
        }
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            return "Computer chose Rock. You Lose! Rock beats Scissors.";
        }   
        else if (computerChoice === "paper") {
            humanScore++;
            return "Computer chose Paper. You Win! Scissors beats Paper.";
        }
        else
            return "Computer chose Scissors. You Tie!";
    }
}