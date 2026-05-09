
var friedchekien = 0;  

var click_power = 1;

var wendys_total = 0;
var kfc_total = 0;


if (localStorage.getItem("score") !== null) {
    //overwrite score with saved value in storage
    friedchekien = parseInt(localStorage.getItem("score"));
}
if (localStorage.getItem("click_power") !== null) {
    //overwrite click power with saved value in storage
    click_power= parseInt(localStorage.getItem("click_power"));
}
if (localStorage.getItem("score_per_second") !== null) {
    //overwrite click power with saved value in storage
    friedchekien_per_second= parseInt(localStorage.getItem("score_per_second"));
}

updateScore();
updateClickPower();
updateWendys();
updateKFC();
// Start the loop and store the interval ID
const intervalId = setInterval(mainloop, 1000);

function updateScore() {               
    document.getElementById("score").innerText = friedchekien;
    localStorage.setItem("score", friedchekien); // save to localStorage
}
function updateClickPower() {               
    document.getElementById("click_power").innerText = click_power;
    document.getElementById("click_power_buy").innerText = `buy click power #${click_power+1}`;
    document.getElementById("click_power_cost").innerText = `cost ${click_power**2} friedchiken`;



    localStorage.setItem("click_power", click_power); // save to localStorage
}

function updateKFC() {               
    document.getElementById("kfc_total").innerText = kfc_total;
    document.getElementById("kfc_buy").innerText = `buy kfc #${kfc_total+1}`;
    document.getElementById("kfc_cost").innerText = `cost ${Math.floor(kfc_total**1.7+7)*10} friedchiken`;

    // localStorage.setItem("click_power", click_power); // save to localStorage
}
function updateWendys() {               
    document.getElementById("wendys_total").innerText = wendys_total;
    document.getElementById("wendys_buy").innerText = `buy wendys #${wendys_total+1}`;
    document.getElementById("wendys_cost").innerText = `cost ${Math.floor(wendys_total**1.9)+10} friedchiken`;

    // localStorage.setItem("click_power", click_power); // save to localStorage
}


function friedchekienClicked() {
    friedchekien += click_power;
    updateScore();
}
function buyClickPower(){
    cost = click_power**2

    if(friedchekien >= cost){
        friedchekien -= cost
        click_power++;

    }
    updateScore();
    updateClickPower();
}
function buyClickPower(){
    cost = click_power**2

    if(friedchekien >= cost){
        friedchekien -= cost
        click_power++;

    }
    updateScore();
    updateClickPower();
}
function buyClickPower(){
    cost = click_power**2

    if(friedchekien >= cost){
        friedchekien -= cost
        click_power++;

    }
    updateScore();
    updateClickPower();
}
function buyWendys(){
    cost = Math.floor(wendys_total**1.9)+10

    if(friedchekien >= cost){
        friedchekien -= cost
        wendys_total++;

    }
    updateScore();
    updateWendys();
}
function buyKFC(){
    cost = Math.floor(kfc_total**1.7+7)*10

    if(friedchekien >= cost){
        friedchekien -= cost
        kfc_total++;

    }
    updateScore();
    updateKFC();
}


function mainloop(){
    friedchekien += wendys_total;
    friedchekien += kfc_total*10;
    updateScore();
}




