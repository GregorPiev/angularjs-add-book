'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, Service) {
        console.log('addSubgenreController')
        var id = $routeParams.id;

        $scope.name = '';
        $scope.isDescriptionRequired = false;


        $scope.sendVal = function () {
            console.log('Name:', $scope.name)
            console.log('isDescriptionRequired:', $scope.isDescriptionRequired);
            $scope.entry = Service.query({ id: id }, function () {
                // $scope.entry is fetched from server and is an instance of Entry
                $scope.entry.data = {
                    name: $scope.name,
                    isDescriptionRequired: $scope.isDescriptionRequired
                };
                $scope.entry.$update(function () {
                    //updated in the backend
                });
                $location.path(`/add-book/${id}/1`);
            });

        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });