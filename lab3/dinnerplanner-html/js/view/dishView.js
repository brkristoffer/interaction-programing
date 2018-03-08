var DishView= function (container, model, app) {
  this.dishBox = container.find("#dishes");

  this.displayDishes = function(type, filter){
    var dishPlace = container.find("#dishes");
    dishPlace.html("");

    model.getAllDishes(type, filter, function(dishes){
      var dishItemBox = '';

      console.log(dishes);
      for(i in dishes.results){
        var name = dishes.results[i].title;
        var id = dishes.results[i].id;
        var image = 'https://spoonacular.com/recipeImages/'+id+'-240x150.jpg';
        dishItemBox = "<div id='"+id+"'class='col-sm-12 col-md-3'></div>";
        dishPlace.append(dishItemBox);

        var box = dishPlace.find("#"+id);
        dishItem = '';
        dishItem += "<a id='"+id+"'href='#' class='thumbnail'> <img src='"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a>";
        box.append(dishItem);

      }
    },
    function(error) {
      console.log(error);
    });

  }
}
