let car = {
    color: "black",
};

car.color = "green";

car.power = ShowPowerEngine;
function ShowPowerEngine () {
    let power = "Power Engine = " + 200 + " h.p.";
    console.log (power);
};

function GetFruits (pears, apples) {
    return pears + apples;
};

function ShowName (name){
   if (name !== "") {
    console.log ("Hello " + name); 
} else {
    console.log ("There is no such name");
}
};

function CalcTypeofArg (Parameter) {
    let x = typeof Parameter;
    console.log ("Type of Argument - " + x);
};

function GetPrimeNumber (Number) {
    for (let i = Number - 1; i > 1; i--) {
    if (Number % i === 0) {
        return false; } 
    } 
    return Number > 1;
};




