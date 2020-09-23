angular.module('genre')
    .controller('genreController', function ($scope, service, $location) {
        $scope.title = 'Genre';

        service.get(function (data) {
            console.log(data)
        })

    })