
//Establish choices
let choices = ["rock", "paper", "scissors"]
console.log(choices)


//get player choice
//check if choice is valid
function playertochoose(){
    let playerchoicecheck = prompt("Make your choice: Rock, Paper or Scissors");
    if(choices.includes(playerchoice.toLowerCase()) === false) {
    playerchoicecheck = prompt("Invalid choice: Please choose from Rock, Paper or Scissors");
    playertochoose();
    }
    return(playerchoicecheck)
}
let validchoice=playertochoose();


//get computer choice
function computertochoose(){
    let computerchoice = choices[Math.floor(Math.random() * 3)]
    return computerchoice
}
let computerchoice = computertochoose()


//Update choices
document.getElementById("playerchoice").innerHTML = validchoice;
document.getElementById("computerchoice").innerHTML = computerchoice;

