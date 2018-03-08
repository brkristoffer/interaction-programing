var DishController = function (view, model, app) {
  
  view.dishBox.click(function(dish){
    var dishId = $(dish.target).parents('div').attr('id');
    model.setCurrentDish(dishId);
    app.showDishDetailsScreen();
  })
}
