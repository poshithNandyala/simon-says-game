let computer = [];
let user = [];
let colors = ["red", "green", "blue", "yellow"];
let level = document.querySelector("h2");
// console.log(level);
let l = 0;
let highestLevel = parseInt(localStorage.getItem('highest')) || 0;
let highest = document.querySelector("#highscore");
highest.innerText = `Highest Level reached: ${highestLevel}`;
console.log(highest);
let body = document.querySelector("body");
let start = false,
    gameover = false;
let btns = document.querySelectorAll(".btn");
// console.log(btns);

function computerFlash() {
    let flash = Math.floor(Math.random() * 4);
    let e = document.getElementById(colors[flash]);

    // console.log(e);
    e.classList.add("white");
    setTimeout(() => {
        e.classList.remove("white");
    }, 250);
    computer.push(colors[flash]);
}
function check() {
    if (computer[user.length - 1] !== user[user.length - 1]) {
        gameover = true;
    }
    if (user.length === computer.length && !gameover) {
        levelup();
    }
}
function resetgame() {
    computer = [];
    user = [];
    l = 0;
    gameover = false;
    start = false;
    level.innerText = "Start game(press any key to start)";
}
function gameoverCheck() {
    if (gameover) {
        level.innerText = "Game Over";
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
            level.innerText = "resetting the game.";
        }, 1000);
        setTimeout(() => {
            resetgame();
        }, 2000);
    }
}
function userFlash(e) {
    e.classList.add("smokewhite");
    setTimeout(() => {
        e.classList.remove("smokewhite");
    }, 250);
    user.push(e.id);
    check();
    gameoverCheck();
}
document.addEventListener("keypress", event => {
    if (!start) {
        start = true;
        levelup();
    }
});
btns.forEach(e => {
    e.addEventListener("click", () => {
        if (start) { 
            userFlash(e);
        }
    });
});
function levelup() {
    l++;
    highestLevel = Math.max(l, highestLevel);
    localStorage.setItem("highest", highestLevel);
    highest.innerText = `Highest Level reached: ${highestLevel}`;
    level.innerText = "Level " + l;
    user = [];
    setTimeout(() => {
        computerFlash();
    }, 600)
    // console.log(computer);
}