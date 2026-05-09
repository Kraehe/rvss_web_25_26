//variable
let faceEmoji = document.getElementById("face");
let points = 0;

function increase() {
     points += 1;
}


// syntax for functions:
// function functionName() { actual functions };
function happy() {
     faceEmoji.innerText = "😁";
}

function sad() {
     faceEmoji.innerText = "☹️";
}

function lol() {
     faceEmoji.innerText = "🤣";
}

function cool() {
     faceEmoji.innerText = "😎";
}

function nerd() {
     faceEmoji.innerText = "🤓";
}

