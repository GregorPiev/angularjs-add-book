'use strict'
angular.module('editSubgenre')
    .controller('editSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
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
                    console.log('genreObject:', genreObject);
                    angular.forEach(genreObject['subgenres'], function (item, index) {
                        console.log('Add Subgenre item:', item)
                        $scope.id = item.id;
                        $scope.index = ++index;
                    })

                    var newItem = {
                        'id': ++$scope.id,
                        'isDescriptionRequired': $scope.isDescriptionRequired,
                        'name': $scope.name

                    }

                    genreObject['subgenres'].push(newItem);
                    console.log('genreObject After Add:', genreObject);
                    AddSubgenre.update({ id: $scope.idGenre }, genreObject).$promise
                        .then(function (result) {
                            $location.path(`/add-book/${$scope.idGenre}/${$scope.id}`);
                        });
                });

        }

        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });