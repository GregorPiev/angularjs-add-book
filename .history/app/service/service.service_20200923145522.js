'use strict'

const { isArray } = require("angular");

angular.module('service')
    .factory('Service', function ($resource) {
        var url = '/data/data.json';
        get: {
            method: "GET",
                isArray: true,
                    cache: false
        }
    })