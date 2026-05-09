var JJ_Points = 1;
var ClickPower = 100;

if (localStorage.getItem("JJ_Points") !== null){
    JJ_Points = parseInt(localStorage.getItem("JJ_Points"));
    



    
}

UpdateCookieTotal();

function JJclicked(){
    JJ_Points += ClickPower;
    console.log(JJ_Points)
    UpdateCookieTotal()
}


 function UpdateCookieTotal(){
    document.getElementById("JJ_Id").innerHTML = JJ_Points;
    localStorage.setItem("JJ_Points", JJ_Points);
 

 }
 
 function BuyClickPower(){
    ClickPower += 1000;
    let cost = ClickPower * 10;
    if (JJ_Points >= cost){
        JJ_Points -= cost;
        ClickPower += 10000;
        UpdateCookieTotal();
    }
 //   document.getElementById("ClickPower").innerHTML = ClickPower;


 }
function updateclickPower(){
document.getElementById("ClickPower").innerText = "Click Power: " + ClickPower;                     
document.getElementById("ClickPowerCost").innerText = "Cost: " + (ClickPower * 10) + " JJ Points"; 
document.getElementById("ClickPower").innerText= ClickPower;
}

function buyJaksonPoints(){
laet cost
}

while (true) {
    // Infinite loop to keep the interval running
    JJclicked();
    sleepSync(2000);
}