(function (angular) {
    'use strict';

    angular.module('meteoApp', []).
    service("citiesList", ['$http', function citiesList($http) {
        this.getCities = function () {
            var cities;
            $http.get('cities-fr.json').success(function (data) {
                cities = data;
                 console.log(cities[0]);
                return cities;
                // $scope.citiesList = $scope.cities[0];
            });
           
        };
    }]);
})(window.angular);
