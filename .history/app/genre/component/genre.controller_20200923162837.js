angular.module('genre')
    .controller('genreController', function ($scope, Service) {
        $scope.title = 'Genre';
        $scope.genreList = [];
        console.log('genreController');
        //console.log('Data:', Service.query());

        Service.query(function (data) {
            angular.forEach(data, function (item) {
                console.log(item)
            })
        });
    })