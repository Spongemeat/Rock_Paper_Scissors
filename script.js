//computer choice
let choice = getComputerChoice()

console.log(choice)

function getComputerChoice(){
//randomly return one of the following string values: "Rock" "Paper" "Scissors"

//pick equals random value between 0 and 1 rounded down, multiplied by 3
let pick = Math.floor((Math.random() * 3));

//assign the value a name, either Rock, Paper, or scissors
  //if value equals 0, Rock
  //if value equals 1, Paper
  //if value equals 2, paper  
switch(pick) {
  
  case 0:
  pick = 'Rock'
  break;

  case 1:
  pick = 'Paper'
  break;

  case 2:
  pick = 'Scissors'
  break;

  default:
  alert( 'Error, please refresh' );
}

//return the string that is generated 
return pick;
}

//human choice