
//Establish choices
let choices = ["rock", "paper", "scissors", "r", "p", "s"]
console.log(choices)


//get player choice
//check if choice is valid
function playertochoose(){
    let playerchoicecheck;
    playerchoicecheck = prompt("Make your choice: Rock, Paper or Scissors");

    if (playerchoicecheck == null || playerchoicecheck == undefined || playerchoicecheck == ""){
        alert("Please choose from Rock, Paper or Scissors");
        playerchoicecheck = playertochoose();
    }

    if (choices.includes(playerchoicecheck.toLowerCase() == false)) {
        alert("Invalid choice: Please choose from Rock, Paper or Scissors");
        playerchoicecheck = playertochoose();
    } 
    
    else {
    return playerchoicecheck.toLowerCase().substring(0,1)
    }
}

let playerchoice = playertochoose();


//get computer choice
function computertochoose(){
    let computerchoice = choices[Math.floor(Math.random() * 3)]
    return computerchoice.substring(0,1)
}
let computerchoice = computertochoose()


//Display capitalised choice as full word
function displaychoice(choice){
    switch(choice){
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";    
    }
}

//Update choices on page
document.getElementById("playerchoice").innerHTML = displaychoice(playerchoice);
document.getElementById("computerchoice").innerHTML = displaychoice(computerchoice);


//check winner
function checkwinner(){
    let result;

    if(playerchoice === computerchoice){result = "Draw";}

    if(playerchoice == "r"){
        if(computerchoice == "p"){result="loss"}
        if(computerchoice == "s"){result="win"}};

    if(playerchoice == "p"){
        if(computerchoice == "s"){result="loss"}
        if(computerchoice == "r"){result="win"}};

    if(playerchoice == "s"){
        if(computerchoice == "r"){result="loss"}
        if(computerchoice == "p"){result="win"}};
        
    return result;
}

let result= checkwinner();
alert(result);