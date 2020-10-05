'use strict'
angular.module('editSubgenre')
    .controller('editSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        $scope.idGenre = $routeParams.id;
        $scope.idSubgenre = $routeParams.idg;
        $scope.$emit("step", 8);

        $scope.name = null;
        $scope.index = null;
        $scope.id = 0;
        $scope.subgenres = [];
        $scope.isDescriptionRequired = null;
        $scope.genreObject = null;


        AddSubgenre.get({ id: $scope.idGenre }).$promise
            .then(function (genreObject) {
                console.log('genreObject:', genreObject);
                $scope.genreObject = genreObject;

                $scope.subgenres = genreObject['subgenres'];

                $scope.index = $scope.subgenres.findIndex(function (item) {
                    return item.id = + $scope.idSubgenre;
                })

                $scope.id = $scope.subgenres[$scope.index].id;
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