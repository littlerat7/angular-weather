(function (angular) {
    'use strict';

    angular.module('meteoApp', ['citiesList']).
       controller('weatherDetailsController', ['$scope', 'citiesList', function weatherDetailsController($scope, citiesList) {


        // $scope.cities = citiesList.getCities()
        citiesList.getCities().succcess(function (data) {
            console.log('Data: ',data);
            // console.log(citiesList.getCities());
            $scope.citiesList = $scope.cities[0];

            console.log($scope.citiesList);
        });

    }]);

})(window.angular);
