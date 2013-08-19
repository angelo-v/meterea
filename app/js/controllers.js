'use strict';

/* Controllers */

angular.module ('meterea.controllers', []).

    controller ('OverviewCtrl', ['$scope', '$filter', 'Meter',
    function (scope, filter, Meter) {
        scope.meters = Meter.query ();
        scope.newMeter = {};

        var today = filter ('date') (new Date (), 'yyyy-MM-dd');
        scope.newMeter.date = today;


        scope.submitNewMeterForm = function () {
            Meter.save (scope.newMeter, function () {
                scope.showNewMeterForm = false;
                scope.meters = Meter.query ();
            });
        };

        scope.prepareNewReadingForMeter = function (meter) {
            scope.currentMeter = meter;
            scope.newReading = {};
            scope.newReading.date = today;
        }

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

