angular.module('inventry.home', [])
    .controller('login', function($scope, $http, $state,$window) {

        $scope.pagename = "User Signup ";
        $scope.userSignUp = {};
        $scope.signinpage = function signinpage() {
        var url = "http://localhost:8080/inventry/userDetail";
        $http.post(url, {name: $scope.userSignUp.name,
            userName: $scope.userSignUp.username,
            mailId: $scope.userSignUp.mailid,
            password: $scope.userSignUp.password,
            dateOfBirth: $scope.userSignUp.date,
            address: $scope.userSignUp.address,
            phonenumber:$scope.userSignUp.phno})
        .then(function (response) {
            $window.location.reload();
            $scope.postivemessage =
            "User successfully added, but you should wait for Admin approval";
        }, function(error) {
            $scope.errormessage = "Enter your valid details";

        });
    };
});
