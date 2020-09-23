angular.module('success')
    .controller('successController', function ($scope, $location) {
        $scope.title = 'Book added successfully';
        $scope.$emit("step", 5);

        $scope.next = function () {
            $location.path('/');
        }

    })