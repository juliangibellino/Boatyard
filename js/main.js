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
});
