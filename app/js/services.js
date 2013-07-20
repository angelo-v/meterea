'use strict';

/* Services */

angular.module ('meterea.services', ['ngResource'])
    .value ('version', '0.1')
    .factory ('Meter', function ($resource) {
        return $resource ('meters/:meterId', {}, {
            query: {method: 'GET', isArray: true}
        });
    });
