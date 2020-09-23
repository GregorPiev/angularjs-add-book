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

        /* $scope.moveFroward = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/add-subgenre/${id}`);
            } else {
                $location.path('/');
            }

        } */
        $scope.moveBack = function () {
            $location.path('/');
        }
    });