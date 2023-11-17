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
        result.textContent = 'Tie!';
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
        result.textContent = y + z;
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
        result.textContent = y + z;
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
        result.textContent = y + z;
    }
}

function fullGame(input){
    // while(userP < 5 && compP < 5){
        // let input = prompt('Rock, Paper, Scissors, Shoot!').toLowerCase();
        getComputerChoice();

        game(input, comp1);
        if(variable && !tieP){
            ++userP;
            play.textContent = userP;
        }
        else if (tieP){
            ++userP;
            play.textContent = userP;
            ++compP;
            cpp.textContent = compP;
        }
        else{
            ++compP;
            cpp.textContent = compP;
        }
        variable = false;
        tieP = false;

        // console.log("your score: " + userP);
        // console.log("comp score: " + compP);
    // }
}

// fullGame();
// if(userP === 5){
//     console.log("Congrats");
// }
// else{
//     console.log("u lose");
// }

function playrock(){
    fullGame('rock');
}

function playscissors(){
    fullGame('scissors');
}

function playpaper(){
    fullGame('paper');
}
const rock = document.createElement('button');
rock.textContent = "ROCK";
const sci = document.createElement('button');
sci.textContent = "SCISSORS";
const pap = document.createElement('button');
pap.textContent = "PAPER";

rock.addEventListener('click', playrock);
sci.addEventListener('click', playscissors);
pap.addEventListener('click', playpaper);
// rock.onclick = fullGame('paper');

const btndiv = document.createElement('div');
btndiv.appendChild(rock);
btndiv.appendChild(sci);
btndiv.appendChild(pap);

// document.body.appendChild(btndiv);



const result = document.createElement('div');


const play = document.createElement('div');
play.textContent = userP;
const cpp = document.createElement('div');
cpp.textContent = compP;

const containscrs = document.createElement('div');
containscrs.appendChild(play);
containscrs.appendChild(cpp);


const maincontain = document.createElement('div');
maincontain.appendChild(containscrs);
maincontain.appendChild(result);
maincontain.appendChild(btndiv);

document.body.appendChild(maincontain);
// const hm = document.createElement('div');
// hm.textContent = "test test";

// document.body.append(hm);
// maincontain.textContent = "ello";
userP = 0;
compP = 0;
