'use strict'
angular.module('main')
    .controller('mainController', function ($scope) {
        $scope.step = 1;
        console.log('step:', $scope.step);
        $scope.$on('step', function (event, value) {
            console.log('mainController event step:', value);
            $scope.step = value;
        });

    })