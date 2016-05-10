angular.module('inventry.home', [])
    .controller('login', function($scope, $http, $state, $window) {

        $scope.pagename = "User Signup ";
        $scope.signinpage = function signinpage() {
        var url = "http://localhost:8080/inventry/user";
        $http.post(url, {name: $scope.name,
            userName: $scope.username,
            mailId: $scope.mailid,
            password: $scope.password,
            dateOfBirth: $scope.date,
            address: $scope.address,
            phonenumber:$scope.phno})
        .then(function (response) {
            $window.location.reload();
            $scope.positivemessage =
            "User successfully added, but you should wait for Admin approval";
        }, function(error) {
            $window.location.reload();
            $scope.errormessage = "Enter your valid details";

        });
    };
});
