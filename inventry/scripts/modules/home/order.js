angular.module('home.order', [])
    .controller('orderproduct', function($scope, $http, $state) {

    $scope.orderdetailstitle = "Buy Product detials";
    $scope.cartpagename= "Your Shopping Cart";
    $scope.order = {};
    $scope.order.prouductquantity = 1;
    $scope.productpage= true;
    $scope.cartPage = false;
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
                $scope.order.quantity = response.data.quantity;
                $scope.order.totalquantity = response.data.totalQuantity;
        });
    };

    $scope.cartProductDetails = function cartProductDetails() {
        $scope.cartPage = true;
        $scope.productpage = false;
        var productid = $state.params.productid;
        console.log("product item");
        var url = "http://localhost:8080/inventry/productDetails?id=" + productid;
        $http.get(url)
            .then(function (response) {
            $scope.order.name = response.data.productName;
            $scope.order.productprice = response.data.price;
        });
    };

    $scope.updateQuantity = function updateQuantity() {
        $scope.cartPage = true;
        var url = "http://localhost:8080/inventry/productDetails";
        $http.put(url,{
            productid : $state.params.productid,
            quantity : $scope.order.prouductquantity,
            totalQuantity: $scope.order.totalquantity})
        .then(function (response) {
                alert("Your Prouducts delivery within 2 days");
                $state.go('home.product');
        }, function(error) {
            $scope.errormessage = "Please give quantity between 1 to 5";
        });
    };
});
