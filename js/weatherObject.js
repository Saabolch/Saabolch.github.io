function getWeatherData() {
    let data = {
        "weathers": [
            { "dayNumber": 0, "temperature": -5 },
            { "dayNumber": 6, "temperature": 0 },
            { "dayNumber": 4, "temperature": 30 },
            { "dayNumber": 2, "temperature": 17 },
            { "dayNumber": 5, "temperature": 20 },
            { "dayNumber": 1, "temperature": 5 },
            { "dayNumber": 3, "temperature": 25 },
        ],
        "offers": [
            { "upperLimit": 0, "offerMessage": "forró csoki" },
            { "upperLimit": 15, "offerMessage": "meleg tea" },
            { "upperLimit": 20, "offerMessage": "finom süti" },
            { "upperLimit": 25, "offerMessage": "fagyi" },
            { "upperLimit": 50, "offerMessage": "jéghideg limonádé" }
        ]
    }
    return data;
}

window.onload = weatherWidget;

function weatherWidget() {

    let date = new Date();
    let day = date.getDay() - 1; // a .getDay() a hét napjait 0-tól kezdődő számmal adja vissza, és az első nap a vasárnap. Nekünk viszont a 0 hétfő kell legyen.
    day = day < 0 ? 6 : day; // a -1 a vasárnap, azt átírjuk 6-ra
    document.querySelector("#day").value = day;

    let data = getWeatherData();

    document.querySelector("#weatherWidget button").onclick = showOffer;

    showOffer();

    document.querySelector("#minTemp").innerHTML = "Minimum: " + minimumTemperature() + " &deg;C";
    document.querySelector("#maxTemp").innerHTML = "Maximum: " + maximumTemperature() + " &deg;C";
    document.querySelector("#avgTemp").innerHTML = "Átlag: " + averageTemperature() + " &deg;C";


    function showOffer() {

        let day = parseInt(document.querySelector("#day").value, 10);

        let actualWeather = data.weathers.filter(function(item, index){
            return item.dayNumber == day;
        });
        let actualTemperature = actualWeather[0].temperature;
        
        let actualOffer = data.offers.reduce(function(reduction, item, index){
            
           if(actualTemperature <= item.upperLimit && item.upperLimit < reduction.upperLimit){
               
               return item;
           }
           else{
                return reduction;
           }

        },  { "upperLimit": 100, "offerMessage": "" } );

        document.querySelector("#actualTemperature").innerHTML = actualTemperature + " &deg;C";
        document.querySelector("#actualOffer").innerHTML = "Napi ajánlatunk: " + actualOffer.offerMessage;
    }


    function minimumTemperature() {

        let min = data.weathers[0].temperature;
        data.weathers.forEach(function(item, index){
            if(item.temperature < min){
                min = item.temperature;
            }
        });
        return min;
    }

    function maximumTemperature() {
    
        let max = data.weathers[0].temperature;
        data.weathers.forEach(function(item, index){
            if(item.temperature > max){
                max = item.temperature;
            }
        });
        return max;
    }

    function averageTemperature() {

        let tempSum = data.weathers.reduce(function(sum, item, index){
            return sum + item.temperature;
        }, 0);  
        
        return (tempSum / data.weathers.length).toFixed(1);
    }




}