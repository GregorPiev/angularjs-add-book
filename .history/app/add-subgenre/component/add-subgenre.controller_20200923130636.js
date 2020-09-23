'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        var id = $routeParams.id;
        $scope.title = `Add Subgenre: ${id}`;
    });