var PageController = function (view, model, app) {

  view.dropdown.click(function(){
      app.type = $(this).text();

  });

  view.searchDish.click(function(){
    app.filter = view.searchFilter.val();
    app.showDishScreen();
  });

}
