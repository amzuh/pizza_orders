 App.factory('orderService', function(){
	console.log("in service");
	var orderService = {
		order : {	
		 availableOptions: [
		      {id: '1', name: 'Tomato Sauce'},
		      {id: '2', name: 'Mozarella'},
		      {id: '3', name: 'Mushrooms'},
		      {id: '4', name: 'Cheese'},
		      {id: '5', name: 'Bacon'}
	    	],	
			choosen: [],
			size: {},
			cheeseRand: {}
		}
	};

	  orderService.addOption = function($scope){
    	order.choosen.push($scope.data.selectedOption);
   		console.log(order);
   		alert("works");
    }

    orderService.removeOption = function(idx){
    	var index = $scope.data.choosen[idx];
    	$scope.data.choosen.splice(idx, 1);
    	console.log($scope.data.choosen);
    	console.log($scope.data);
    }

    orderService.addSize = function(size) {
    	$scope.data.size = {size: size }
    }
	

	return {
		getOrder: function() {
			return orderService;		
		}

	}
})