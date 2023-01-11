
//Establish choices
let choices = ["rock", "paper", "scissors"]
console.log(choices)


//get player choice
//check if choice is valid
function playertochoose(){
    let playerchoicecheck = prompt("Make your choice: Rock, Paper or Scissors");
    if(choices.includes(playerchoicecheck.toLowerCase()) === false) {
    playerchoicecheck = prompt("Invalid choice: Please choose from Rock, Paper or Scissors");
    playertochoose();
    }
    return(playerchoicecheck)
}
let playerchoice=playertochoose();


//get computer choice
function computertochoose(){
    let computerchoice = choices[Math.floor(Math.random() * 3)]
    return computerchoice
}
let computerchoice = computertochoose()


//Update choices
document.getElementById("playerchoice").innerHTML = playerchoice;
document.getElementById("computerchoice").innerHTML = computerchoice;


//check winner
function checkwinner(){
    let result;
    if(playerchoice === computerchoice){result = "Draw";}
    if(playerchoice == "rock"){
        if(computerchoice == "paper"){result="loss"}
        if(computerchoice == "scissors"){result="win"}};
    if(playerchoice == "paper"){
        if(computerchoice == "scissors"){result="loss"}
        if(computerchoice == "rock"){result="win"}};
    if(playerchoice == "scissors"){
        if(computerchoice == "rock"){result="loss"}
        if(computerchoice == "paper"){result="win"}};
    return result;
}

let result= checkwinner();
alert(result);