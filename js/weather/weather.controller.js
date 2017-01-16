(function(angular) {
    'use strict';

    angular.module('weatherApp').
    controller('weatherDetailsController', ['$rootScope', 'coreWeatherFactory', function weatherDetailsController($rootScope, coreWeatherFactory) {
        // Store the current context linked to `this`
        let ctrl = this;

        // get the city selected on the selector
        $rootScope.$on('selectedCity', function(event, data) {
            // Get the selected city name send on the event `selectedCity`
            ctrl.city = data;
            var lat = data.lat;
            var long = data.lon;
            //
            coreWeatherFactory.getCurrentWeather(long, lat).
            success(function(data) {
                // Get the current temperature
                ctrl.temp = Math.floor(data.main.temp)
                ctrl.unit = 'wi wi-celsius'; // Write °C
                // Get the current weather
                ctrl.weather = coreWeatherFactory.weatherToIcon(data.weather[0].main);

                // Get the next Weather
                coreWeatherFactory.getnextWeather(long, lat).
                then(function(data){
                    ctrl.nextWeather = coreWeatherFactory.getDetailWeather(data);                    
                });
            });
        });
        // Stop the propagation of the event
        $rootScope.$destroy('selectedCity');
    }]);

})(window.angular);
