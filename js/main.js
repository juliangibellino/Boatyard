var mainNavigation = {
	init: function(){
		var that = this;
		this.navButton = $("#nav-button");
		this.nav = $("#main-nav");

		this.navButton.click( function(){
			that.toggleNav();
		});
	},
	toggleNav: function(){
		this.nav.slideToggle()
		
	}
};

$(function(){
	mainNavigation.init();
	$("#carousel").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: false
	});


});
