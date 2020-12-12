// variabel untuk DOM selector

let game = document.querySelector("#game");
let cloud = document.querySelector("#cloud");
let road = document.querySelector("#road");

let tree = document.querySelector("#tree");
let enemy = document.querySelector("#enemy");

let score = document.querySelector("#score");

let instruction = document.querySelector("#instruction");
let gameOver = document.querySelector("#gameOver");


//deklarasi variabel score
let interval = null;
let playerScore = 0;

//DOM nilai score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `My Score : <b>${playerScore}</b>`;
};

instruction.style.display = "block";


//Game start 
window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {

        gameOver.style.display = "none";
        instruction.style.display = "none";

        enemy.classList.add("enemyActive");
        
        cloud.firstElementChild.style.animation = "cloudAnimate 80s linear infinite";
        
        road.firstElementChild.style.animation = "roadAnimate 2s linear infinite";
        
        interval = setInterval(scoreCounter, 200);
    }
});


//Melompat
window.addEventListener("keydown", (x) => {

    if (x.key == "ArrowUp")
        if (tree.classList != "treeActive") {
            tree.classList.add("treeActive");

            //menghapus class setelah 500 mili second
            setTimeout(() => {
                tree.classList.remove("treeActive");
            }, 500);
        }
});


//Tabrakan
let result = setInterval(() => {
    let treeBottom = parseInt(getComputedStyle(tree).getPropertyValue("bottom"));

    let enemyLeft = parseInt(getComputedStyle(enemy).getPropertyValue("left"));

    if (treeBottom <= 90 && enemyLeft >= 20 && enemyLeft <= 145) {

        gameOver.style.display = "block";
        
        cloud.firstElementChild.style.animation = "none";
        road.firstElementChild.style.animation = "none";

        enemy.classList.remove("enemyActive");
                
        clearInterval(interval);
        
        score.innerHTML = `My Score :  <b>${playerScore}</b>`
        playerScore = 0;
    }

}, 100);
