'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams, $location, Service) {
        $scope.$emit("step", 4);

        var id = $routeParams.id;
        var idb = $routeParams.idb;

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
            $scope.entry = Service.query({ id: id }, function () {
                $scope.entry.data = {
                    title: $scope.title,
                    author: $scope.author,
                    isbn: $scope.isbn,
                    publisher: $scope.publisher,
                    date: $scope.date,
                    pages: $scope.pages,
                    format: $scope.format,
                    edition: $scope.edition,
                    language: $scope.language,
                    description: $scope.description
                };
                $scope.entry.$update(function () {
                    //updated in the backend
                });
                $location.path(`/success`);
            });

        }

        $scope.moveBack = function () {
            $location.path(`/add-subgenre/${id}`);
        }
    });