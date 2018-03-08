$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	this.type = "all";
	this.filter = "";
	this.id = "bajs";

	var home = $("#homeView");
	var page = $("#pageView");
	var sidebar = $("#sidebarView");
	var confirmDinnernone = $("#confirmDinnernone");
	this.confirmDinner = $("#confirmDinner");
	var dishdetails = $("#dishDetailView");
	var numberOfGuests = $("#numberOfGuests");
	var dishes = $("#dishView");
	var infobar = $("#infoBarView");
	var dinneroverview = $("#dinnerOverView");
	var dinnerprintout = $("#dinnerPrintOutView");
	var dinnerOverView = $("#dinnerOverView");

	var homeView = new HomeView(home, model);
	var homeC = new HomeController(homeView, model, this);

	var sidebarView = new SidebarView(sidebar, model);
	var sidebarC = new SidebarController(sidebarView, model, this);

	var pageView = new PageView(page, model);
	var pageC = new PageController(pageView, model, this);

	var dishView = new DishView(dishes, model, this);
	var dishC = new DishController(dishView, model, this);

	var dishDetailView = new DishDetailView(dishdetails, model);
	var dishDetailC = new DishDetilsController(dishDetailView, model, this);

	var infoView = new InfoView(infobar, model);
	var infoC = new InfoController(infoView, model, this);

	var overView = new OverView(dinnerOverView, model);
	var overViewC = new OverViewController(overView, model, this);

	var printOutView = new PrintOutView(dinnerprintout, model);


	this.showSelectDishScreen = function(){
		page.show();
		sidebar.show();
		home.hide();
		dishdetails.hide();
		dishes.hide();
		this.confirmDinner.hide();


	}

	this.showDishScreen = function(){
		dishes.show();
		dishView.displayDishes(this.type, this.filter);

	}

this.showDishDetailsScreen= function(){
		page.hide();
		sidebar.show();
		home.hide();
		dishdetails.show();

	}

	this.showSelectDishAgainScreen= function(){
		page.show();
		sidebar.show();
		home.hide();
		dishdetails.hide();
		dishes.hide();
		infobar.hide();
		dinneroverview.hide();
		this.confirmDinner.show();
		confirmDinnernone.hide();

}
this.showDinnerOverviewScreen= function(){
		page.hide();
		sidebar.hide();
		dishdetails.hide();
		dishes.hide();
		infobar.show();
		dinneroverview.show();

	}

this.showDinnerPrintOutScreen= function(){
		infobar.hide();
		dinneroverview.hide();
		dinnerprintout.show();

	}

		page.hide();
		sidebar.hide();
		dishdetails.hide();
		infobar.hide();
		dinneroverview.hide();
		dinnerprintout.hide();

	/**
	* IMPORTANT: app.js is the only place where you are allowed to
	* use the $('someSelector') to search for elements in the whole HTML.
	* In other places you should limit the search only to the children
	* of the specific view you're working with (see exampleView.js).
	*/

});
