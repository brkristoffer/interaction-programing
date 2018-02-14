var DishView= function (container, model, app) {

  this.update = function(type, filter){
    container.html("");
     if(type == "all"){
       var type = ["starter", "main dish", "dessert"];
       for(j in type){
         for(i in model.getAllDishes(type[j], filter)){
           var name = model.getAllDishes(type[j], filter)[i].name;
           var image = model.getAllDishes(type[j], filter)[i].image;
           var id = model.getAllDishes(type[j], filter)[i].id;
           var dishItemView = new DishItemView(container, model, name, image, id);
           var dishItenC = new DishItemController(dishItemView, model, app);
         }
       }
     }

     else{
       for(i in model.getAllDishes(type, filter)){
         var name = model.getAllDishes(type, filter)[i].name;
         var image = model.getAllDishes(type, filter)[i].image;
         var id = model.getAllDishes(type, filter)[i].id;
         var dishItemView = new DishItemView(container, model, name, image, id);
         var dishItenC = new DishItemController(dishItemView, model, app);
       }
     }
 }
 model.addObserver(this.update);
}
