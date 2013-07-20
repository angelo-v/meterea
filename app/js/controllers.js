'use strict';

/* Controllers */

angular.module ('meterea.controllers', []).
    controller ('OverviewCtrl', ['$scope', 'Meter', function (scope, Meter) {

    scope.meters = Meter.query();

}])
    .controller ('MyCtrl2', ['$scope', function (scope) {
}])
    .controller ('MainCtrl', ['$scope', '$location', function (scope, location) {


    scope.activePath = null;
    scope.$on ('$routeChangeSuccess', function () {
        scope.activePath = location.path ();
        console.log (location.path ());
    });

}]);

