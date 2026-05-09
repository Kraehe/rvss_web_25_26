var ragepoints;
var ragepoints_per_second = 1;
var rage_power = 1;

if (localStorage.getItem("total_ragepoints") !== null) {
    // overwrite score with saved value in storage 
    ragepoints = parseInt (localStorage.getItem("total_ragepoints"));
}

function updateScore() {
       document.getElementById("total_ragepoints").innerText = ragepoints;
} 

function clickRageblade() {
    ragepoints +=rage_power;
    console.log(ragepoints)
    updateRagepointsTotal();
}
function BuyRagePower(){
    let cost = (rage_power+1)**2

    if(rage_power>=cost){
        rage_power -= cost
        rage_power +=1;
    
        console.log("test5")
        rage_power+=1;
    
         updateRagepointsPower();
    }
        rage_power += 1;
        updateRagepointsPower();

}

function add_ragepoints_per_second() {
    ragepoints_per_second+=1;
    updateRagepointsPerSecond();
}
function updateRagepointsTotal(){
    document.getElementById("total_ragepoints").innerText = ragepoints;
    localStorage.setItem("total_ragepoints", ragepoints); 
}
function updateRagepointsPower() {
    document.getElementById("rage_power").innerText = rage_power;
    document.getElementById("rage_power_buy").innerText = `Buy Rage Power ${rage_power+1}:`;
    document.getElementById("rage_power_cost").innerText = `${(rage_power+1)**2} rage`;
}

function updateVoidRagePower() {
    document.getElementById("voidrage_total").innerText
}


function updateRagepointsPerSecond() {
    document.getElementById("ragepoints_per_second").innerText = ragepoints_per_second;
}
function buy_voidrage(){
    let cost = Math.floor((voidrage+1)**1.8)+10

    if(ragepoints>= cost){
         ragepoints-= cost
         VoidRage +=1;
    }
    updateRagepointsTotal();
    updateVoidRage();
}

function mainLoop() {
    ragepoints += ragepoints_per_second;
    updateRagepointsTotal();
}




function setup(){
    if (!ragepoints){
        ragepoints = 0;
    }
    console.log("setup")
   
    updateRagepointsTotal();
    updateRagepointsPower();
    updateRagepointsPerSecond();
    const intervalid = setInterval(mainLoop, 1000);
}