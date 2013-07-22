'use strict';

/* Controllers */

angular.module ('meterea.controllers', []).


    controller ('OverviewCtrl', ['$scope', 'Meter',
    function (scope, Meter) {
        scope.meters = Meter.query ();
        scope.date = '2013-07-22'; // TODO: set current date
    }]).

    controller ('MeterCtrl', ['$scope', '$routeParams', 'Meter',
    function (scope, routeParams, Meter) {
        scope.meter = Meter.get ({meterId: routeParams.meterId}, function (meter) {
        });
    }]).

    controller ('MainCtrl', ['$scope', '$location',
    function (scope, location) {
        scope.activePath = null;
        scope.$on ('$routeChangeSuccess', function () {
            scope.activePath = location.path ();
            console.log (location.path ());
        });

    }]);

