(function (angular) {
    'use strict';

    angular.module('citiesListModule').
    controller('citiesListController', ['$scope', 'coreModuleFactory', '$rootScope', 'appStatusFactory' ,function citiesListController($scope, coreModuleFactory, $rootScope, appStatusFactory) {
        // Retreive the cities list data
        var ctrl = this;
        ctrl.loaded = appStatusFactory.loaded;
        coreModuleFactory.getList('cities-fr.json').
        success(function (data) {
            ctrl.cities = data;
	    ctrl.loaded = true;
            appStatusFactory.loaded = true;
            // On select item selected
            ctrl.citySelect = function () {

                // Send the selected city on the event `selectedCity`
                $rootScope.$emit('selectedCity', ctrl.selCitiesList);
            };
        });
    }]);
})(window.angular);
