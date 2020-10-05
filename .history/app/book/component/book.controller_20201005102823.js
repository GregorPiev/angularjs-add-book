'use strict'
angular.module('book')
    .controller('bookController', function ($scope, $routeParams, GetSubGenre, $location) {
        var idGenre = $routeParams.id;
        var idSubGenre = $routeParams.idSubGenre;
        $scope.$emit("step", 2);

        $scope.genreList = [];
        $scope.booksList = [];
        $scope.choosedId = null;

        $scope.disabledEdit = true;
        $scope.disabledAdd = true;

        GetSubGenre.get({ id: idGenre }).$promise
            .then(function (genreList) {
                console.log('Subgenre:', genreList);

                var index = genreList['subgenres'].findIndex(function (item) {
                    return +idSubGenre === item.id;
                })
                console.log('Index:', index);
                console.log('genreObject by Index', genreList['subgenres'][index]);

                if (genreList['subgenres'][index]['books']) {
                    console.log('Exist book array')
                    $scope.booksList = genreList['subgenres'][index]['books'];
                    console.log('Book Items', $scope.booksList)
                } else {
                    console.log('Not Exist book array')
                    $scope.booksList = [];
                }
            });

        $scope.addBook = function () {
            $location.path(`/add-book/${$scope.idGenre}/${$scope.idSubGenre}`);
        }
        $scope.chooseItem = function (id) {
            $scope.choosedId = id;
            if ($scope.choosedId === -1) {
                $scope.disabledAdd = false;
                $scope.disabledEdit = true;
            } else if ($scope.choosedId !== -1 || $scope.choosedId !== null) {
                $scope.disabledEdit = false;
                $scope.disabledAdd = true;
            } else {
                $scope.disabledEdit = true;
                $scope.disabledAdd = true;
            }
        }
        $scope.editBook = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/edit-book/${$scope.idGenre}/${$scope.idSubGenre}/${$scope.choosedId}`);
            }

        }
        $scope.moveBack = function () {
            $location.path(`/subgenre/${idGenre}`);
        }
    })