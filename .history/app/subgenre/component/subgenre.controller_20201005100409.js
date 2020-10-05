'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.subGenreList = [];
        $scope.choosedId = null;
        $scope.disabledList = true;
        $scope.disabledAdd = true;

        GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                $scope.subGenreList = date['subgenres'];
            });

        $scope.chooseItem = function (id) {
            $scope.choosedId = id;
            if ($scope.choosedId === -1) {
                $scope.disabledAdd = false;
                $scope.disabledList = true;
            } else if ($scope.choosedId !== -1 || $scope.choosedId !== null) {
                $scope.disabledList = false;
                $scope.disabledAdd = true;
            } else {
                $scope.disabledList = true;
                $scope.disabledAdd = true;
            }
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