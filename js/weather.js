let temperatures = [-5, 5, 17, 22, 30, 20, 0];

let offers = ["forró csoki", "meleg tea", "finom süti", "fagyi", "jéghideg limonádé"];
let maxTemperatures = [0, 15, 20, 25, 100];

function showOffer() {

    let day = parseInt(document.querySelector("#day").value, 10);
    let actualTemperature = temperatures[day];
    let actualOffer = "";
    for (let i = 0; i < maxTemperatures.length; i++) {
        if (actualTemperature <= maxTemperatures[i]) {
            actualOffer = offers[i];
            break;
        }
    }

    document.querySelector("#actualTemperature").innerHTML = actualTemperature + " &deg;C";
    document.querySelector("#actualOffer").innerHTML = "Napi ajánlatunk: " + actualOffer;
}

window.onload = function () {

    let date = new Date();
    let day = date.getDay() - 1; // a .getDay() a hét napjait 0-tól kezdődő számmal adja vissza, és az első nap a vasárnap. Nekünk viszont a 0 hétfő kell legyen.
    day = day < 0 ? 6 : day; // a -1 a vasárnap, azt átírjuk 6-ra
    document.querySelector("#day").value = day;

    showOffer();

    document.querySelector("#minTemp").innerHTML = "Minimum: " + minimumTemperature() + " &deg;C";
    document.querySelector("#maxTemp").innerHTML = "Maximum: " + maximumTemperature() + " &deg;C";
    document.querySelector("#avgTemp").innerHTML = "Átlag: " + averageTemperature() + " &deg;C";

};

function minimumTemperature() {

    let min = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i];
        }
    }
    return min;
}
function maximumTemperature() {

    let max = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > max) {
            max = temperatures[i];
        }
    }
    return max;
}
function averageTemperature() {
    if (temperatures.length == 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return (sum / temperatures.length).toFixed(1);
}