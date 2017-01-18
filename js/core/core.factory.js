(function(angular) {
    'use strict';
    angular.module('appStatusModule',[]).
         factory("appStatusFactory", [ function(){
        return {
          "loaded": false,
          "citySelected": false
        }
    }]);


})(window.angular);
