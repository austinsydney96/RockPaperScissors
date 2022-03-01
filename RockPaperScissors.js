const computerChoiceDisplay = document.getElementById("computer-choice")
const yourChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("Button")

let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = "It's a draw"
    }
    if (computerChoice === "Rock" && yourChoice === "Paper") {
        result = "You Win!"
    }
    if (computerChoice === "Scissors" && yourChoice === "Paper") {
        result = "You Lost"
    }
    if (computerChoice === "Paper" && yourChoice === "Rock") {
        result = "You Lost"
    }
    if (computerChoice === "Rock" && yourChoice === "Scissors") {
        result = "You Lost"
    }
    if (computerChoice === "Scissors" && yourChoice === "Rock") {
        result = "You Win!"
    }
    if (computerChoice === "Paper" && yourChoice === "Scissors") {
        result = "You Win!"
    }
    resultDisplay.innerHTML = result
}