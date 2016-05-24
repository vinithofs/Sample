angular.module('home.product', [])
    .controller('productviews', function($scope, $http, $state) {

        $scope.productdetails = {};
        $scope.productname = ["All","Men's T-Shirt","Wallets","Men's Jeans"];
        $scope.showProductValue = $scope.productname[0];
        console.log("product page");
        $scope.getProductsDetails = function getProductsDetails() {
            var url = "http://localhost:8080/inventry/user?product_name=" + $scope.showProductValue;
            $http.get(url) .then(function (response) {
                $scope.productdetails.products = response.data;
                $state.go('home.product');
            });
        };
    });
