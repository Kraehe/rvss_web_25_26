var pizza_count;
var pizza_power = 1;
var pizza_per_second =0;


function pizza_clicked(){
    pizza_count+=pizza_power;
    console.log(pizza_count)
    updatePizzaCount();
}

function add_pizza_power(){
    pizza_power += 1;
    updatePizzaPower();
}
function add_pizza_per_second(){
    pizza_per_second += 1;
    updatePizzaPerSecond();
}


function updatePizzaCount(){
    document.getElementById("pizza_count").innerHTML = pizza_count;
}
function updatePizzaPower(){
    document.getElementById("pizza_power").innerHTML = pizza_power;
}

function updatePizzaPerSecond(){
    console.log("test")
    document.getElementById("pizza_per_second").innerHTML = pizza_per_second;
}

function setup(){
    if (!pizza_count){
    pizza_count = 0;
    }
    console.log(pizza_count)
    updatePizzaPower();
    updatePizzaCount();
    updatePizzaPerSecond();
    const intervalId = setInterval(mainLoop, 1000);
}

 function mainLoop(){
    pizza_count += pizza_per_second
    updatePizzaCount();
 }