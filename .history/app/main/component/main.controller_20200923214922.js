'use strict'
angular.module('main')
    .controller('mainController', function ($scope) {
        $scope.step = 1;
        console.log('step:', $scope.step);
    })