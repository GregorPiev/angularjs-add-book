'use strict'
angular.module('book')
    .controller('bookController', function ($scope, $routeParams, GetSubGenre, $location) {
        var idGenre = $routeParams.id;
        var idSubGenre = $routeParams.idSubGenre;
        $scope.$emit("step", 2);

        $scope.genreList = [];
        $scope.choosedId = 0;

        GetSubGenre.get({ id: idSubGenre }).$promise
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
        $scope.moveBack = function () {
            $location.path('/');
        }
    })