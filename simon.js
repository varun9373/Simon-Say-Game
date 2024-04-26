let gameSeq =[];
let userSeq = [];

let buttons = ["red", "yellow" , "green", "blue"];

let level=0;
let start = false;

let heading = document.querySelector("h2");
let btn= document.querySelector("button");

document.addEventListener( "keypress", function (){
    if (start== false){
    start = true;

    levelup();
    }
});

function flash (btn) {
btn.classList.add("flash")
setTimeout( function(){
    btn.classList.remove("flash")
}, 1000);
}

function levelup (){
    userSeq= [];
level= level +1;
heading.innerText = `level ${level}`;

let randIdx = Math.floor (Math.random() *3);
let randColor = buttons[randIdx];
let randButton = document.querySelector ( `.${randColor}`) ;
gameSeq.push(randColor);
console.log(gameSeq);
flash(randButton);
}

function checkAns(idx){
if (gameSeq[idx] === userSeq[idx]){
   if(gameSeq.length == userSeq.length)
   setTimeout(levelup , 1000);
}
else{
  heading.innerText = "Game Over! Press any key to start";
  reset();
}
}


function btnpress(){
    console.log(this);
    let btn = this;
    flash(btn);

    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}



let allbtn = document.querySelectorAll(".btn")
for (i of allbtn){
    i.addEventListener("click", btnpress);
}

function reset(){
    start = false;
    gameSeq= [];
    userSeq= [];
    level=0;
}