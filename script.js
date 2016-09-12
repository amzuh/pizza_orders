
	// configure routes
	App.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the step1 page
			.when('/step', {
				templateUrl : 'partials/step1.html',
				controller  : 'orderController'
			})

			// route for the step2 page
			.when('/step2', {
				templateUrl : 'partials/step2.html',
				controller  : 'orderInfoController'
			})

			.otherwise({redirectTo: 'pages/home.html'})

		// html5 history api
		$locationProvider.html5Mode(true);
	});


	App.controller('mainController', function($scope, $location) {
		var loc = $location.path();
	});

	// 1st step of Ordering 
	App.controller('orderController', ['$scope','orderService', function($scope, orderService) {
		var self = this;
		$scope.orderService = orderService.getOrder();

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
    	this.orderService.addOption($scope.data.selectedOption);
    }


    $scope.removeOption = function(idx){
    	this.orderService.removeOption(idx);
    }

    $scope.addSize = function(size) {
    	this.orderService.addSize(size);
    }

    $scope.getSize = function() {
    	switch($scope.orderService.order.size){
    		case 20:
    			var myEl = angular.element(document.querySelector('#rounded20'));
    			myEl.addClass('active');
    			break;
    		case 30:
    			var myEl = angular.element(document.querySelector('#rounded30'));
    			myEl.addClass('active');
    			break;
    		case 40:
    			var myEl = angular.element(document.querySelector('#rounded40'));
    			myEl.addClass('active');
    			break;
    		default:
    		  var myEl = angular.element(document.querySelector('#rounded30'));
    			myEl.addClass('active');
    	}	
    };

	}]);

	App.controller('orderInfoController', function($scope) {
		console.log("controller ready");
	});


