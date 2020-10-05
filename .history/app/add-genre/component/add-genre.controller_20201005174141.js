'use strict'
angular.module('addGenre')
    .controller('addGenreController', function ($scope, $routeParams, $location, GetGenre) {
        $scope.$emit("step", 10);

        $scope.name = null;
        $scope.id = 0;
        $scope.genreObject = null;

        GetGenre.get().$promise
            .then(function (genreObject) {
                $scope.genreObject = genreObject;
                console.log('Get genreObject:', $scope.genreObject);
                var id = 0;
                if ($scope.genreObject.length > 0) {
                    var lastGenre = $scope.genreObject[$scope.genreObject.length - 1];
                    var id = lastGenre.id + 1;
                }
                $scope.id = id;
            });


        $scope.saveVal = function () {
            var newItem = {
                id: $scope.id,
                name: $scope.name
            }

            $scope.genreObject.push(newItem);
            console.log('New genreObject:', $scope.genreObject);
            GetGenre.update({}, $scope.genreObject).$promise
                .then(function (result) {
                    console.log('Result:', result)
                    $location.path(`/success`);
                });

        }

        $scope.moveBack = function () {
            $location.path(`/`);
        }
    });