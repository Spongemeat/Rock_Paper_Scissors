let playerChoice;
let compChoice;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

//const rpsButton = document.querySelector('#btn');

rockButton.addEventListener('click', () =>{
  playerChoice = 'rock';
  playGame()
});

paperButton.addEventListener('click', () =>{
  playerChoice = 'paper';
  playGame()
});

scissorsButton.addEventListener('click', () =>{
  playerChoice = 'scissors';
  playGame()
});


//!--RPScode--!//

//declare scores, starting at 0
let playerScore = 0;
let computerScore = 0;
let round = 0;

//console.log(playGame());
//console.log(play);

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

//human choice
function getPlayerChoice(){
  let input = prompt('Type your pick: ');
  input = input.toLowerCase();
  
  return input;
}

//play a round
function playRound(playerChoice, compChoice){
  let playerWin = 'Player wins ';
  let compWin = 'Computer wins ';

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