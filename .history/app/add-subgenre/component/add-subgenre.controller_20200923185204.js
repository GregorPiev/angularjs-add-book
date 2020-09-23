'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        console.log('addSubgenreController')
        var id = $routeParams.id;
        $scope.title = `Add Subgenre: ${id}`;

        $scope.name = '';
        $scope.isDescriptionRequired = false;


        $scope.sendVal = function (file) {




        }
    });