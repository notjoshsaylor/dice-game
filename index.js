let p1Score = 0;
let p2Score = 0;
let player1Active = true;

let message = document.getElementById("message");
let p1ScoreBoard = document.getElementById("player1Scoreboard");
let p2ScoreBoard = document.getElementById("player2Scoreboard");
const p1Dice = document.getElementById("player1Dice");
const p2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");
const dblBtn = document.getElementById("dbl");

function resetButton() { 
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
};

rollBtn.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 6) +1;

    if (player1Active){
        p1Dice.textContent = randomNum;
        p1Score += randomNum;
        p1ScoreBoard.textContent = p1Score;
        p2Dice.classList.remove("active");
        p1Dice.classList.add("active");
        message.textContent = "Player One Turn";
    }else{
        p2Dice.textContent = randomNum;
        p2Score += randomNum;
        p2ScoreBoard.textContent = p2Score
        message.textContent = "Player Two Turn";
        p1Dice.classList.remove("active");
        p2Dice.classList.add("active")
    };
    player1Active = !player1Active;

    if (p1Score >=  20){
        message.textContent = "Player One Wins!!";
        resetButton();
    }else if (p2Score >= 20){
        message.textContent = "Player Two Wins!!";
       resetButton();
    }

});

resetBtn.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreBoard.textContent = 0;
    p2ScoreBoard.textContent = 0;
    player1Active = true;
    message.textContent = "Player One Turn";
    p1Dice.textContent = "-"
    p2Dice.textContent ="-"
    p2Dice.classList.remove("active");
    p1Dice.classList.add("active");
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
});
