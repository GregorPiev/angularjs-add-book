'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        $scope.idGenre = $routeParams.id;
        $scope.$emit("step", 3);

        $scope.name = '';
        $scope.index = -1;
        $scope.id = 0;
        $scope.subgenres = [];
        $scope.isDescriptionRequired = false;




        $scope.saveVal = function () {

            AddSubgenre.get({ id: $scope.idGenre }).$promise
                .then(function (genreObject) {
                    // console.log('genreObject:', genreObject);
                    if (!genreObject['subgenres']) {
                        $scope.id = 1;
                        genreObject['subgenres'] = []
                    } else {
                        var length = genreObject['subgenres'].length;
                        var lastItem = genreObject['subgenres'][length - 1];
                        // console.log('lastItem:', lastItem);
                        $scope.id = lastItem.id + 1;
                    }

                    var newItem = {
                        'id': $scope.id,
                        'isDescriptionRequired': $scope.isDescriptionRequired,
                        'name': $scope.name

                    }

                    genreObject['subgenres'].push(newItem);
                    console.log('genreObject After Add:', genreObject);
                    AddSubgenre.update({ id: $scope.idGenre }, genreObject).$promise
                        .then(function (result) {
                            $location.path(`/success`);
                        });
                });

        }

        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });