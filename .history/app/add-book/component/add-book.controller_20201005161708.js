'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams, $location, AddBook) {
        $scope.$emit("step", 9);

        $scope.idGenre = $routeParams.id;
        $scope.idSubGenre = $routeParams.idb;

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
        var idBook = -1;

        $scope.sendVal = function () {
            AddBook.get({ id: $scope.idGenre }).$promise
                .then(function (genreObject) {
                    // console.log('genreObject:', genreObject);

                    var index = genreObject['subgenres'].findIndex(function (item) {
                        if (!item) {
                            index++;
                        } else {
                            return +$scope.idSubGenre === item.id;
                        }
                    })

                    // console.log('Index:', index);
                    // console.log('genreObject by Index', genreObject['subgenres'][index]);


                    if (genreObject['subgenres'][index]['books']) {
                        // console.log('Exist book array');
                        var booksList = genreObject['subgenres'][index]['books'];
                        console.log('books List: ', booksList)

                        var length = booksList.length;
                        var lastItemBook = booksList[length - 1];
                        // console.log('lastItemBook:', lastItemBook)
                        idBook = lastItemBook.id + 1
                    } else {
                        console.log('Not Exist book array')
                        genreObject['subgenres'][index]['books'] = [];
                        idBook = 1;
                    }


                    var newItem = {
                        id: idBook,
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

                    }
                    // console.log('newItem:', newItem);

                    genreObject['subgenres'][index]['books'].push(newItem)

                    // console.log('New genreObject:', genreObject)
                    AddBook.update({ id: $scope.idGenre }, genreObject).$promise
                        .then(function (result) {
                            // console.log('Result:', result)
                            $location.path(`/success`);
                        });

                });
        };



        $scope.moveBack = function () {
            $location.path(`/add-subgenre/${$scope.idGenre}`);
        }
    });