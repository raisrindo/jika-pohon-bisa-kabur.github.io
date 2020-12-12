let container = document.querySelector("#container");
let tree = document.querySelector("#tree");
let enemy = document.querySelector("#enemy");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `My Score : <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        enemy.classList.add("enemyActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (tree.classList != "treeActive") {
            tree.classList.add("treeActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                tree.classList.remove("treeActive");
            }, 500);
        }
});

//'Game Over' if 'Character' hit The 'enemy' 
let result = setInterval(() => {
    let treeBottom = parseInt(getComputedStyle(tree).getPropertyValue("bottom"));
    //    console.log("treeBottom" + treeBottom);

    let enemyLeft = parseInt(getComputedStyle(enemy).getPropertyValue("left"));
    //    console.log("enemyLeft" + enemyLeft);

    if (treeBottom <= 90 && enemyLeft >= 20 && enemyLeft <= 145) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        enemy.classList.remove("enemyActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        score.innerHTML = `My Score :  <b>${playerScore}</b>`
        playerScore = 0;
    }
}, 10);
