var gllitfans = 0;
var gllitfans_per_second = 1;
var gllit_fans = 1;

if (localStorage.getItem("totalgllitfans") !== null) {
    gllitfans = parseInt(localStorage.getItem("totalgllitfans"));
}
update_score()

function update_score() {
    document.getElementById("score").textContent = gllitfans;
    localStorage.setItem("totalgllitfans", gllitfans);
}

function ILLITclicker() {
    gllitfans += gllitsaquired;

}

function increase_score() {
    gllitfans += 1;
    update_score();
}

 function buy_illit_power (){ 
    let cost = (illit_power+1)**2

    if(illits>=cost) {
illitpower-= cost
illi_power+=1;

    }
}

  

      function updateillitpower(){
   
        document.getElementById("total_illits").InnerText = illit_power;
        document.getElementById("illit_power_buy").innerText = `Buy illit Power ${illit_power+1}:`;

        document.getElementById("illit_power_cost").innerText = `${(illit_power+1)**2} illit`;


    }