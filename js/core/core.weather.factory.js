(function (angular) {
    'use strict';

// Factory functions to get all informations of the weather
    angular.module('coreWeatherModule', []).
    factory('coreWeatherFactory', ['$http', '$q', function ($http, $q) {
        return {
            getWeather: function (lon, lat) {
                // Get the current weather
                var url = "http://api.openweathermap.org/data/2.5/weather?" +
                    "APPID=b26dd00efbc7410a76d9b6d4e9272b6c&units=metric";
                url += '&lat=' + lat + "&lon=" + lon;
                return $http.get(url);
                
            },
            getName: function (data) {
                return data.nm;
            },
            getLon: function (data) {
                return data.lon;
            },
            getLat: function (data) {
                return data.lat;
            }


        };

    }]);
})(window.angular);
