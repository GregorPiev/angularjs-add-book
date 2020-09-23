'use strict'
angular.module('addBook')
    .config(function (
        $locationProvider,
        $routeProvider
    ) {
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when('/', {
                template: 'genre'
            })
            .when('/subgenre/:id', {
                template: 'subgenre'
            })
            .when('/add-subgenre', {
                template: 'add-subgenre'
            })
            .when('add_book', {
                template: 'add_book'
            })
    })
    });