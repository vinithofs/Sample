angular.module('home.userget', [])
    .controller('users', function($scope, $http, $state) {

        console.log($scope.showSelectValue);
        var url = "http://localhost:8080/inventry/login?status="+$scope.showSelectValue;
        $http.get(url) .then(function (response) {
            $scope.inventry = response.data;
            $state.go('home.userget');
        });
    });

        $scope.updatestatus = function updatestatus() {
        var url = "http://localhost:8080/inventry/user";
        var getid = getCookie(id);
        $http.put(url, {id : getid,
                    status : $scope.status})
        .then(function(response) {
            $state.go('home.userget');
    });
};
