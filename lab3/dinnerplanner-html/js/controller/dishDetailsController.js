var DishDetilsController = function (view, model, app) {
  model.addObserver(view);

  view.backtoselectdish.click(function(){
      app.showSelectDishScreen();
    });

  view.addtomenu.click(function(){
    var id = model.getDishId();
    model.getDish(id, function(dish){
        model.addDishToMenu(dish);

       },
       function(error) {
         console.log(error);
       });

    //var dish = model.getDish(id);
    //model.addDishToMenu(dish);
    app.showSelectDishAgainScreen();
  });

}
