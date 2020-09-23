'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams) {
        console.log('addBookItemController')
        var id = $routeParams.id;
        var idb = $routeParams.idb;
        $scope.titles = 'Add Book: ${id}/${idb)';

        $scope.title = '';
        $scope.author = '';
        $scope.isbn = '';
        $scope.publisher = '';
        $scope.date = '';
        $scope.pages = '';
        $scope.format = '';
        $scope.edition = '';
        $scope.language = '';
        $scope.description = '';
    });