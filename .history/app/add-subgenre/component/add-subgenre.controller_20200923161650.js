'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        console.log('addSubgenreController')
        var id = $routeParams.id | 10;
        $scope.title = `Add Subgenre: ${id}`;
    });