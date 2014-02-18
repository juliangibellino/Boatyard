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

var detailsScrollbar = {
	init: function(id){
		var that = this;
		that.scrollbar = $(id);
        that.scrollbar.tinyscrollbar();

        that.scrollbar = that.scrollbar.data("plugin_tinyscrollbar");

        $(window).resize(function(){
            that.onResize();
        });
	},
	onResize: function(){
		var that = this;
		that.scrollbar.update("top");
		console.log("update scrollbar", that.scrollbar);
	}
};

var reservationManager = {
	init: function(){
		var that = this;
		this.$item = $("#reservations .item");
		this.$itemDelete = $(".delete", this.$item);
		this.$overlay = $("#delete-reservation");
		this.$overlayClose = $(".cancel", this.$overlay);
		this.$overlayDelete = $("#delete", this.$overlay);

		this.$itemDelete.on("click", $.proxy(function(e) {
    		this.openConfirmation(e);
		},that));

		this.$overlayClose.on("click", $.proxy(function(e) {
    		this.closeConfirmation(e);
		},that));

		this.$overlayDelete.on("click", $.proxy(function(e) {
			e.preventDefault();
    		this.deleteReservation(e);
		},that));

	},
	deleteReservation: function(){
		//put ajax request here to delete reservation from the database
		//on success remove item from DOM and close overlay
		this.$currentItem.remove();
		this.closeConfirmation();
	},
	openConfirmation: function(e){
		this.$currentItem = $(e.target).parent(".item").attr("id");
		this.$currentItem = $("#" + this.$currentItem);
		this.$overlay.fadeIn(100);
		console.log("deleteReservation", this.$currentItem);
	},
	closeConfirmation: function(){
		delete this.$currentItem;
		this.$overlay.fadeOut(100);
	}
};

$(function(){
	mainNavigation.init();

	//Homepage carousel
	if($("#carousel").length > 0){
		$("#carousel").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigationText: false
		});
	};

	//Details custom scrollbar
	if($("#details-scrollbar").length > 0){
		detailsScrollbar.init("#details-scrollbar");
	};

	//Delete Reservations
	if($("#reservations").length > 0){
		reservationManager.init();
	};

});
