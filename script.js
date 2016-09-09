
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
			.when('/step2', {
				templateUrl : 'partials/step2.html',
				controller  : 'orderController2'
			});

		// html5 history api
		$locationProvider.html5Mode(true);
	});

	// create the controller and inject Angular's $scope
	App.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	// 1st step of Ordering 
	App.controller('orderController', ['$scope','orderService', function($scope, orderService) {
		console.log("in controller");
		var self = this;
		var orderService = orderService.getOrder();

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
	    	size: {},
	    	cheeseRand: {}
	  };

    $scope.addOption = function(){
    	orderService.addOption($scope.data.selectedOption);
    	console.log(orderService);
    }


    $scope.removeOption = function(idx){
    	var index = $scope.data.choosen[idx];
    	$scope.data.choosen.splice(idx, 1);
    }

    $scope.addSize = function(size) {
    	$scope.data.size = {size: size }
    }


	}]);

	App.controller('orderController2', function($scope) {
		console.log("here");
	});

