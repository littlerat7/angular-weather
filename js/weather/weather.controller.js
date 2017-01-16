(function (angular) {
    'use strict';
    
    angular.module('weatherApp').
    controller('weatherDetailsController',['$rootScope','coreWeatherFactory', function weatherDetailsController( $rootScope, coreWeatherFactory){
        let long;
        let lat;
        let cityName;
        let ctrl = this;
        
        $rootScope.$on('selectedCity', function(event, data){
            console.log('event : ', event, ' data :', data);
            console.log('weatherDetailsController : ', data.nm);
            
            ctrl.city = data;
            
            var weather = coreWeatherFactory.getWeather(data.lon, data.lat);
            console.log('weatherDetailsController - Weather : ',weather);
        });
        $rootScope.$destroy('selectedCity');
    }]);

})(window.angular);
