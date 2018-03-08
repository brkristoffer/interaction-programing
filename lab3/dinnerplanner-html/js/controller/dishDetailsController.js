var DishDetilsController = function (view, model, app) {
  model.addObserver(view);

  view.backtoselectdish.click(function(){
      app.showSelectDishScreen();
    });

  view.addtomenu.click(function(){
    var dish = model.getCurrentDish();
    model.addDishToMenu(dish);
    app.showSelectDishAgainScreen();
  });

}
