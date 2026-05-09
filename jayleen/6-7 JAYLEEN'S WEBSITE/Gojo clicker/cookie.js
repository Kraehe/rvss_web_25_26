
var Gojo_Count = 50;
var GojoCountPower = 1;

var Clicks_PerSecond;
updateGojo_CountPower();
updateGojo_CountTotal();


function Increase() {
    Gojo_Count+=GojoCountPower;
    console.log(Gojo_Count)
    document.getElementById("Gojo_Count").textContent = Gojo_Count;
    updateGojo_CountTotal();
}


function setup() {

    if (localStorage.getItem("Gojo_Count") !== null) {
        // overwrite score with saved value in storage
        Gojo_Count = parseInt(localStorage.getItem("Gojo_Count"));
    }

    updateGojo_CountTotal(); // initialize score display

}


function buy_Gojo_Count_Power() {
    console.log("test");

    let cost = (GojoCountPower+1)**2;


   if(Gojo_Count>= cost){
    Gojo_Count-= cost;
    GojoCountPower +=1;
   }
   updateGojo_CountPower();
   updateGojo_CountTotal();
}





function add_Gojo_Count_per_second() {
   
}

function updateGojo_CountTotal() {
    document.getElementById("Gojo_Count").textContent = Gojo_Count;
    localStorage.setItem("Gojo_Count", Gojo_Count); // save score to local storage
}

function updateGojo_CountPower() {
    document.getElementById("Gojo_Count").textContent = Gojo_Count;
document.getElementById("Gojo_CountPower").innerText = GojoCountPower;
document.getElementById("Gojo_CountPower_buy").innerText = `Buy Gojo Power ${GojoCountPower+1}:`;

document.getElementById("Gojo_CountPower_Cost").innerText = `${(GojoCountPower+1)**2}`

}

















