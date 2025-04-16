let userChoice;
let compChoice;

//declare scores, starting at 0
let humanScore = 0;
let computerScore = 0;
let round = 0;

console.log(playGame());
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
function getHumanChoice(){
  let input = prompt('Type your pick: ');
  input = input.toLowerCase();
  
  return input;
}

//play a round
function playRound(userChoice, compChoice){
  let userWin = 'User wins ';
  let compWin = 'Computer wins ';

  //while the users input equals rock
 while (userChoice === 'rock'){
    if (compChoice === 'scissors'){
      humanScore ++;
      return userWin;
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
  while (userChoice === 'paper'){
    if (compChoice === 'rock'){
      humanScore ++;
      return userWin;
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
  while (userChoice === 'scissors'){
    if (compChoice === 'paper'){
      humanScore ++;
      return userWin;
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

//play 5 round game
function playGame (){

  //play 5 rounds
    //for each round, declare winner of round number and current score count
  for (let i = 0; i < 5; i++){

    //get computer + user choice choice
    round ++;
    userChoice = getHumanChoice();
    compChoice = getComputerChoice();

    console.log('\n' +'You picked ' + userChoice);
    console.log('The computer picks ' + compChoice);

    //play a single round and return winner
    console.log(playRound(userChoice, compChoice) + 'round ' + round);
  }
  
  if (humanScore > computerScore){
    return 'You win the game!';
  } 
  else if(humanScore > computerScore) {
    return 'Computer wins the game!';
  }
  else {
    return 'Tie Game!';
  }
}