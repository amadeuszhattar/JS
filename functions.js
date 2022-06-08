function computerPlay(){
    const random = Math.floor(Math.random() *3 +1);
    if(random ==1) return 'rock';
    else if(random ==2) return 'scissors';
    else  return 'paper';
}

function displayMoves(playerMove,computerMove) {
    const playerMoveDiv = document.querySelector("#player-move");
    const computerMoveDiv = document.querySelector("#computer-move");
    playerMoveDiv.innerHTML = playerMove;
    computerMoveDiv.innerHTML = computerMove;
}

function displayResult(playerMove,computerMove) {
    const resultDiv = document.querySelector("#result");


    if(playerMove === computerMove) {
                resultDiv.style.color = "inherit";
                resultDiv.innerHTML = 'Draw';
    }
    else if(
    (playerMove ==="paper" && computerMove==="scissors") ||
    (playerMove ==="scissors" && computerMove==="rock") ||
    (playerMove ==="rock" && computerMove==="paper")
    ){
                resultDiv.innerHTML = 'You lost';
                resultDiv.style.color = "red";
    }else{
                resultDiv.innerHTML = 'You won';
                resultDiv.style.color = "green";
        }
}