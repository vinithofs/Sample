angular.module('home.product', ['home.order'])
    .controller('productviews', function($scope, $http, $state) {

    $scope.addbutton= true;
    $scope.productviews=true;
    $scope.productdetails = {};
    $scope.productname = ["All","Men's T-Shirt","Wallets","Men's Jeans"];
    $scope.showProductValue = $scope.productname[0];
    console.log("product page");
    $scope.getProductsDetails = function getProductsDetails() {
        $scope.productname.push($scope.showProductValue);
        var url = "http://localhost:8080/inventry/productDetails?product_name=" + $scope.showProductValue;
        $http.get(url) .then(function (response) {
            $scope.productdetails.products = response.data;
        });
    };

    $scope.getProductId = function getProductId(product) {
        console.log("productid page");
        $scope.addbutton= false;
        $scope.productviews=false;
        $state.go('home.order', {productid:product});
    };
});
