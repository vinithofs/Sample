angular.module('Inventry', ['ui.router', 'Inventry', 'inventry.home',
                'home.profile', 'home.userget', 'home.product','inventry.product'])
    .config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				onEnter : function () {
				console.log('login page');
            }
        })
        .state('home', {
				url: '/home',
				templateUrl: 'views/Home.html',
				onEnter : function () {
				console.log('home page');
            }
        })
        .state('user', {
	            url: '/user',
	            templateUrl: 'views/usersignup.html',
	 			controller: 'login',
	 			onEnter : function () {
	 			console.log('signup page');
			}
        })
        .state('home.profile', {
	            url: '/profile',
	            templateUrl: 'views/profile.html',
	 			controller: 'userdetails'
        })
        .state('home.userget', {
	            url: '/userget',
	            templateUrl: 'views/user.html',
	 			controller: 'users'
        })
        .state('home.product', {
                url: '/products',
                templateUrl: 'views/products.html',
                controller: 'productviews'
        })
        .state('newproductdetails', {
                url: '/addproducts',
                templateUrl: 'views/addProduct.html',
                controller: 'demoproduct'
        });
		$urlRouterProvider.otherwise('/login');
});
