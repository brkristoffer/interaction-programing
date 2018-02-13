var DishItemController = function (view, model, app) {
  //console.log($(this).attr("id"));
  view.box.click(function(){
   view.id = $(this).attr("id");
   app.id = view.id;
   app.showDishDetailsScreen();
   })




}
