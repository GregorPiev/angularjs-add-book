'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams, $location, AddSubgenre) {
        var id = $routeParams.id;
        $scope.$emit("step", 3);

        $scope.name = '';
        $scope.index = 0;
        $scope.id = 0;
        $scope.subgenres = [];
        $scope.isDescriptionRequired = false;

        AddSubgenre.get({ id: id }).$promise
            .then(function (date) {
                console.log('Subgenre:', date);
                angular.forEach(date, function (item, index) {
                    console.log('Add Subgenre item:', item)
                    console.log('Add Subgenre index:', index)
                    $scope.index = index;
                    $scope.id = item.id;
                    $scope.subgenres.push(item);
                    console.log('subgenres:', $scope.subgenres)
                })
            });


        $scope.saveVal = function () {
            var newIndex = $scope.index++;
            var newId = ++$scope.id;
            var newSubgenre = new AddSubgenre({ id: id });
            var newItem = {
                'id': newId,
                'name': $scope.name,
                'isDescriptionRequired': $scope.isDescriptionRequired
            }
            $scope.subgenres.push(newItem)

            console.log($scope.subgenres)
            // newSubgenre.subgenres = $scope.subgenres;

            var savePromise = newSubgenre.$update()

            //.$promise.then(function (result) {
            //console.log('Add Subgenre result:', result)
            //data saved. do something here.
            // $location.path(`/add-book/${id}/1`);
            //});


        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });