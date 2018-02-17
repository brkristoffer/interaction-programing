var DishItemController = function (view, model, app) {

  view.box.click(function(){
   var boxId = $(this).attr("id");

  model.setDishId(boxId);

   app.showDishDetailsScreen();
   //model.setIngredients(app.id);

 });




}
