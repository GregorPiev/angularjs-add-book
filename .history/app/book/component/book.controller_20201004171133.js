'use strict'
angular.module('book')
    .controller('bookController', function ($scope, $routeParams, GetSubGenre, $location) {
        var idGenre = $routeParams.id;
        var idSubGenre = $routeParams.idSubGenre;
        $scope.$emit("step", 2);

        $scope.genreList = [];
        $scope.booksList = [];
        $scope.choosedId = 0;

        GetSubGenre.get({ id: idGenre }).$promise
            .then(function (genreList) {
                console.log('Subgenre:', genreList);

                var index = genreList['subgenres'].findIndex(function (item) {
                    return +$scope.idSubGenre === item.id;
                })
                console.log('Index:', index);
                console.log('genreObject by Index', genreObject['subgenres'][index]);

                if (genreList['subgenres'][index]['books']) {
                    console.log('Exist book array')
                    $scope.booksList = genreObject['subgenres'][index]['books'];
                    console.log('Book Items', $scope.booksList)
                } else {
                    console.log('Not Exist book array')
                    $scope.booksList = [];
                }



                /* angular.forEach(date['subgenres'], function (item, index) {
                    console.log('Subgenre item:', item)
                    console.log('Subgenre index:', index)
                    var genreItem = {
                        id: item.id,
                        name: item.name
                    }
                    $scope.genreList.push(genreItem);
                }) */
            });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            if (+$scope.choosedId === -1) {
                $location.path(`/add-subgenre/${id}`);
            } else {
                $location.path('/');
            }

        }
        $scope.moveBack = function () {
            $location.path('/');
        }
    })