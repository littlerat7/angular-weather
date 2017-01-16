(function (angular) {
    'use strict';

    angular.module('citiesListModule').
    controller('citiesListController', ['$scope', 'coreModuleFactory', '$rootScope', function citiesListController($scope, coreModuleFactory, $rootScope) {
        // Retreive the cities list data
        var ctrl = this;
        coreModuleFactory.getList('cities-fr.json').
        success(function (data) {
            ctrl.cities = data;
            // On select item selected
            ctrl.citySelect = function () {

                // Send the selected city on the event `selectedCity`
                $rootScope.$emit('selectedCity', ctrl.selCitiesList);
            };
        });
    }]);
})(window.angular);
