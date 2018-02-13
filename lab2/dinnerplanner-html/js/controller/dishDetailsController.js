var DishDetilsController = function (view, model, app) {

  view.backtoselectdish.click(function(){
      app.showSelectDishScreen();
    });

  view.addtomenu.click(function(){
  //  console.log(app.id);
    model.addDishToMenu(app.id);
    app.showSelectDishAgainScreen();
    //console.log(model.menuDish);

  });
}
