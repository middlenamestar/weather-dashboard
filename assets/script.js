// when user searches for city:
// presented with current and future conditions, and the city is added to search history.

// current weather conditions for city:
// city name, date, weather icon, temperature, humidity, wind speed, uv index.

// uv index:
// colour indicating whether conditions are favorable, moderate, or severe.
// (use class)

// 5-day forecast:
// date, weather icon, temperature, humidity, wind speed.

// click on city in search history:
// again presented with current and future conditions for that city.



// current weather:
// allows you to call by city.
// name, temperature, humidity, wind speed, icon.
// missing: uv index.

// 5 day:
// allows you to call by city.
// temperature, humidity, wind speed, icon.✅

// one-call:
// does not allow you to call by city.
// how to convert city into lat lon because user will type city then that has to go to geo api that converts
// to lat lon, then geo api fetches data from one-call to get the weather info needed.

// geo: https://api.openweathermap.org/geo/1.0/direct?q=Atlanta&appid=8ee06b00fae45decc9bb95425a69991a💟
// endpoint & resources: https://api.openweathermap.org/geo/1.0/direct?q=💟
// user input = ""💟
// key: &appid=8ee06b00fae45decc9bb95425a69991a💟
// this would give us geo information.💟
// grab lat & lon from geo. state, and country, too if liked.💟
// https://api.openweathermap.org/data/2.5/onecall?lat=33.7489924&lon=-84.3902644&exclude=minutely,hourly,alerts&appid=8ee06b00fae45decc9bb95425a69991a
// https://api.openweathermap.org/data/2.5/onecall?lat= INSERT LAT HERE
// &lon= INSERT LON HERE
// &exclude=minutely,hourly,alerts&appid=8ee06b00fae45decc9bb95425a69991a
// this is one-call.
// now you go into one-call and grab data needed.

// how would you insert lat and lon though?
// create var for lat and lon?

// also have to think about search feature.



var searchBtn = $("#search-btn");
var cityInput = $("#city-input");

// when user clicks search submit form.
function searchCity(event){
    event.preventDefault();
    var userInput = cityInput.val();
    // console.log(userInput);
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=8ee06b00fae45decc9bb95425a69991a")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var lat = data[0].lat;
            var lon = data[0].lon;
            var state = data[0].state;
            // console.log(state);
        })
}



searchBtn.on("click", searchCity);