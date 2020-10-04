'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        var id = $routeParams.id;
        $scope.$emit("step", 3);

        $scope.name = '';
        $scope.isDescriptionRequired = false;

        AddSubgenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date['subgenre']);
                angular.forEach(date, function (item, index) {
                    console.log('Add Subgenre item:', item)
                    console.log('Add Subgenre index:', index)
                })
            });


        $scope.saveVal = function () {
            var newSubgenre = new AddSubgenre({ id: id });
            newSubgenre.data = {
                name: $scope.name,
                isDescriptionRequired: $scope.isDescriptionRequired
            };
            newSubgenre.$save().$promise.then(function (result) {
                console.log('Add Subgenre result:', result)
                //data saved. do something here.
                // $location.path(`/add-book/${id}/1`);
            });


        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });