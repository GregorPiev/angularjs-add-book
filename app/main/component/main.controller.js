'use strict'
angular.module('main')
    .controller('mainController', function ($scope) {
        $scope.step = 1;
        $scope.$on('step', function (event, value) {
            $scope.step = value;
        });

    })