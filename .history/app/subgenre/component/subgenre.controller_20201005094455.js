'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.subGenreList = [];
        $scope.choosedId = null;

        GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                $scope.subGenreList = date['subgenres'];
            });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/add-subgenre/${id}`);
            } else {
                $location.path('/');
            }

        }

        $scope.getBooksList = function () {
            $location.path(`/book/${id}/${$scope.choosedId}`);
        }
        $scope.moveBack = function () {
            $location.path('/');
        }
    })