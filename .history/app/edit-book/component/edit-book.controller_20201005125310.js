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


        AddBook.get({ id: $scope.idGenre }).$promise
            .then(function (genreObject) {
                console.log('genreObject:', genreObject);

                var index = genreObject['subgenres'].findIndex(function (item) {
                    return +$scope.idSubGenre === item.id;
                })
                // console.log('Index:', index);
                // console.log('genreObject by Index', genreObject['subgenres'][index]);
                var booksList = genreObject['subgenres'][index]['books'];
                console.log('booksList:', booksList)
                var book = booksList.filter(function (bk, index) {
                    return bk[index].id === $scope.idBook;
                })
                console.log('book:', book);

                $scope.title = book.title;
                $scope.author = book.author;
                $scope.isbn = book.isbn;
                $scope.publisher = book.publisher;
                $scope.date = book.date;
                $scope.pages = book.pages;
                $scope.format = book.format;
                $scope.edition = book.edition;
                $scope.language = book.language;
                $scope.description = book.description;
                $scope.id = book.id;

            });



        $scope.sendVal = function () {
            AddBook.get({ id: $scope.idGenre }).$promise
                .then(function (genreObject) {
                    console.log('genreObject:', genreObject);

                    var index = genreObject['subgenres'].findIndex(function (item) {
                        return +$scope.idSubGenre === item.id;
                    })

                    console.log('Index:', index);
                    console.log('genreObject by Index', genreObject['subgenres'][index]);


                    if (genreObject['subgenres'][index]['books']) {
                        console.log('Exist book array')
                        item = genreObject['subgenres'][index]['books'][subgenreItem['books'].length - 1].id;
                        console.log('Book Item', item)
                        idBook = ++item.id
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
                    console.log('newItem:', newItem);

                    genreObject['subgenres'][index]['books'].push(newItem)

                    console.log('New genreObject:', genreObject)
                    AddBook.update({ id: $scope.idGenre }, genreObject).$promise
                        .then(function (result) {
                            console.log('Result:', result)
                            $location.path(`/success`);
                        });

                });
        };



        $scope.moveBack = function () {
            $location.path(`/subgenre/${$scope.idGenre}`);
        }
    });