'use strict';


// Declare app level module which depends on filters, and services
angular.module ('meterea', ['meterea.filters', 'meterea.services', 'meterea.directives', 'meterea.controllers']).
    config (['$routeProvider', function ($routeProvider) {
    $routeProvider.when ('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
        when ('/meters', {templateUrl: 'partials/partial1.html', controller: 'OverviewCtrl'}).
        when ('/meters/:meterId', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
        otherwise ({redirectTo: '/meters'});
}]);
