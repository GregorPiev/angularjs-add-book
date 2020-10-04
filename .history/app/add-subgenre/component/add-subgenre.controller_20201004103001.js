'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, Service, GetSubGenre) {
        var id = $routeParams.id;
        $scope.$emit("step", 3);

        $scope.name = '';
        $scope.isDescriptionRequired = false;

        $scope.entry = GetSubGenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                angular.forEach(date['subgenres'], function (item, index) {
                    console.log('Add Subgenre item:', item)
                    console.log('Add Subgenre index:', index)
                })
            });


        $scope.saveVal = function () {
            $scope.entry.data = {
                name: $scope.name,
                isDescriptionRequired: $scope.isDescriptionRequired
            };

            $scope.entry.$save(function (result) {
                console.log('Result save:', result);
            });

            /* $scope.entry = Service.query({ id: id }, function () {
                $scope.entry.data = {
                    name: $scope.name,
                    isDescriptionRequired: $scope.isDescriptionRequired
                };
                $scope.entry.$update(function () {
                    //updated in the backend
                });
                $location.path(`/add-book/${id}/1`);
            }); */



        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });