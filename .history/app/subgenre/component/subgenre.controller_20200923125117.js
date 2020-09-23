angular.module('subgenre')
    .controller('subgenreController', function ($scope, $routeParams) {
        var id = $routeParams.id;
        $scope.title = `SubGenre ${id}`;
    })