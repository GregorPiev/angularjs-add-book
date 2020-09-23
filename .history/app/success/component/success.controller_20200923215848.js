angular.module('success')
    .controller('successController', function ($scope, $location) {
        console.log('successController');
        $scope.title = 'Book added successfully';

        $scope.$parent.step = 5;
        console.log('success step:', $scope.$parent.step)

        $scope.next = function () {
            $location.path('/');
        }

    })