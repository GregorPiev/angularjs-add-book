'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, Service, GetSubGenre, $location) {
        var id = $routeParams.id;
        $scope.$emit("step", 2);

        $scope.genreList = [];
        $scope.choosedId = 0;
        Service.get(function (data) {
            var choosedItem = data['genres'].filter(function (item) {
                return item.id === +id;
            });

            //$scope.genreList[...choosedItem];

            angular.forEach(choosedItem[0]['subgenres'], function (item, index) {
                var genreItem = {
                    id: item.id,
                    name: item.name
                }
                $scope.genreList.push(genreItem);
            })
        });

        GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
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