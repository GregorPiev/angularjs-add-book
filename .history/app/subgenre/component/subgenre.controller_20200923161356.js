angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams) {
        console.log('subgenreController')
        var id = $routeParams.id;
        $scope.title = `SubGenre ${id}`;
    })