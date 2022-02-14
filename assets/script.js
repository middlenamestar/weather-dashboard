// CURRENT WEATHER.
var date = moment();
$("#current-date").text(date.format("dddd, MMMM Do, YYYY"));
var cityName = $("#city-name");
var currentTempIcon = $("#current-temp-icon");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");
var currentUV = $("#current-uv");

// 5 DAY FORECAST DATES.
var dateOne = date.add(1, 'days').format("dddd, MMMM Do");
$("#date-one").text(dateOne);

var dateTwo = date.add(1, 'days').format("dddd, MMMM Do");
$("#date-two").text(dateTwo);

var dateThree = date.add(1, 'days').format("dddd, MMMM Do");
$("#date-three").text(dateThree);

var dateFour = date.add(1, 'days').format("dddd, MMMM Do");
$("#date-four").text(dateFour);

var dateFive = date.add(1, 'days').format("dddd, MMMM Do");
$("#date-five").text(dateFive);
// console.log(dateFive);

// forecast
var dateOne = $("#date-one");
var tempOne = $("#temp-one");
var humidOne = $("#humid-one");
var windOne = $("#wind-one");

var dateTwo = $("#date-two");
var tempTwo = $("#temp-two");
var humidTwo = $("#humid-two");
var windTwo = $("#wind-two");

var dateThree = $("#date-three");
var tempThree = $("#temp-three");
var humidThree = $("#humid-three");
var windThree = $("#wind-three");

var dateFour = $("#date-four");
var tempFour = $("#temp-four");
var humidFour = $("#humid-four");
var windFour = $("#wind-four");

var dateFive = $("#date-five");
var tempFive = $("#temp-five");
var humidFive = $("#humid-five");
var windFive = $("#wind-five");

// FORM
var searchBtn = $("#search-btn");
var cityInput = $("#city-input");
var searchHistory = $("#history");

// array
var city = JSON.parse(localStorage.getItem("cities")) || [];

// SET LONDON AS DEFAULT.
function london() {
    // this fetch is just to get the name to appear on page b/c onecall does not have NAME in data.
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=london&appid=8ee06b00fae45decc9bb95425a69991a")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var state = data[0].state;
            var name = data[0].name;
            cityName.text("Currently in: " + name + ", " + state);
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=51.5073219&lon=-0.1276474&exclude=minutely,hourly,alerts&units=imperial&appid=8ee06b00fae45decc9bb95425a69991a")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var currentTemp = data.current.temp;
                    currentTempIcon.text(currentTemp + "˚");
                    var currentIcon = data.current.weather[0].icon;
                    var currentIconImage = new Image();
                    currentIconImage.src = "http://openweathermap.org/img/wn/" + currentIcon + ".png";
                    currentTempIcon.append(currentIconImage);
                    var currentHumid = data.current.humidity;
                    currentHumidity.text("Humidity: " + currentHumid + "%");
                    var currentWind = data.current.wind_speed;
                    currentWindSpeed.text("Wind Speed: " + currentWind + " mph");
                    var currentUVIndex = data.current.uvi;
                    currentUV.text(currentUVIndex);
                    if (currentUVIndex >= 0 && currentUVIndex <= 2) {
                        currentUV.addClass("uv-green");
                    } else if (currentUVIndex >= 3 && currentUVIndex <= 7) {
                        currentUV.addClass("uv-orange");
                    } else if (currentUVIndex >= 8) {
                        currentUV.addClass("uv-red");
                    }
                    //5 DAY.
                    // first day.
                    // console.log(data);
                    var iconOne = data.daily[0].weather[0].icon;
                    var iconOneImage = new Image();
                    iconOneImage.src = "http://openweathermap.org/img/wn/" + iconOne + ".png";
                    $("#one-icon").html(iconOneImage);
                    var temperatureOne = data.daily[0].temp.day;
                    tempOne.text("Temperature during day: " + temperatureOne + "˚");
                    var humidityOne = data.daily[0].humidity;
                    humidOne.text("Humidity: " + humidityOne + "%");
                    var windSpeedOne = data.daily[0].wind_speed;
                    windOne.text("Wind Speed: " + windSpeedOne + " mph");
                    // console.log(temperatureOne);
                    // two.
                    var iconTwo = data.daily[1].weather[0].icon;
                    // console.log(iconTwo);
                    var iconTwoImage = new Image();
                    iconTwoImage.src = "http://openweathermap.org/img/wn/" + iconTwo + ".png";
                    $("#two-icon").html(iconTwoImage);
                    var temperatureTwo = data.daily[1].temp.day;
                    tempTwo.text("Temperature during day: " + temperatureTwo + "˚");
                    var humidityTwo = data.daily[1].humidity;
                    humidTwo.text("Humidity: " + humidityTwo + "%");
                    var windSpeedTwo = data.daily[1].wind_speed;
                    windTwo.text("Wind Speed: " + windSpeedTwo + " mph");
                    // three.
                    var iconThree = data.daily[2].weather[0].icon;
                    var iconThreeImage = new Image();
                    iconThreeImage.src = "http://openweathermap.org/img/wn/" + iconThree + ".png";
                    $("#three-icon").html(iconThreeImage);
                    var temperatureThree = data.daily[2].temp.day;
                    tempThree.text("Temperature during day: " + temperatureThree + "˚");
                    var humidityThree = data.daily[2].humidity;
                    humidThree.text("Humidity: " + humidityThree + "%");
                    var windSpeedThree = data.daily[2].wind_speed;
                    windThree.text("Wind Speed: " + windSpeedThree + " mph");
                    // four.
                    var iconFour = data.daily[3].weather[0].icon;
                    var iconFourImage = new Image();
                    iconFourImage.src = "http://openweathermap.org/img/wn/" + iconFour + ".png";
                    $("#four-icon").html(iconFourImage);
                    var temperatureFour = data.daily[3].temp.day;
                    tempFour.text("Temperature during day: " + temperatureFour + "˚");
                    var humidityFour = data.daily[3].humidity;
                    humidFour.text("Humidity: " + humidityFour + "%");
                    var windSpeedFour = data.daily[3].wind_speed;
                    windFour.text("Wind Speed: " + windSpeedFour + " mph");
                    // five.
                    var iconFive = data.daily[4].weather[0].icon;
                    var iconFiveImage = new Image();
                    iconFiveImage.src = "http://openweathermap.org/img/wn/" + iconFive + ".png";
                    $("#five-icon").html(iconFiveImage);
                    var temperatureFive = data.daily[4].temp.day;
                    tempFive.text("Temperature during day: " + temperatureFive + "˚");
                    var humidityFive = data.daily[4].humidity;
                    humidFive.text("Humidity: " + humidityFive + "%");
                    var windSpeedFive = data.daily[4].wind_speed;
                    windFive.text("Wind Speed: " + windSpeedFive + " mph");
                });
        });
};

function searchCity(lastCity){
    // GEO
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + lastCity + "&appid=8ee06b00fae45decc9bb95425a69991a")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;
            var state = data[0].state;
            var name = data[0].name;
            // console.log(data[0].name);
            cityName.text("Currently in: " + name + ", " + state);
            // ONE CALL
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=8ee06b00fae45decc9bb95425a69991a")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    // console.log(data.current); // ok got current weather data. .daily and array [0-7] gives you 8-day forecast.
                    var currentTemp = data.current.temp;
                    currentTempIcon.text(currentTemp + "˚");
                    var currentIcon = data.current.weather[0].icon;
                    var currentIconImage = new Image();
                    currentIconImage.src = "http://openweathermap.org/img/wn/" + currentIcon + ".png";
                    currentTempIcon.append(currentIconImage); // idk why append here doesn't create the bug of keep adding on after searching for another city but I'm glad..... 😬
                    // console.log(currentIcon);
                    var currentHumid = data.current.humidity;
                    currentHumidity.text("Humidity: " + currentHumid + "%");
                    var currentWind = data.current.wind_speed;
                    currentWindSpeed.text("Wind Speed: " + currentWind + " mph");
                    var currentUVIndex = data.current.uvi;
                    currentUV.text(currentUVIndex);
                    if (currentUVIndex >= 0 && currentUVIndex <= 2) {
                        currentUV.addClass("uv-green");
                    } else if (currentUVIndex >= 3 && currentUVIndex <= 7) {
                        currentUV.addClass("uv-orange");
                    } else if (currentUVIndex >= 8) {
                        currentUV.addClass("uv-red");
                    }
                    //5 DAY FORECAST
                    // first day.
                    var iconOne = data.daily[0].weather[0].icon;
                    // console.log(iconOne);
                    var iconOneImage = new Image();
                    iconOneImage.src = "http://openweathermap.org/img/wn/" + iconOne + ".png";
                    $("#one-icon").html(iconOneImage);
                    var temperatureOne = data.daily[0].temp.day;
                    tempOne.text("Temperature during day: " + temperatureOne + "˚");
                    var humidityOne = data.daily[0].humidity;
                    humidOne.text("Humidity: " + humidityOne + "%");
                    var windSpeedOne = data.daily[0].wind_speed;
                    windOne.text("Wind Speed: " + windSpeedOne + " mph");
                    // console.log(temperatureOne);
                    // two.
                    var iconTwo = data.daily[1].weather[0].icon;
                    // console.log(iconTwo);
                    var iconTwoImage = new Image();
                    iconTwoImage.src = "http://openweathermap.org/img/wn/" + iconTwo + ".png";
                    $("#two-icon").html(iconTwoImage);
                    var temperatureTwo = data.daily[1].temp.day;
                    tempTwo.text("Temperature during day: " + temperatureTwo + "˚");
                    var humidityTwo = data.daily[1].humidity;
                    humidTwo.text("Humidity: " + humidityTwo + "%");
                    var windSpeedTwo = data.daily[1].wind_speed;
                    windTwo.text("Wind Speed: " + windSpeedTwo + " mph");
                    // three.
                    var iconThree = data.daily[2].weather[0].icon;
                    var iconThreeImage = new Image();
                    iconThreeImage.src = "http://openweathermap.org/img/wn/" + iconThree + ".png";
                    $("#three-icon").html(iconThreeImage);
                    var temperatureThree = data.daily[2].temp.day;
                    tempThree.text("Temperature during day: " + temperatureThree + "˚");
                    var humidityThree = data.daily[2].humidity;
                    humidThree.text("Humidity: " + humidityThree + "%");
                    var windSpeedThree = data.daily[2].wind_speed;
                    windThree.text("Wind Speed: " + windSpeedThree + " mph");
                    // four.
                    var iconFour = data.daily[3].weather[0].icon;
                    var iconFourImage = new Image();
                    iconFourImage.src = "http://openweathermap.org/img/wn/" + iconFour + ".png";
                    $("#four-icon").html(iconFourImage);
                    var temperatureFour = data.daily[3].temp.day;
                    tempFour.text("Temperature during day: " + temperatureFour + "˚");
                    var humidityFour = data.daily[3].humidity;
                    humidFour.text("Humidity: " + humidityFour + "%");
                    var windSpeedFour = data.daily[3].wind_speed;
                    windFour.text("Wind Speed: " + windSpeedFour + " mph");
                    // five.
                    var iconFive = data.daily[4].weather[0].icon;
                    var iconFiveImage = new Image();
                    iconFiveImage.src = "http://openweathermap.org/img/wn/" + iconFive + ".png";
                    $("#five-icon").html(iconFiveImage);
                    var temperatureFive = data.daily[4].temp.day;
                    tempFive.text("Temperature during day: " + temperatureFive + "˚");
                    var humidityFive = data.daily[4].humidity;
                    humidFive.text("Humidity: " + humidityFive + "%");
                    var windSpeedFive = data.daily[4].wind_speed;
                    windFive.text("Wind Speed: " + windSpeedFive + " mph");
                });
        });
};

// stays on page on refresh.
function renderHistory(){
    searchHistory.text("");
    for (var i = 0; i < city.length; i++){
        $(`<p>${city[i]}</p>`).appendTo(searchHistory);
    };
};

london();
renderHistory();

// click on search history cities.
searchHistory.on("click", function (event){
    var cityAgain = event.target.innerHTML;
    // passes cityAgain into searchCity function.
    searchCity(cityAgain)
})

// click search button.
searchBtn.on("click", function (event){
    event.preventDefault();
    var cityVal = cityInput.val();

    // if local storage DOES NOT include what was just searched...
    if(!city.includes(cityVal)){
        // push into array
        city.push(cityVal);

        // limit searches.
        if(city.length == 4){
            city.shift();
            searchHistory.find(":first-child").remove();
        };

        localStorage.setItem("cities", JSON.stringify(city));
        
        // appends the city that was just searched for.
        $(`<p>${cityVal}</p>`).appendTo(searchHistory);

        // passes argument into cityName parameter.
        searchCity(cityVal);
    };
});