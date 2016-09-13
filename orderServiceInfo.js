 App.factory('orderServiceInfo', function(){
	var orderServiceInfo = {
		order: {
			firstName:"" ,
			surname: "",
			street: "",
			streetno: "",
			postcode: "",
			city: ""
			}
		};

	  orderServiceInfo.addInfo = function(data){
	  	this.order.firstName = data.order.firstName;
	  	this.order.surname = data.order.surname;
	  	this.order.postcode = data.order.postcode;
		this.order.street = data.order.street;
		this.order.streetno = data.order.streetno;
		this.order.city = data.order.city;	  	
    	return orderServiceInfo;
    }

	

	return {
		getOrder: function() {
			return orderServiceInfo;		
		}

	}
})