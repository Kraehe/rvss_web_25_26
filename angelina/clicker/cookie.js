
var slayer = 0;
var slayer_per_second = 1000;
var click_power =1000;

if (localStorage.getItem("score") !== null){
    // over write score with saved in storage //
 slayer = parseInt(localStorage.getItem("score"));
}

updateSlayer();

function slayer_clicked(){                                                                                     
    slayer += click_power;
    console.log(slayer)
    updateSlayer();
}
function add_click_power(){
    click_power +=1;
    updateSlayer();
}

function updateSlayer(){
    document.getElementById("score").textContent = slayer;
    localStorage.setItem("score" , slayer);


}


function updateslayerpower(){
    document.getElementById("slayer_power").innerText = slayer_power;                                                          
}

function updateslayerspersecond(){
    document.getElementById("slayer_per_second").innerText = slayer_per_second
}

function mainloop(){
    slayer += slayer_per_second;
    updateScore();
}

updateSlayer();
updateslayerpower();
updateslayerpersecond();
const intervalid = setInterval(mainloop, 1000);




function setup(){
    if (!slayer){
        slayer = 0;
    } 
    console.log(slayer)
    updateSlayer()
    // Start the loop and store the interval ID
    // const intervalid = setInterval (mainloop, 1000);
}