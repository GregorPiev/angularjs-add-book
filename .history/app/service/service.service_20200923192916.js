'use strict'
angular.module('service')
    .factory('Service', function ($resource) {
        console.log('Service')
        var url = '/data/data.json';

        return $resource(url, { params }, {
            query: {
                method: "GET",
                params: {},
                isArray: false,
                cache: false
            },
            get: {
                method: "GET",
                isArray: true,
                cache: false
            },
            post: {
                method: "PUT",
                params: { params },
                isArray: false,
                cache: false
            }
        })


    })