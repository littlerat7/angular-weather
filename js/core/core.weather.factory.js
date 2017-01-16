(function(angular) {
    'use strict';

    // Factory functions to get all informations of the weather
    angular.module('coreWeatherModule', []).
    factory('coreWeatherFactory', ['$http', '$q', function($http, $q) {
        return {
            getCurrentWeather: function(lon, lat) {
                // Get the current weather
                var url = "http://api.openweathermap.org/data/2.5/weather?" +
                    "APPID=b26dd00efbc7410a76d9b6d4e9272b6c&units=metric";
                url += '&lat=' + lat + "&lon=" + lon;
                return $http.get(url);

            },
            getName: function(data) {
                return data.nm;
            },
            getLon: function(data) {
                return data.lon;
            },
            getLat: function(data) {
                return data.lat;
            },
            weatherToIcon: function(weather) {
                // Convert weather description
                // To lower case
                var weather = weather.toLowerCase();
                var weatherIcon = 'wi ';

                // Get the icon linked to the weather
                switch (weather) {
                    case "clouds":
                        weatherIcon += 'wi-cloud';
                        break;
                    case "rain":
                        weatherIcon += 'wi-rain';
                        break;
                    case "clear":
                        weatherIcon += 'wi-day-sunny';
                        break;
                    case "drizzle":
                        weatherIcon += 'wi-hail';
                        break;
                    case "mist":
                        weatherIcon += 'wi-fog';
                        break;
                        case "snow":
                            weatherIcon += 'wi-snow';
                            break;
                    default:
                        console.log(weather);
                        weatherIcon += ('wi-' + weather);
                }
                return weatherIcon;
            },
            getnextWeather: function(lon, lat) {
                // Get the Forecast weather
                var url = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
                    "APPID=b26dd00efbc7410a76d9b6d4e9272b6c&units=metric";
                url += '&lat=' + lat + "&lon=" + lon;
                return $http.get(url);
            },
            getDetailWeather: function(response) {
                var dayOfWeek = ["", "Lun", "Mard", "Merc", "Jeudi", "Vend", "Sam", "Dim"];
                var date = new Date();
                var today = date.getDay();
                var nextWeather = [];
                var myObj = this;
                for (var i = 0; i < 3; i++) {
                    if (today > 7) {
                        today = 1;
                    } else {
                        today ++;
                    }

                    var minTemp = Math.floor(response.data.list[i].temp.min);
                    var maxTemp = Math.floor(response.data.list[i].temp.max);
                    var day = dayOfWeek[today];
                    var weather = myObj.weatherToIcon(response.data.list[i].weather[0].main);

                    nextWeather.push({
                        "day": day,
                        "weather": weather,
                        "maxTemp": maxTemp,
                        "minTemp": minTemp,
                        "unit": "wi wi-celsius" // °C unit
                    });
                };
                return nextWeather;

            }
        };

    }]);
})(window.angular);
