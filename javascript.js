// console.log("ola");

let comp1;
let variable;
let userP = 0;
let compP = 0;
let tieP;

function getComputerChoice(){
    let d = Math.floor(Math.random() * 3) + 1;

    switch(d){
        case 1:
            comp1 = 'rock';
            break;
        
        case 2:
            comp1 = 'paper';
            break;

        case 3:
            comp1 = 'scissors';
            break;
    }
}





function game(playerSelection1, comp){ // this runs one game and handles all comparisons
    if(comp === playerSelection1){
        tieP = true;
    }
    else if((playerSelection1 === 'scissors' && comp === 'paper') || (comp === 'scissors' && playerSelection1 === 'paper')){
        let y;
        let z = 'scissors beats paper';
        if(playerSelection1 === 'scissors'){
            y = 'You win! ';
        }
        else{
            y = 'You lose! ';
        }
        console.log(y + z);
    }

    else if((playerSelection1 === 'rock' && comp === 'paper') || (comp === 'rock' && playerSelection1 === 'paper')){
        let y;
        let z = 'paper beats rock';
        if(playerSelection1 === 'paper'){
            y = 'You win! ';
        }
        else{
            y = 'You lose! ';
        }
        console.log(y + z);
    }

    else if((playerSelection1 === 'scissors' && comp === 'rock') || (comp === 'scissors' && playerSelection1 === 'rock')){
        let y;
        let z = 'rock beats scissors';
        if(playerSelection1 === 'rock'){
            y = 'You win! ';
            variable = true;
        }
        else{
            y = 'You lose! ';
            variable = false;
        }
        console.log(y + z);
    }
}

function fullGame(){
    while(userP < 5 && compP < 5){
        let playerSelection2 = prompt('Rock, Paper, Scissors, Shoot!').toLowerCase();
        getComputerChoice();

        game(playerSelection2, comp1);
        if(variable && !tieP){
            ++userP;
        }
        else if (tieP){
            ++userP;
            ++compP;
        }
        else{
            ++compP;
        }
        variable = false;
        tieP = false;

        console.log("your score: " + userP);
        console.log("comp score: " + compP);
    }
}

fullGame();
if(userP === 5){
    console.log("Congrats");
}
else{
    console.log("u lose");
}

userP = 0;
compP = 0;
