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
                template: 'genre erterter etertert'
            })
            .when('/subgenre/:id', {
                template: '<subgenre></subgenre>'
            })
            .when('/add-subgenre/:id', {
                template: '<add-subgenre></add-subgenre>'
            })
            .when('/add-book', {
                template: '<add-book></add-book>'
            })
            .otherwise({
                template: '<h3>Not Found</h3>'
            })
    });