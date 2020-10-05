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
            .when('/edit-genre/:id', {
                template: "<edit-genre></edit-genre>"
            })
            .when('/subgenre/:id', {
                template: '<subgenre></subgenre>'
            })
            .when('/add-subgenre/:id', {
                template: '<add-subgenre></add-subgenre>'
            })
            .when('/edit-subgenre/:id/:idg', {
                template: '<edit-subgenre></edit-subgenre>'
            })
            .when('/book/:id/:idSubGenre', {
                template: '<book></book>'
            })
            .when('/add-book/:id/:idb', {
                template: '<add-book-item></add-book-item>'
            })
            .when('/edit-book/:id/:idb/:idBook', {
                template: '<edit-book></edit-book>'
            })
            .when('/success', {
                template: '<success></success>'
            })
            .otherwise({
                template: '<h3>Not Found</h3>'
            })
    });