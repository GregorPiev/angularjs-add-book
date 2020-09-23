'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        console.log('addSubgenreController')
        var id = $routeParams.id;
        $scope.title = `Add Subgenre: ${id}`;

        $scope.name = '';
        $scope.isDescriptionRequired = false;


        $scope.sendVal = function (file) {

            console.log("%cName:" + pfname + "\nShort:" + pshort + "\nDescription:" + pdescription + "\nEmail:" + pemail, "color:brown; font-size:14px;");


        }
    });