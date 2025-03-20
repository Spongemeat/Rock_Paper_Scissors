//get computer + user choice choice
let userChoice = getHumanChoice();
let compChoice = getComputerChoice();

//declare scores, starting at 0
let humanScore = 0;
let computerScore = 0;

console.log('You picked ' + userChoice);
console.log('The computer picks ' + compChoice);

let play = playRound(userChoice, compChoice);

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
  //compare user input vs computer input
  //paper > rock;
  //rock > scissors;
  //scissors > paper;

  //while the users input equals rock
    //if computer equals scissors, user wins
    //if computer equals paper, computer wins
    //if computer equals rock, tie

  //while the user's input equals paper
    //if computer equals scissors, computer wins
    //if computer equals paper, tie
    //if computer equals rock, user wins

  //while the user's input equals scissors
    //if computer equals scissors, tie
    //if computer equals paper, user wins
    //if computer equals rock, computer wins


  //if(userChoice === 'rock' && compChoice === 'scissors'){
    //console.log('user wins, rock beats scissors')
    //humanScore++;
  //}
    //if user input beats computer input, humanScore++
    //if computer input beats user input, comperScore++
    //if tie, return
  
  //announce winner of round
}