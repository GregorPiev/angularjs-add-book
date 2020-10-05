'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.subGenreList = [];
        $scope.choosedId = null;
        $scope.disabledList = true;
        $scope.disabledAdd = true;
        $scope.disabledEdit = true;

        GetSubGenre.get({ id: id }).$promise
            .then(function (genreObject) {
                console.log('Subgenre:', genreObject);
                if (genreObject['subgenres'].length > 0) {
                    $scope.subGenreList = genreObject['subgenres'];
                    $scope.subGenreList = $scope.subGenreList.filter(function (item) {
                        return item !== null;
                    })
                } else {
                    $scope.subGenreList = [];
                }

            });

        $scope.chooseItem = function (id) {
            $scope.choosedId = id;
            if ($scope.choosedId === -1) {
                $scope.disabledAdd = false;
                $scope.disabledList = true;
                $scope.disabledEdit = true;
            } else if ($scope.choosedId !== -1 || $scope.choosedId !== null) {
                $scope.disabledList = false;
                $scope.disabledAdd = true;
                $scope.disabledEdit = false;
            } else {
                $scope.disabledList = true;
                $scope.disabledAdd = true;
                $scope.disabledEdit = true;
            }
        }
        $scope.moveFroward = function () {
            $location.path(`/add-subgenre/${id}`);
        }

        $scope.editSubgenre = function () {
            $location.path(`/edit-subgenre/${id}/${$scope.choosedId}`);
        }
        $scope.getBooksList = function () {
            $location.path(`/book/${id}/${$scope.choosedId}`);
        }
        $scope.moveBack = function () {
            $location.path('/');
        }
    })