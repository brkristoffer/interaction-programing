var DishView= function (container, model, app) {
  this.dishBox = container.find("#dishes");

  this.displayDishes = function(type, filter){
  //  container.html("");
    var dishPlace = container.find("#dishes");
    dishPlace.html("");

//TODO 1. Change so that the typ is generated from the reality
//TODO 2. Change so that the getAllDishes not is inside of a for-loop

  //   if(type == "all"){
       model.getAllDishes(type, filter, function(dishes){
            var dishItemBox = '';

            console.log(dishes);
            for(i in dishes.results){
              var name = dishes.results[i].title;
              var id = dishes.results[i].id;
              var image = 'https://spoonacular.com/recipeImages/'+id+'-240x150.jpg';
              dishItemBox += "<div id='"+id+"'class='col-sm-12 col-md-3'></div>";
              dishPlace.append(dishItemBox);

              var box = dishPlace.find("#"+id);
              dishItem = '';
              dishItem += "<a id='"+id+"'href='#' class='thumbnail'> <img src='"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a>";
              box.append(dishItem);
            //var dishItemView = new DishItemView(space, model, name, image, id);
              //var dishItenC = new DishItemController(dishItemView, model, app);
            }
          },
          function(error) {
            console.log(error);
          });

  //   }

    // else{
       // model.getAllDishes(type, filter, function(dishes){
       //      console.log(dishes);
       //      for(i in dishes.results){
       //        var name = dishes.results[i].title;
       //        var id = dishes.results[i].id;
       //        var image = 'https://spoonacular.com/recipeImages/'+id+'-240x150.jpg';
       //        var box = '';
       //        box += "<div id='"+id+"'class='col-sm-12 col-md-3'></div>";
       //        container.append(box);
       //        var space = container.find($("#"+id));
       //        var dishItemView = new DishItemView(space, model, name, image, id);
       //        var dishItenC = new DishItemController(dishItemView, model, app);
       //      }
       //    },
       //    function(error) {
       //      console.log(error);
       //    });
  //    }
 }
}
