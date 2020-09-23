'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        console.log('addSubgenreController')
        var id = $routeParams.id;
        $scope.title = `Add Subgenre: ${id}`;
    });