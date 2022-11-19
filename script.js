let playerScore = 0
let compScore = 0

title = document.querySelector('.title')
rockBtn = document.querySelector('.rock')
paperBtn = document.querySelector('.paper')
scissorsBtn = document.querySelector('.scissors')
playerChoices = [rockBtn, paperBtn, scissorsBtn]
compChoices = ["rock", "paper", "scissors"]

const addScore = (playerChoice, compChoice) => {
    const decideTurnWinner = () => {
        if (playerChoice == compChoice) {
            title.innerHTML = "TURN TIE"
            return { playerScoreAdd: 0, computerScoreAdd: 0 }
        } else if (playerChoice == "rock" && compChoice == "paper") {
            title.innerHTML = "THE MACHINE GETS A POINT"
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "paper" && compChoice == "rock") {
            title.innerHTML = "THE HUMAN GETS A POINT"
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        } else if (playerChoice == "rock" && compChoice == "scissors") {
            title.innerHTML = "THE HUMAN GETS A POINT"
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        } else if (playerChoice == "scissors" && compChoice == "rock") {
            title.innerHTML = "THE MACHINE GETS A POINT"
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "paper" && compChoice == "scissors") {
            title.innerHTML = "THE MACHINE GETS A POINT"
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "scissors" && compChoice == "paper") {
            title.innerHTML = "THE HUMAN GETS A POINT"
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        }
    }
    result = decideTurnWinner()
    if (playerScore < 3 && compScore != 3) {
        playerScore += (result.playerScoreAdd)
    }
    if (compScore < 3 && playerScore != 3) {
        compScore += (result.computerScoreAdd)
    }
}

const compChoice = () => {
    return compChoices[(Math.floor(Math.random() * 3))]
}

playerChoices.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        pChoice = element.classList[0]
        cChoice = compChoice()
        addScore(pChoice, cChoice)
        //UPDATING SCORE ON DOM
        user_score = document.querySelector('.user_score')
        computer_score = document.querySelector('.computer_score')
        user_score.innerHTML = playerScore
        computer_score.innerHTML = compScore


        if (playerScore == 3) {
            title.innerHTML = 'THE HUMAN HAS WON'

        } else if (compScore == 3) {
            title.innerHTML = 'THE MACHINE HAS WON'
        }
    })
});
