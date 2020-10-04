angular.module('genre')
    .controller('genreController', function ($scope, GetGenre, $location) {
        $scope.genreList = [];
        $scope.choosedId = 0;
        $scope.$emit("step", 1);

        GetGenre.get().$promise
            .then(function (data) {
                console.log(data)
                angular.forEach(data, function (item, index) {
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