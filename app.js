let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started==false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( () => {
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( () => {
        btn.classList.remove("userflash");
    },100);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level - ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(indx) {
    if(userSeq[indx] == gameSeq[indx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game over!, Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 350);
        reset();
    }
    
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
