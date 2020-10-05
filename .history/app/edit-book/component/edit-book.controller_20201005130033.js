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
                    return bk.id === +$scope.idBook;
                })
                console.log('book:', book);
                var [bookItem] = [...book];

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