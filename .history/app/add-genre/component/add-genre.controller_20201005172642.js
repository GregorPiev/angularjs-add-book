'use strict'
angular.module('addGenre')
    .controller('addGenreController', function ($scope, $routeParams, $location, GetGenre) {
        $scope.$emit("step", 10);

        $scope.name = null;
        $scope.index = null;
        $scope.id = 0;
        $scope.genreObject = null;

        GetGenre.get().$promise
            .then(function (genreObject) {
                console.log('genreObject:', genreObject);
                $scope.genreObject = genreObject;

                console.log('genreObject:', $scope.genreObject)
                $scope.id = $scope.genreObject.id;
                $scope.name = $scope.genreObject.name;
            });


        $scope.saveVal = function () {


            $scope.genreObject.name = $scope.name;

            /* GetGenre.update({ }, $scope.genreObject).$promise
                .then(function (result) {
                    console.log('Result:', result)
                    $location.path(`/success`);
                }); */

        }

        $scope.moveBack = function () {
            $location.path(`/`);
        }
    });