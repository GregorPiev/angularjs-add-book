'use strict'
angular.module('addSubgenre')
    .controller('addSubgenreController', function ($scope, $routeParams) {
        console.log('addSubgenreController')
        var id = $routeParams.id;
        $scope.title = `Add Subgenre: ${id}`;
        let client = { fname: '', short: '', description: '', email: '' };
        let pfname = $scope.client.fname;
        let pshort = $scope.client.short;
        let pdescription = $scope.client.description;
        let pemail = $scope.client.email;

        $scope.sendVal = function (file) {

            console.log("%cName:" + pfname + "\nShort:" + pshort + "\nDescription:" + pdescription + "\nEmail:" + pemail, "color:brown; font-size:14px;");


        }
    });