//computer choice
let choice = getComputerChoice()

console.log(choice)

function getComputerChoice(){
//randomly return one of the following string values: "Rock" "Paper" "Scissors"

//let Rock equal 0, Paper equal 1, and scissors equal 2;  
let rock = 0;
let paper = 1;
let scissors = 2;

//pick equals random value between 0 and 1 rounded down, multiplied by 3
let pick = Math.random() * 3;

//return pick value
return pick;
}



//human choice