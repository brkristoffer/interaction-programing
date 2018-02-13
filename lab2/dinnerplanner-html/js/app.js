$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	this.type = "all";
	this.filter = "";
	this.id = "";
	//this.dishId = "";

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
	//this.dishId = $("#dishBox a");



	var homeView = new HomeView(home, model);
	var homeC = new HomeController(homeView, model, this);

	var sidebarView = new SidebarView(sidebar, model);
	var sidebarC = new SidebarController(sidebarView, model, this);


	var pageView = new PageView(page, model);
	var pageC = new PageController(pageView, model, this);

	var dishView = new DishView(dishes, model, this);
	var dishC = new DishController(dishView, model, this);

	var dishDetailView = new DishDetailView(dishdetails, model, this);
	var dishDetailC = new DishDetilsController(dishDetailView, model, this);

	var infoView = new InfoView(infobar, model);
	var infoC = new InfoController(infoView, model, this);

	var overView = new OverView(dinnerOverView, model);
	var overViewC = new OverViewController(overView, model, this);

	this.showSelectDishScreen = function(){
		page.show();
		sidebar.show();
		home.hide();
		dishdetails.hide();
		dishes.hide();
		this.confirmDinner.hide();
		sidebarView.update();

	}

	this.showDishScreen = function(){
		dishes.show();
		dishView.update(this.type, this.filter);
		//dishView.dishId = $("#dishBox a");

		// dishView.dishId.on("click", function(){
		// 	appid = $(this).attr("id");
		// });





	}

this.showDishDetailsScreen= function(id){
		//console.log(appid);
		dishDetailView.update(id);
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
		// dishView.dishId.on("click", function(){
		// 	appid = $(this).attr("id");
    //
		// });
		//dishDetailView.update(appid);

		sidebarView.update();

		//var sidebarView = new SidebarView($("#sidebarView"), model);


}
this.showDinnerOverviewScreen= function(){
		page.hide();
		sidebar.hide();
		dishdetails.hide();
		dishes.hide();
		infobar.show();
		dinneroverview.show();
		overView.update();
		//console.log(dinnerOverView);


	}

this.showDinnerPrintOutScreen= function(){
		infobar.hide();
		dinneroverview.hide();
		dinnerprintout.show();

		var printOutView = new PrintOutView(dinnerprintout, model);

	}


	// function showSelectDishScreen(){
	// var sidebarView = new SidebarView($("#sidebarView"), model);
	//var pageView = new PageView($("#pageView"), model);
	// var dishView = new DishView($("#dishView"), model);
	// }
	//function showSelectDishScreen(){
	//var sidebarView = new SidebarView($("#sidebarView"), model);

	// }
	//var sidebarView = new SidebarView($("#sidebarView"), model);




		page.hide();
		sidebar.hide();
		dishdetails.hide();
		infobar.hide();
		dinneroverview.hide();
		dinnerprintout.hide();


		//document.getElementById("startButton").onclick = function (evt) {
		//	showSelectDishScreen();

		//}




	// function sayHello() {
	//   console.log("hello00");
	// var pageView = new PageView($("#pageView"), model);
	//var dishView = new DishView($("#dishView"), model);
	//}


	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);



	/**
	* IMPORTANT: app.js is the only place where you are allowed to
	* use the $('someSelector') to search for elements in the whole HTML.
	* In other places you should limit the search only to the children
	* of the specific view you're working with (see exampleView.js).
	*/

});
