'use strict'

const { isArray } = require("angular");

angular.module('service')
    .factory('Service', function ($http) {
        var url = '/data/data.json';

        /* return $resource(url, {}, {
            get: {
                method: "GET",
                isArray: true,
                cache: false
            }
        }) */
        getGenres(){
            console.log('getGenres')
            return ['dfgdfgd', 'fgdfgdfg'];
        }

    })