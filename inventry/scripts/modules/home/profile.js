angular.module('home.profile', [])
    .controller('userdetails', function($scope, $http, $state) {

        $scope.profilename = "User Profile Details";

        function getCookie(cname) {
        console.log("hello");
            var name = cname + "=";
            var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
    }
        $scope.userprofilepage = function userprofilepage() {
        console.log("userprofile");
            var id = getCookie("id");
            var url = "http://localhost:8080/inventry/login?id="+id;
            $http.get(url)
                .then(function (response) {
                    $scope.name = response.data.name;
                    $scope.username = response.data.userName;
                    $scope.mailid = response.data.mailId;
                    $scope.password = response.data.password;
                    $scope.date = response.data.dateOfBirth;
                    $scope.address = response.data.address;
                    $scope.phonenumber = response.data.phonenumber;
                }, function(error) {
                    $scope.errormessage = "Enter your valid details";
            });
    };

        $scope.updatedetials = function updatedetials() {
        console.log("update page");
            var getId = getCookie("id");
            var url = "http://localhost:8080/inventry/login";
            $http.put(url , {id: getId,
                    password : $scope.password,
                    phonenumber : $scope.phonenumber})
                .then(function (response) {
                    $scope.postivemessage = "Update your detials successfully";
                }, function(error) {
                    $scope.errormessage = "Enter your valid details";
                });
        };
});
