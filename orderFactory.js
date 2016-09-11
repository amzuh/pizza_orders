 App.factory('orderService', function(){
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
    	 this.order.choosen.push($scope);
    	 return orderService;
    }

    orderService.removeOption = function(idx){
    	var index = this.order.choosen[idx];
    	this.order.choosen.splice(idx, 1);
    	return orderService;
    }

    orderService.addSize = function(size) {
    	this.order.size = {size: size }
    }
	

	return {
		getOrder: function() {
			return orderService;		
		}

	}
})