angular.module('genre')
    .controller('genreController', function ($scope, Service, $location) {
        $scope.genreList = [];
        $scope.choosedId = 0;
        $scope.$emit("step", 1);


        Service.get(function (data) {
            angular.forEach(data['genres'], function (item, index) {
                var genreItem = {
                    id: item.id,
                    name: item.name
                }
                $scope.genreList.push(genreItem);
            })
        });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
        }
        $scope.moveFroward = function () {
            $location.path(`/subgenre/${$scope.choosedId}`);
        }
    })