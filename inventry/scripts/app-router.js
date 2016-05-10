angular.module('Inventry', ['ui.router', 'Inventry', 'inventry.home', 'home.profile', 'home.userget'])
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
	 			controller: 'userdetails',
	 			onEnter : function () {
	 			console.log('profile page');
			}
        })
        .state('home.userget', {
	            url: '/userget',
	            templateUrl: 'views/user.html',
	 			controller: 'users',
	 			onEnter : function () {
	 			console.log('user page');
			}
        });
		$urlRouterProvider.otherwise('/login');
});
