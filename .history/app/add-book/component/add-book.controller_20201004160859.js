'use strict'
angular.module('addBookItem')
    .controller('addBookItemController', function ($scope, $routeParams, $location, AddBook) {
        $scope.$emit("step", 4);

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
                    console.log('genreObject:', genreObject);
                    /* angular.forEach(genreObject['subgenres'], function (item, index) {
                        console.log('Add Subgenre item:', item)
                        $scope.id = item.id;
                        $scope.index = ++index;
                    }) */

                    var subgenreItem = genreObject['subgenres'].filter(function (item) {
                        console.log('Id subgenre:', item.id);
                        return +$scope.idSubGenre === item.id;
                    })

                    console.log('subgenreItem:', subgenreItem);
                    if (subgenreItem['books']) {
                        console.log('Exist book array')
                        item = subgenreItem['books'][subgenreItem['books'].length - 1].id;
                        idBook
                    } else {
                        console.log('Not Exist book array')
                        subgenreItem['books'] = [];
                        idBook = 0;
                    }
                    subgenreItem['books']


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

                    /* genreObject['subgenres'].push(newItem);
                    console.log('genreObject After Add:', genreObject);
                    AddSubgenre.update({ id: $scope.idGenre }, genreObject).$promise
                        .then(function (result) {
                            console.log('Result:', result)
                            $location.path(`/add-book/${$scope.idGenre}/${$scope.index}`);
                        }); */
                });



            /* $scope.entry = Service.query({ id: id }, function () {
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
                }); */
            // $location.path(`/success`);
        };



        $scope.moveBack = function () {
            $location.path(`/add-subgenre/${id}`);
        }
    });