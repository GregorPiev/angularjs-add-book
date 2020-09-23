'use strict'
angular.module('service')
    .factory('Service', function ($resource) {
        console.log('Service')
        var url = '/data/data.json';

        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                isArray: true,
                cache: false
            },
            get: {
                method: "GET",
                isArray: true,
                cache: false
            }
        })


    })