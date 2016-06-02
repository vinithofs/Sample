angular.module('home.userget', [])
    .controller('users', function($scope, $http, $state) {

        $scope.userdetails = {};
        $scope.optionList = ["All","WFA","Approved","Disapproved"];
        $scope.showSelectValue = $scope.optionList[0];
        console.log("tabel page");
        $scope.getUserDetails = function getUserDetails() {
            var url = "http://localhost:8080/inventry/user?status=" + $scope.showSelectValue;
            $http.get(url) .then(function (response) {
                $scope.userdetails.inventry = response.data;
                $state.go('home.userget');
            });
        };

        $scope.ApprovedStatus = function ApprovedStatus(inventry,status) {
        console.log("satus page");
        var url = "http://localhost:8080/inventry/user";
        alert("Are you Sure want to Approve");
        inventry.status = status;
        $http.put(url, inventry)
        .then(function(response) {
            $state.go('home.userget');
        });
    };

        $scope.DisapprovedStatus = function DisapprovedStatus(inventry,status) {
        console.log("satus page");
        var url = "http://localhost:8080/inventry/user";
        alert("Are you Sure want to Disapprove");
        inventry.status = status;
        $http.put(url, inventry)
        .then(function(response) {
            $state.go('home.userget');
        });
    };
});
