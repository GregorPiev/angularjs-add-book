'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.genreList = [];
        $scope.choosedId = 0;

        GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                angular.forEach(date['subgenres'], function (item, index) {
                    console.log('Subgenre item:', item)
                    console.log('Subgenre index:', index)
                    var genreItem = {
                        id: item.id,
                        name: item.name
                    }
                    $scope.genreList.push(genreItem);
                })
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