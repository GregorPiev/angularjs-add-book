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
                $scope.name = $scope.subgenres[$scope.index].title;
                $scope.isDescriptionRequired = $scope.subgenres[$scope.index].isDescriptionRequired;
            });



        $scope.saveVal = function () {

            genreObject['subgenres'].push(newItem);
            console.log('genreObject After Add:', genreObject);
            AddSubgenre.update({ id: $scope.idGenre }, genreObject).$promise
                .then(function (result) {
                    $location.path(`/add-book/${$scope.idGenre}/${$scope.id}`);
                });

        }

        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });