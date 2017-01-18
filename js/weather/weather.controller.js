(function(angular) {
    'use strict';

    angular.module('weatherApp').
    controller('weatherDetailsController', ['$rootScope', 'coreWeatherFactory', 'appStatusFactory',function weatherDetailsController($rootScope, coreWeatherFactory, appStatusFactory ) {
        // Store the current context linked to `this`
        let ctrl = this;
        ctrl.citySelected= appStatusFactory.citySelected;	

        // get the city selected on the selector
        $rootScope.$on('selectedCity', function(event, data) {
            // Get the selected city name send on the event `selectedCity`
            ctrl.citySelected = true;	
            appStatusFactory.citySelected = true;	
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
