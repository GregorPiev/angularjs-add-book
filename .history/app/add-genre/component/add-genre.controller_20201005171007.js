'use strict'
angular.module('editGenre')
    .controller('editGenreController', function ($scope, $routeParams, $location, EditGenre) {
        $scope.idGenre = $routeParams.id;

        $scope.$emit("step", 11);

        $scope.name = null;
        $scope.index = null;
        $scope.id = 0;
        $scope.genreObject = null;


        EditGenre.get({ id: $scope.idGenre }).$promise
            .then(function (genreObject) {
                console.log('genreObject:', genreObject);
                $scope.genreObject = genreObject;

                console.log('genreObject:', $scope.genreObject)
                $scope.id = $scope.genreObject.id;
                $scope.name = $scope.genreObject.name;
            });



        $scope.saveVal = function () {
            $scope.genreObject.name = $scope.name;

            EditGenre.update({ id: $scope.idGenre }, $scope.genreObject).$promise
                .then(function (result) {
                    console.log('Result:', result)
                    $location.path(`/success`);
                });

        }

        $scope.moveBack = function () {
            $location.path(`/`);
        }
    });