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

  let playerWin = 'Player wins ';
  let compWin = 'Computer wins ';
  
  //create a list element
  let roundList = document.createElement('li');
  roundList.style.cssText = 
    'list-style: none; padding: 0; margin: 0;'; 

  roundList.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  scoreBoard.appendChild(roundList);

  //while the users input equals rock
 while (playerChoice === 'rock'){
    if (compChoice === 'scissors'){
      playerScore ++;
      return playerWin;
    }
    else if (compChoice === 'paper'){ 
      computerScore ++;
      return compWin;
    }
    else {
      console.log('tie');
      return 'tie ';
    }
  }

  //while the user's input equals paper
  while (playerChoice === 'paper'){
    if (compChoice === 'rock'){
      playerScore ++;
      return playerWin;
    }
    else if (compChoice === 'scissors'){ 
      computerScore ++;
      return compWin;
    }
    else {
      console.log('tie');
      return 'tie ';
    }
  }

  //while the user's input equals scissors
  while (playerChoice === 'scissors'){
    if (compChoice === 'paper'){
      playerScore ++;
      return playerWin;
    }
    else if (compChoice === 'rock'){ 
      computerScore ++;
      return compWin;
    }
    else {
      console.log('tie');
      return 'tie ';
    }
  }
}

//play round
function playGame (){
    //for each round, declare winner of round number and current score count

    //get computer + user choice choice
    round ++;
    //playerChoice = getplayerChoice();
    compChoice = getComputerChoice();

    console.log('\n' +'You picked ' + playerChoice);
    console.log('The computer picks ' + compChoice);

    //play a single round and return winner
    console.log(playRound(playerChoice, compChoice) + 'round ' + round);
  
  if (playerScore === 5){
    return 'You win the game!';
  } 
  else if(computerScore === 5) {
    return 'Computer wins the game!';
  }

}