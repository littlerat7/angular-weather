(function (angular) {
    'use strict';
    
    angular.module('weatherApp').
    controller('weatherDetailsController',['$scope','$rootScope','coreWeatherFactory', function weatherDetailsController($scope, $rootScope, coreWeatherFactory){
        let long;
        let lat;
        let cityName;
        
        $rootScope.$on('selectedCity', function(event, data){
            console.log('event : ', event, ' data :', data);
            console.log('weatherDetailsController : ', data.nm);
            
            $scope.city = data;
            
            var weather = coreWeatherFactory.getWeather(data.lon, data.lat);
            console.log('weatherDetailsController - Weather : ',weather)
        });
        $rootScope.$destroy('selectedCity');
    }]);

})(window.angular);
