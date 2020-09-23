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
                template: '<genre></genre>'
            })
            .when('/subgenre/:id', {
                template: 'subgenre'
            })
            .when('/add-subgenre/:id', {
                template: 'add-subgenre'
            })
            .when('/add-book', {
                template: 'add_book'
            })
            .otherwise({
                template: '<h3>Not Found</h3>'
            })
    });