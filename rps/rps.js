/*Get Player Choice*/

//Declare a function called getPlayerChoice to prompt player to enter their choice each round
const getPlayerChoice = () => {
//The only accepted inputs
  const validChoices = ['rock', 'paper', 'scissors']
//Normalizes the input to lowercase with no whitespace
  let playerChoice = prompt('Choose your fighter!').toLowerCase().trim()
//If the input isn't one of the accepted ones, keep prompting player until it is
  while (!validChoices.includes(playerChoice)) {
    playerChoice = prompt('Invalid input. Please enter rock, paper, or scissors.').toLowerCase().trim()
  }
  return playerChoice
}


/*Get Computer Choice*/

//Declare a function called getComputerChoice to randomly return 'rock,' 'paper,' or 'scissors'
const getComputerChoice = () => {
  const randomNum = Math.random()
//These are the only three options
  if (randomNum < 0.33) return 'rock'
  else if (randomNum < 0.66) return 'paper'
  else return 'scissors'
}


/*Play Round*/

//Tracks scores and current round results across rounds
let playerScore = 0
let computerScore = 0
let result = ''

//Delcare a function called playRound that takes in both of the choices from the above functions, compares them, and updates scores and results each time
const playRound = (getPlayerChoice, getComputerChoice) => {

//Player input
const playerChoice = getPlayerChoice()
//Computer input
const computerChoice = getComputerChoice()

//Winning combinations for the player
if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
   (playerChoice === 'paper' && computerChoice === 'rock') ||
   (playerChoice === 'scissors' && computerChoice === 'paper')) {

//What happens when the player wins one round
  playerScore += 1
  result = 'You win! '
//If the player wins five rounds, this will also be shown
  if (playerScore === 5) {
  result += 'You won the game!'
  }
}

//Checks for a tie
else if (playerChoice === computerChoice){
  result = 'Tie!'  
}

//Otherwise, the computer wins the round
else {
  computerScore += 1
  result = 'I win! '
//If the computer wins five rounds, this will also be shown
if (computerScore === 5) {
  result += 'I won the game!'
  }
}
}

/*Play Game*/

//Keeps the game looping until either the player or computer reaches five wins
const playGame = () => {
  while (playerScore < 5 && computerScore < 5) {
    playRound(getPlayerChoice, getComputerChoice)
    console.log(result)
    console.log(`Score — You: ${playerScore} | Computer: ${computerScore}`)
  }
}

/*Starts the game by calling the playGame function*/
playGame()