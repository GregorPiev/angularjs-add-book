'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams) {
        console.log('addBookItemController')
        $scope.title = 'Add Book'
    });