'use strict'
angular.module('service')
    .factory('Service', function ($resource) {
        console.log('Service')
        var url = '/data/data.json';

        return $resource(url, {
            id: '@_id'
        }, {
            query: {
                method: "GET",
                params: { id: '@_id' },
                isArray: false,
                cache: false
            },
            get: {
                method: "GET",
                isArray: false,
                cache: false
            },
            update: {
                method: "PUT"

            }
        })


    })