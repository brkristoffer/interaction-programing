var DishController = function (view, model, app) {
  view.dishBox.click(function(dish){
    var dishId = $(dish.target).parents('div').attr('id');

    //model.setDishId(dishId);
  //  console.log(model.getDishId());
    model.setCurrentDish(dishId);
    console.log("satt");

    app.showDishDetailsScreen();
  })
  // view.box.click(function(){
  //   var boxId = $(this).attr("id");
  //
  //   // model.setDishId(boxId)
  //   //  model.setCurrentDish(boxId);
  //   console.log(boxId);
  //   //  var dish = model.getCurrentDish();
  //   // console.log(dish);
  //   //  var dish = model.getCurrentDish();
  //   //  console.log(dish + " get");
  //   app.showDishDetailsScreen();
  //   //model.setIngredients(app.id);
  //
  // });

}
