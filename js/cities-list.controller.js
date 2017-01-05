(function (angular) {
    'use strict';

    angular.module('meteoApp').
    controller('citiesListController', ['$scope', '$http', 'citiesList', function citiesListController($scope, $http, citiesList) {

        $http.get('cities-fr.json').success(function (data) {
            $scope.cities = data;

            $scope.selCitiesList = $scope.cities[0];

            $scope.$watch('selCitiesList', function () {
                console.log('change');
                console.log($scope.selCitiesList);
                // $scope.$broadcast('citiesChange', $scope.citiesList );
                // $scope.$emit('citiesChange', $scope.citiesList );

                // Url to get data
                var url = "http://api.openweathermap.org/data/2.5/weather?" +
                    "APPID=b26dd00efbc7410a76d9b6d4e9272b6c";

                var currentWeather = '';

                $http.get(url + '&lat=' + $scope.selCitiesList.lat + "&lon=" + $scope.selCitiesList.lon).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    
                    console.log('data=', data, ' status=', status, 'headers=', headers );
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

            });

        });


    }]);


})(window.angular);
