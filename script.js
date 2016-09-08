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
				controller  : 'orderController'
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

	App.controller('orderController', function($scope) {

		$scope.data = {
			  availableOptions: [
		      {id: '1', name: 'Tomato Sauce'},
		      {id: '2', name: 'Mozarella'},
		      {id: '3', name: 'Mushrooms'},
		      {id: '4', name: 'Cheese'},
		      {id: '5', name: 'Bacon'}
	    	],
	    	selectedOption: {id: '1', name: 'Tomato Sauce'},
	    	removeOption: {},
	    	choosen: [],
	    	size: {}
	  };

    $scope.addOption = function(){
    	$scope.data.choosen.push($scope.data.selectedOption);
   		console.log($scope.data.choosen);
    }

    $scope.removeOption = function(idx){
    	var index = $scope.data.choosen[idx];
    	$scope.data.choosen.splice(idx, 1);
    	console.log($scope.data.choosen);
    }

    $scope.addSize = function(size) {
    	$scope.data.size = {size: size }
    }




	});


