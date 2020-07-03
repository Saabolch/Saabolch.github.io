let temperatures = [-5, 5, 17, 22, 30, 20, 0];

function showOffer(){

    let day = parseInt(document.querySelector("#day").value, 10);
    let actualTemperature = temperatures[day]
    document.querySelector("#actualTemperature").innerHTML = actualTemperature + " &deg;C";

}