'use strict';

/* Controllers */

angular.module ('meterea.controllers', []).

    controller ('OverviewCtrl', ['$scope', '$filter', 'Meter',
    function (scope, filter, Meter) {
        scope.meters = Meter.query ();
        scope.newMeter = {};
        scope.newMeter.date = filter('date')(new Date(), 'yyyy-MM-dd');

        scope.submitNewMeterForm = function() {
            Meter.save (scope.newMeter, function () {
                scope.showNewMeterForm = false;
                scope.meters = Meter.query ();
            });
        };

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

