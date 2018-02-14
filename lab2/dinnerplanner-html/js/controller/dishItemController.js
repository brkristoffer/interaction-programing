var DishItemController = function (view, model, app) {
  
  view.box.click(function(){
   view.id = $(this).attr("id");
   app.id = view.id;
   app.showDishDetailsScreen();
   })




}
