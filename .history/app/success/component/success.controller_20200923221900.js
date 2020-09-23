angular.module('success')
    .controller('successController', function ($scope, $location) {
        console.log('successController');
        $scope.title = 'Book added successfully';

        console.log('success step:', 5)
        $scope.$emit("step", 5);

        $scope.next = function () {
            $location.path('/');
        }

    })