//get computer + user choice choice
let userChoice;
let compChoice;

//declare scores, starting at 0
let humanScore = 0;
let computerScore = 0;

//console.log('You picked ' + userChoice);
//console.log('The computer picks ' + compChoice);

console.log(playGame());
//console.log(play);

function getComputerChoice(){
  //pick equals random value between 0 and 1 rounded down, multiplied by 3
  let pick = Math.floor((Math.random() * 3));

  //assign the value a name, either Rock, Paper, or scissors
    //if value equals 0, Rock
    //if value equals 1, Paper
    //if value equals 2, paper  
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
  let userWin = 'User wins the round';
  let compWin = 'Computer wins the round';

  //while the users input equals rock
    //if computer equals scissors, user wins
    //if computer equals paper, computer wins
    //if computer equals rock, tie
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
      return;
    }
  }

  //while the user's input equals paper
    //if computer equals scissors, computer wins
    //if computer equals paper, tie
    //if computer equals rock, user wins
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
      return;

    }
  }

  //while the user's input equals scissors
    //if computer equals scissors, tie
    //if computer equals paper, user wins
    //if computer equals rock, computer wins
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
      return;

    }
  }
}

//play 5 round game
function playGame (){
  //play 5 rounds
    //for each round, declare winner of round number and current score count
  for (let i = 0; i < 5; i++){
    userChoice = getHumanChoice();
    compChoice = getComputerChoice();

    console.log('You picked ' + userChoice);
    console.log('The computer picks ' + compChoice);

    let play = playRound(userChoice, compChoice);
  }
  
  if (humanScore > computerScore){
    return 'You win!';
  } 
  else {
    return 'Computer Wins!';
  }

  //
}