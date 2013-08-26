'use strict';

/* Services */

angular.module ('meterea.services', ['ngResource'])
    .value ('version', '0.1')
    .factory ('Meter', function ($resource) {
        return $resource ('meters/:meterId', {meterId: '@id'}, {
            query: {method: 'GET', isArray: true}
        });
    })
    .factory ('Reading', function ($resource) {
        return $resource ('meters/:meterId/readings', {meterId: '@meterId'}, {
            query: {method: 'GET', isArray: true}
        });
    })
;
