angular.module('home.userget', [])
    .controller('users', function($scope, $http, $state) {

        $scope.optionList = ["All","WFA","Approved","Disapproved"];
        $scope.showSelectValue = $scope.optionList[0];
        console.log("tabel page");
        $scope.getUserDetails = function getUserDetails() {
            var url = "http://localhost:8080/inventry/login?status=" + $scope.showSelectValue;
            $http.get(url) .then(function (response) {
                $scope.inventry = response.data;
                $state.go('home.userget');
            });
        };

        $scope.updatestatus = function updatestatus() {
        console.log("satus page");
        var url = "http://localhost:8080/inventry/user";
        var getid = getCookie("id");
        $http.put(url, {id : getid,
                    status : $scope.status})
        .then(function(response) {
             alert("are you sure upadte to approve");
            $state.go('home.userget');
        });
    };
});
