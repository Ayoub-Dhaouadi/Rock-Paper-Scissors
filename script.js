const playGame = () => {
    let playerScore = 0
    let compScore = 0

    rockBtn = document.querySelector('.rock')
    paperBtn = document.querySelector('.paper')
    scissorsBtn = document.querySelector('.scissors')

    let compChoices = ["rock","paper","scissors"]
    

    const decideTurnWinner = (playerChoice, compChoice) => {
        if (playerChoice == compChoice) {
            return { playerScoreAdd: 0, computerScoreAdd: 0 }
        } else if (playerChoice == "rock" && compChoice == "paper") {
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "paper" && compChoice == "rock") {
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        } else if (playerChoice == "rock" && compChoice == "scissors") {
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        } else if (playerChoice == "scissors" && compChoice == "rock") {
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "paper" && compChoice == "scissors") {
            return { playerScoreAdd: 0, computerScoreAdd: 1 }
        } else if (playerChoice == "scissors" && compChoice == "paper") {
            return { playerScoreAdd: 1, computerScoreAdd: 0 }
        }
    }

    const addScore = (scoreObject) => {
        playerScore += (scoreObject.playerScoreAdd)
        compScore += (scoreObject.computerScoreAdd)
    }

    const decideGameWinner = () => {
        if (playerScore == 3) {
            return { winner: "player" }
        } else if (compScore == 3) {
            return { winner: "computer" }
        }
    }

}

