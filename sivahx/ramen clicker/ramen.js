let score=0;
let increase=1;


function updateScore(){
document.getElementById("score").textContent= score;
}

function clickramen(){
    score= score+increase;
    updateScore();
}
