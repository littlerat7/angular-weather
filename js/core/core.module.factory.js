(function (angular) {
    'use strict';

// Factory functions to call and retreve all cities data
    angular.module('coreCityModule', []).
    factory('coreModuleFactory', ['$http', '$q', function ($http, $q) {
        return {
            getList: function (url) {
                // Call the data with a GET method
                return $http.get(url);
            },
            getName: function (data) {
                // return the name of the city
                return data.nm;
            },
            getLon: function (data) {
                // Return the longitude of the city
                return data.lon;
            },
            getLat: function (data) {
                //Return the latitude of the city
                return data.lat;
            }


        };

    }]);
})(window.angular);
