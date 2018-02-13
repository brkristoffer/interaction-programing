var DishController = function (view, model, app) {

  view.dishId.click(function(){
    app.id = $(this).attr('id');
    console.log(app.id);
    app.showDishDetailsScreen();

   });


}
