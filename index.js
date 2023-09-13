let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let playerchoice =document.getElementById("player-choice");
let computerchoice=document.getElementById("computer-choice");


function computerturn(){
    let random = Math.floor(Math.random() * 3)+1;
    if(random==1){
        document.getElementById("computer-choice").textContent="Rock";
    }
    if(random==2){
        document.getElementById("computer-choice").textContent="Paper";
    }
    if(random==3){
        document.getElementById("computer-choice").textContent="Scissor";
    }
    }

document.getElementById("rock").addEventListener("click",function(){
    document.getElementById("player-choice").textContent="Rock";
    computerturn();
    checkwinner();
})
document.getElementById("paper").addEventListener("click",function(){
    document.getElementById("player-choice").textContent="Paper";
    computerturn();
    checkwinner();
})
document.getElementById("scissor").addEventListener("click",function(){
    document.getElementById("player-choice").textContent="Scissor";
    computerturn();
    checkwinner();
})


function checkwinner(){
if(playerchoice.textContent===computerchoice.textContent){
    document.getElementById("result").textContent="Draw";
}
else if(playerchoice.textContent=="Rock" && computerchoice.textContent=="Paper"){
    document.getElementById("result").textContent="You Lose";
}
else if(playerchoice.textContent=="Rock" && computerchoice.textContent=="Scissor"){
    document.getElementById("result").textContent="You Win";

}
else if(playerchoice.textContent=="Paper" && computerchoice.textContent=="Rock"){
    document.getElementById("result").textContent="You Win";

}
else if(playerchoice.textContent=="Paper" && computerchoice.textContent=="Scissor"){
    document.getElementById("result").textContent="You Lose";

}
else if(playerchoice.textContent=="Scissor" && computerchoice.textContent=="Rock"){
    document.getElementById("result").textContent="You Lose";

}
else if(playerchoice.textContent=="Scissor" && computerchoice.textContent=="Paper"){
    document.getElementById("result").textContent="You Win";

}

}


