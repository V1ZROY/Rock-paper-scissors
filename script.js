//Establish choices
let choices = ["Rock", "Paper", "Scissors"]
console.log(choices)

//set scores
let wins = 0;
let losses = 0;
let draws = 0;

function play(e){
    //get player choice by grabbing data from event(e) to select innerHTML of button(srcElement) that was clicked
        function playertochoose(){
        return e.srcElement.firstChild.data;
        }

    let playerchoice = playertochoose();

    //get computer choice
    function computertochoose(){
        return choices[Math.floor(Math.random() * 2)]
    }

    let computerchoice = computertochoose()


    //check winner
    function checkwinner(){
        let result;

        if(playerchoice === computerchoice){result = "Draw"; draws++}

        if(playerchoice == "Rock"){
            if(computerchoice == "Paper"){result="loss"; losses++}
            if(computerchoice == "Scissors"){result="win"; wins++}};
        if(playerchoice == "Paper"){
            if(computerchoice == "Scissors"){result="loss"; losses++}
            if(computerchoice == "Rock"){result="win"; wins++}};

        if(playerchoice == "Scissors"){
            if(computerchoice == "Rock"){result="loss"; losses++}
            if(computerchoice == "Paper"){result="win"; wins++}};
            
        return result;
    }

    //Update choices on page
    document.getElementById("playerchoice").innerHTML = playerchoice;
    document.getElementById("computerchoice").innerHTML = computerchoice;


    let result = checkwinner();

    //Update score on page
    document.getElementById("wincount").innerHTML = wins;
    document.getElementById("losscount").innerHTML = losses;
    document.getElementById("drawcount").innerHTML = draws;

};


let weapons = document.querySelectorAll("#weapons > button");

weapons.forEach(element => {
    element.addEventListener('click', play)
});