'use strict'
angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams, Service, $location) {
        console.log('subgenreController')
        var id = $routeParams.id;
        $scope.title = `SubGenre ${id}`;


        $scope.genreList = [];
        $scope.choosedId = 0;
        console.log('genreController');

        Service.query(function (data) {
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

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            $location.path(`/subgenre/${$scope.choosedId}`);
        }
        $scope.moveBack = function () {
            $location.path(`/`);
        }
    })