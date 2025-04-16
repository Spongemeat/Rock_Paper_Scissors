//initialize

let playerChoice;
let compChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreBoard = document.querySelector('.scoreList');

//button listeners
rockButton.addEventListener('click', () =>{
  playerChoice = 'rock';
  compChoice = getComputerChoice();
  playRound(playerChoice, compChoice);
});

paperButton.addEventListener('click', () =>{
  playerChoice = 'paper';
  compChoice = getComputerChoice();
  playRound(playerChoice, compChoice);
});

scissorsButton.addEventListener('click', () =>{
  playerChoice = 'scissors';
  compChoice = getComputerChoice();
  playRound(playerChoice, compChoice);
});


//!--RPScode--!//

function getComputerChoice(){
  //pick equals random value between 0 and 1 rounded down, multiplied by 3
  let pick = Math.floor((Math.random() * 3));

  //assign the value a name, either Rock, Paper, or scissors
  switch(pick) {
    case 0:
    pick = 'rock'
    break;

    case 1:
    pick = 'paper'
    break;

    case 2:
    pick = 'scissors'
    break;

    default:
    alert( 'Error, please refresh' );
  }

  //return the string that is generated 
  return pick;
}

//play a round
function playRound(playerChoice, compChoice){
  round ++;
  
 
  //while the users input equals rock
 while (playerChoice === 'rock'){
    if (compChoice === 'scissors'){
      ++ playerScore;
      break;
    }
    else if (compChoice === 'paper'){ 
      ++ computerScore;
      break;
    }
    else {
      console.log('tie');
      break;
    }
  }

  //while the user's input equals paper
  while (playerChoice === 'paper'){
    if (compChoice === 'rock'){
      ++ playerScore;
      break;
    }
    else if (compChoice === 'scissors'){ 
      ++ computerScore;
      break;
    }
    else {
      console.log('tie');
      break;
    }
  }

  //while the user's input equals scissors
  while (playerChoice === 'scissors'){
    if (compChoice === 'paper'){
      ++ playerScore;
      break;
    }
    else if (compChoice === 'rock'){ 
      ++ computerScore;
      break;
    }
    else {
      console.log('tie');
      break;
    }
  }

  //create a list element
  let result = document.createElement('li');
  result.textContent = 
    `You chose ${playerChoice}, Computer chose ${compChoice}`  

  let roundList = document.createElement('li');
  roundList.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  scoreBoard.appendChild(result);
  scoreBoard.appendChild(roundList);

  if (playerScore === 5){
    let winnerList = document.createElement('li');
    winnerList.textContent = 'You win the game!';
    winnerList.style.color = 'green';
    scoreBoard.appendChild(winnerList);
  } 
  else if(computerScore === 5) {
    let winnerList = document.createElement('li');
    winnerList.textContent = 'Computer wins the game!';
    winnerList.style.color = 'red';
    scoreBoard.appendChild(winnerList);
  }
}
