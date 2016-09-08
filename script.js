	// create the module and name it scotchApp
	var App = angular.module('App', ['ngRoute']);

	// configure our routes
	App.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/step', {
				templateUrl : 'partials/step1.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});

		// html5 history api
		$locationProvider.html5Mode(true);
	});

	// create the controller and inject Angular's $scope
	App.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	App.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am the order step 1.';
		this.submitForm = function(form){
			console.log(form);
		}
	});

	App.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});


