'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams) {
        console.log('addBookItemController')
        var id = $routeParams.id;
        var idb = $routeParams.idb;
        $scope.titles = 'Add Book: ${id}/${idb)';

        $scope.title = '';
        $scope.author = '';
        $scope.isbn = '';
        $scope.publisher = '';
        $scope.date = '';
        $scope.pages = '';
        $scope.format = '';
        $scope.edition = '';
        $scope.language = '';
        $scope.description = '';

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

        /* $scope.moveFroward = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/add-subgenre/${id}`);
            } else {
                $location.path('/');
            }

        } */
        $scope.moveBack = function () {
            $location.path(`/subgenre/${id}`);
        }
    });