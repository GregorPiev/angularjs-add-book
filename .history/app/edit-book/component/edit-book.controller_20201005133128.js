'use strict'
angular.module('editBook')
    .controller('editBookController', function ($scope, $routeParams, $location, AddBook) {
        $scope.$emit("step", 7);

        $scope.idGenre = $routeParams.id;
        $scope.idSubGenre = $routeParams.idb;
        $scope.idBook = $routeParams.idBook;

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
        $scope.id = '';

        $scope.genreObject = null;
        $scope.index = null;
        $scope.indexBook = null;


        AddBook.get({ id: $scope.idGenre }).$promise
            .then(function (genreObject) {
                $scope.genreObject = genreObject;


                var index = genreObject['subgenres'].findIndex(function (item) {
                    return +$scope.idSubGenre === item.id;
                })
                $scope.index = index;
                $scope.indexBook = genreObject['subgenres'][index]['books'].findIndex(function (item) {
                    return item.id === +$scope.idBook;
                });

                console.log('Book:', genreObject['subgenres'][$scope.index]['books'][$scope.indexBook])

                var bookItem = genreObject['subgenres'][$scope.index]['books'][$scope.indexBook];

                $scope.title = bookItem.title;
                $scope.author = bookItem.author;
                $scope.isbn = bookItem.isbn;
                $scope.publisher = bookItem.publisher;
                $scope.date = new Date(bookItem.date);
                $scope.pages = bookItem.pages;
                $scope.format = bookItem.format;
                $scope.edition = bookItem.edition;
                $scope.language = bookItem.language;
                $scope.description = bookItem.description;
                $scope.id = bookItem.id;

            });



        $scope.sendVal = function () {
            var editedItem = {
                id: $scope.id,
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

            $scope.genreObject['subgenres'][$scope.index]['books'][$scope.indexBook] = editedItem;
            console.log('genreObject:', $scope.genreObject)

            /* AddBook.update({ id: $scope.idGenre }, genreObject).$promise
                .then(function (result) {
                    console.log('Result:', result)
                    $location.path(`/success`);
                }); */



        };



        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });