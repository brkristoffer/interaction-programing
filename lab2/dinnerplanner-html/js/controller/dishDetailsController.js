var DishDetilsController = function (view, model, app) {

  view.backtoselectdish.click(function(){
      app.showSelectDishScreen();
    });

  view.addtomenu.click(function(){
    model.addDishToMenu(app.id);
    app.showSelectDishAgainScreen();
  });
}
