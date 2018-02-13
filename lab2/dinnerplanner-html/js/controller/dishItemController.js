var DishItemController = function (view, model) {

  view.dishId.click(function(){
    app.id = $(this).attr('id');
    console.log(app.id);
    app.showDishDetailsScreen();

   });


}
