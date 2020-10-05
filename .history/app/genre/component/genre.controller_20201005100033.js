angular.module('genre')
    .controller('genreController', function ($scope, GetGenre, $location) {
        $scope.genreList = [];
        $scope.choosedId = null;
        $scope.$emit("step", 1);
        $scope.disabledList = true;
        $scope.disabledAdd = true;

        GetGenre.get().$promise
            .then(function (data) {
                angular.forEach(data, function (item, index) {
                    // console.log('Genre item:', item)
                    // console.log('Genre index:', index)
                    var genreItem = {
                        id: index,
                        name: item.name
                    }
                    $scope.genreList.push(genreItem);
                })
            });

        $scope.chooseGenre = function (id) {
            $scope.choosedId = id;
            if ($scope.choosedId === -1) {
                $scope.disabledAdd = false;
                $scope.disabledList = true;
            } else if ($scope.choosedId !== -1 || $scope.choosedId !== null) {
                $scope.disabledList = false;
                $scope.disabledAdd = true;
            } else {
                $scope.disabledList = true;
                $scope.disabledAdd = true;
            }
        }
        $scope.moveFroward = function () {
            $location.path(`/subgenre/${$scope.choosedId}`);
        }

        $scope.addGenre = function () { }
    })