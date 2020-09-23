angular.module('success')
    .controller('successController', function ($scope, $location) {
        console.log('successController');
        $scope.title = 'Book added successfully';

        $scope.next = function () {
            $location.path('/');
        }

    })