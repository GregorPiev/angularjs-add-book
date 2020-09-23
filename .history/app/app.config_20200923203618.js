'use strict'
angular.module('addBook')
    .config(function (
        $locationProvider,
        $routeProvider
    ) {
        console.info("Config");
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when('/', {
                template: "<genre></genre>"
            })
            .when('/subgenre/:id', {
                template: '<subgenre></subgenre>'
            })
            .when('/add-subgenre/:id', {
                template: '<add-subgenre></add-subgenre>'
            })
            .when('/add-book/:id/:idb', {
                template: '<add-book-item></add-book-item>'
            })
            .when('/success', {
                template: '<success></success>'
            })
            .otherwise({
                template: '<h3>Not Found</h3>'
            })
    });