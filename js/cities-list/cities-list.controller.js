(function (angular) {
    'use strict';

    // exemple
    //     angular.module('myApp').controller("factory",['$scope', 'infoAnimaux', function($scope, infoAnimaux){
    // 	var animaux;
    // 	infoAnimaux.recupData("datas/animaux.json").
    // 	success(function(data){
    // 		animaux = data;
    // 		$scope.pattes = infoAnimaux.recupNbrPattes(animaux);
    // 		$scope.animauxAffiche = animaux;
    // 	});
    // 	$scope.changePatte = function(){
    // 		$scope.animauxAffiche= infoAnimaux.recupAnimauxPattes(animaux, $scope.nbrPatte);
    // 	}
    // }]);

    //fin exemple


    // angular.module('meteoApp', ['listCities']).
    // controller('citiesListController', ['$scope', 'listCities', function citiesListController($scope) {
    //     var cities;
    //     listCities.getList('cities-fr.json').
    //     success(function(data){
    //       cities = data;
    //       $scope.cities = data;
    //     });
    //         // $scope.cities = data;

    //         $scope.selCitiesList = $scope.cities[0];

    //         $scope.$watch('selCitiesList', function () {
    //             console.log('change');
    //             console.log($scope.selCitiesList);
    //             // $scope.$broadcast('citiesChange', $scope.citiesList );
    //             // $scope.$emit('citiesChange', $scope.citiesList );

    //             // Url to get data
    //             var url = "http://api.openweathermap.org/data/2.5/weather?" +
    //                 "APPID=b26dd00efbc7410a76d9b6d4e9272b6c&units=metric";

    //             var currentWeather = '';

    //             $http.get(url + '&lat=' + $scope.selCitiesList.lat + "&lon=" + $scope.selCitiesList.lon).
    //             success(function (data, status, headers, config) {
    //                 // this callback will be called asynchronously
    //                 // when the response is available
    //                 var iconWeather = {
    //                     'thunder': [
    //                     'wi-icon-200',
    //                   	'wi-icon-201',
    //                   	'wi-icon-210',
    //                   	'wi-icon-211',
    //                   	'wi-icon-212',
    //                   	'wi-icon-221',
    //                   	'wi-icon-230',
    //                   	'wi-icon-231',
    //                   	'wi-icon-232'],
    //                     'sun': [
    //                       'wi-icon-800',
    //                       'wi-icon-801'
    //                     ],
    //                     'drizzle': [
    //                       'wi-icon-300',
    //                     	'wi-icon-301',
    //                     	'wi-icon-302',
    //                     	'wi-icon-310',
    //                     	'wi-icon-311',
    //                     	'wi-icon-312',                
    //                     	'wi-icon-313',
    //                     	'wi-icon-314',
    //               	      'wi-icon-321',
    //                     ],
    //                     'hail': [
    //                       'wi-icon-906'
    //                     ],
    //                     'showers': [
    //                       'wi-icon-500',
    //                     	'wi-icon-521',
    //                     	'wi-icon-522',
    //                     	'wi-icon-531'
    //                     ],
    //                     'rainy': [
    //                       'wi-icon-501',
    //                     	'wi-icon-502',
    //                     	'wi-icon-503',
    //                     	'wi-icon-511',
    //                     	'wi-icon-520'
    //                     ],
    //                     'snowy': [
    //                       'wi-icon-600',
    //                     	'wi-icon-601',
    //                     	'wi-icon-611',
    //                     	'wi-icon-612',
    //                     	'wi-icon-615',
    //                     	'wi-icon-616',
    //                     	'wi-icon-620',
    //                     	'wi-icon-621',
    //                     	'wi-icon-622'
    //                     ],
    //                     'frosty': [
    //                       'wi-icon-903'
    //                     ],
    //                     'windy': [
    //                       'wi-icon-905'
    //                     ],
    //                     'windyrain': [
    //                       'wi-icon-504'
    //                     ],
    //                     'WindySnow': [
    //                       'wi-icon-602'
    //                     ],
    //                     'sleet': [
    //                       'wi-icon-611'
    //                     ],
    //                     'mist': [
    //                       'wi-icon-701'
    //                     ],
    //                     'cloud': [
    //                       'wi-icon-802',
    //                     	'wi-icon-803',
    //                     	'wi-icon-804'
    //                     ]
    //                 };

    //                 console.log('data=', data, ' status=', status, 'headers=', headers );
    //                 var temp = data.main.temp;
    //                 var weather = data.weather[0].main;
    //                 var classWeatherIcon=['wi'];

    //                 for (var i = 0; iconWeather[weather][i]; i++) {
    //                   classWeatherIcon.push(iconWeather[weather][i]);
    //                 }
    //                 $scope.cityTemp = temp;
    //                 $scope.cityWeather = classWeatherIcon.join(' ');



    //             }).
    //             error(function (data, status, headers, config) {
    //                 // called asynchronously if an error occurs
    //                 // or server returns response with an error status.
    //             });

    //         });

    //     // });


    // }]);




    angular.module('citiesListModule').
    controller('citiesListController', ['$scope', 'coreModuleFactory', '$rootScope', function citiesListController($scope, coreModuleFactory, $rootScope) {
        // Retreive the cities list data
        var cities;
        coreModuleFactory.getList('cities-fr.json').
        success(function (data) {
            cities = data;
            $scope.cities = data;

            // On select item selected
            $scope.citySelect = function () {
                
                // $rootScope.$broadcast('selectedCity',$scope.selCitiesList );
                $rootScope.$emit('selectedCity', $scope.selCitiesList);

            }

        });



    }]);
})(window.angular);
