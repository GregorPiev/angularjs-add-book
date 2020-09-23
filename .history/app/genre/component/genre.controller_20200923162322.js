angular.module('genre')
    .controller('genreController', function ($scope, Service) {
        $scope.title = 'Genre fgdfgdfgdf';
        console.log('genreController');
        console.log('Data:', Service.query());
    })