'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module ('meterea.services', ['ngResource'])
    .value ('version', '0.1')
    .factory ('Meter', function ($resource) {
        return $resource ('data/:meterId.json', {}, {
            query: {method: 'GET', params: {meterId: 'meters'}, isArray: true}
        });
    });
