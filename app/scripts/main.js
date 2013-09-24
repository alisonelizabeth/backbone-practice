$(document).ready(function(){
	$("#for-sale").click(function(){
		
		house1 = new Home ({type: 'mansion', price: 1000000, img: '<img class="photo" src="images/mansion.jpg">'}),
		house2 = new Home ({type: 'ranch', price: 120000, img: '<img class="photo" src="images/ranch.jpg">'}),
		house3 = new Home ({type: 'trailer', price: 60000, img: '<img class="photo" src="images/trailer.jpg">'})

		view = new HomesView({model: house1})
		view = new HomesView({model: house2})
		view = new HomesView({model: house3})

	});
});

HomesView = Backbone.View.extend({

	className: 'homes-for-sale',

	events: {
		"click #edit"   : "edit",
		"click #delete" : "destroy",
		"click #save"	: "save",
	},

	initialize: function(){
		$(".houses").append(this.el)
		this.render();
	},

	edit: function(){
		var button = _.template($("#save").text());
		$(this.el).html('<input value="' + this.model.get('price')+ '">').append(button)

	},

	destroy: function(){
		this.remove();
	},

	save: function(){
		var newPrice = $(this.el).find('input').val();
		this.model.set('price', newPrice)
		this.render();
	},

	render: function(){
		var click = _.template($("#button-action").text());
		$(this.el).html(this.model.get('img') + '<div>' + ' Price: $' + this.model.get('price') + '</div>').append(click)
	}

});

Home = Backbone.Model.extend({
	initialize: function(){
		console.log('House type: ', this.get('type'))
	}
});