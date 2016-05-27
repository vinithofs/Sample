angular.module('home.order', [])
    .controller('orderproduct', function($scope, $http, $state) {

    $scope.orderdetailstitle = "Buy Product detials";
    $scope.order = {};
    $scope.orderDetails = function orderDetails() {
        var productid = $state.params.productid;
        console.log("orderpage");
        var url = "http://localhost:8080/inventry/productDetails?id=" + productid;
        $http.get(url)
            .then(function (response) {
                $scope.order.images = response.data.productImages;
                $scope.order.productname = response.data.productName;
                $scope.order.brandname = response.data.brand;
                $scope.order.quality = response.data.quality;
                $scope.order.price = response.data.price;
        });
    };
});
