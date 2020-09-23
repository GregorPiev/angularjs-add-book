angular.module('genre')
    .controller('genreController', function ($scope, Service) {
        $scope.title = 'Genre';
        $scope.genreList = [];
        console.log('genreController');
        // console.log('Data:', Service.query());

        Service.query(function (data) {
            angular.forEach(data['genres'], function (item, index) {
                // console.log('item:', item)
                var genreItem = {
                    id: item.id,
                    name: item.name
                }
                // console.log('genreItem:', genreItem)
                $scope.genreList.push(genreItem);
            })
        });
    })