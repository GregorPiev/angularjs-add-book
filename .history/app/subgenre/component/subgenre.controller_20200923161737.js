angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams) {
        console.log('subgenreController')
        var id = $routeParams.id | 5;
        $scope.title = `SubGenre ${id}`;
    })