angular.module('Inventry')
    .controller('login-controller', function($http, $scope, $state) {

        $scope.greeting = "Log in ";
        $scope.login = function login() {
            var url = "http://localhost:8080/inventry/login";
            $http.post (url, {userName:$scope.username,
                             password:$scope.password}).
            then(function (response) {
                    document.cookie = "id="+response.data.id;
                    $state.go('home');
                },function(error) {
                    $scope.error = "Invalid username or password";
            });
        };
});
