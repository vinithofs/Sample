angular.module('inventry.product', [])
    .controller('demoproduct', function($scope, $http, $state) {

    $scope.getproduct = {};
    $scope.billname = "Add new products";
    $scope.addProductDetails = function addProductDetails() {
        var url = "http://localhost:8080/inventry/productDetails";
        http.post(url, { productName :$scope.getproduct.productname,
                        brand : $scope.getproduct.brandname,
                        quality : $scope.getproduct.quality,
                        price :$scope.getproduct.price,
                        productImages:$scope.getproduct.images,
        }).then(function (response) {
            $scope.postivemessage =
            "Product details successfully added";
            $state.go('newproductdetails');
            },function(error) {
                $scope.errormessage = "Enter your valid details";
        });
    };
});
