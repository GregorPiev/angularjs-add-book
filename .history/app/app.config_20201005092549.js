'use strict'
angular.module('addBook')
    .config(function (
        $locationProvider,
        $routeProvider
    ) {
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
            .when('/book/:id/:idSubGenre', {
                template: '<book></book>'
            })
            .when('/add-book/:id/:idb', {
                template: '<add-book-item></add-book-item>'
            })
            .when('/success', {
                template: '<success></success>'
            })
            .when('', {
                template: '<genre></genre>'
            })
            .otherwise({
                template: '<h3>Not Found</h3>'
            })
    });