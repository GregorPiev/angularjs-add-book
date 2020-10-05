'use strict'
angular.module('editSubgenre')
    .controller('editSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        $scope.idGenre = $routeParams.id;
        $scope.idSubgenre = $routeParams.idg;
        $scope.$emit("step", 8);

        $scope.name = null;
        $scope.index = null;
        $scope.id = 0;
        $scope.subgenres = null;
        $scope.isDescriptionRequired = null;
        $scope.genreObject = null;


        AddSubgenre.get({ id: $scope.idGenre }).$promise
            .then(function (genreObject) {
                console.log('genreObject:', genreObject);
                $scope.genreObject = genreObject;

                $scope.index = $scope.genreObject['subgenres'].findIndex(function (item, index) {
                    if (!item) {
                        index++;
                    } else {
                        return item.id === +$scope.idSubgenre;
                    }
                })
                console.log('Index:', $scope.index)

                $scope.subgenres = $scope.genreObject['subgenres'][$scope.index];

                $scope.id = +$scope.idSubgenre;
                $scope.name = $scope.subgenres[$scope.index].name;
                $scope.isDescriptionRequired = $scope.subgenres[$scope.index].isDescriptionRequired;
            });



        $scope.saveVal = function () {
            $scope.genreObject['subgenres'][$scope.index].name = $scope.name;
            $scope.genreObject['subgenres'][$scope.index].isDescriptionRequired = $scope.isDescriptionRequired;

            AddSubgenre.update({ id: $scope.idGenre }, $scope.genreObject).$promise
                .then(function (result) {
                    console.log('Result:', result)
                    $location.path(`/success`);
                });

        }

        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });