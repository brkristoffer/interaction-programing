$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishDetailView = new DishDetailView($("#dishDetailView"), model);

	var home = document.getElementById("homeView");
	var page = document.getElementById("pageView");
	var sidebar = document.getElementById("sidebarView");
	var dishdetails = document.getElementById("dishdetailView");
	var numberOfGuests = document.getElementById("numberOfGuests");

	var ButtonController = function(view, model) {
	 view.plusButton.click(function(){
	 var num = model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 numberOfGuests.textContent= num;
	 });

	 view.minusButton.click(function(){
	 var num = model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 numberOfGuests.textContent= num;
	 });

	}


	function showSelectDishScreen(){
		page.style.display = "block";
		sidebar.style.display = "block";
		home.style.display = "none";

		var pageView = new PageView($("#pageView"), model);
		var sidebarView = new SidebarView($("#sidebarView"), model);
		document.getElementById("searchDish").onclick = function (dish) {
			var dishView = new DishView($("#dishView"), model);

			document.getElementById("img0").onclick = function (evt) {
				 showDishDetailsScreen();
			}
		}
		document.getElementById("img0").onclick = function (evt) {
			 showDishDetailsScreen();
		}
		ButtonController(sidebarView, model);

	}

	function showDishDetailsScreen(){
		var dishView = new DishView($("#dishView"), model);
		page.style.display = "none";
		sidebar.style.display = "block";
		home.style.display = "none";
		dishdetails.style.display = "block";
		document.getElementById("backtoselectdish").onclick = function (dish) {
			showSelectDishScreen();
		}
		ButtonController(sidebarView, model);

	}

	function showSelectDishAgainScreen(){

	}
	function showDinnerOverviewScreen(){

	}

	function showDinnerPrintOutScreen(){

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



	window.onload = function () {
		page.style.display = "none";
		sidebar.style.display = "none";
		dishdetails.style.display = "none";

		document.getElementById("startButton").onclick = function (evt) {
			showSelectDishScreen();
		}

	}


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
