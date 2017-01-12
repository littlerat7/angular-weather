(function (angular) {
    'use strict';

    angular.module('coreCityModule', []).
    factory('coreModuleFactory', ['$http', '$q', function ($http, $q) {
        return {
            getList: function (url) {
                return $http.get(url);
            },
            getName: function (data) {
                return data.nm;
            },
            getLon: function (data) {
                return data.lon;
            },
            getLat: function (data) {
                return data.lat;
            }


        };

    }]);
})(window.angular);
