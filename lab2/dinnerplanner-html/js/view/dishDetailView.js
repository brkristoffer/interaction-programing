var DishDetailView = function(container, model){




  this.backtoselectdish = container.find("#backtoselectdish");
  this.addtomenu = container.find("#addtomenu");


  this.update = function(id){
    var dishIngredients = container.find("#dishIngredients");
    var img = container.find("#img");
    var dishCaption = container.find("#dishCaption");
    var headingName = container.find("#headingName");
    var dishDescription = container.find("#dishDescription");
    var numberOfGuestsIngredients = container.find("#numberOfGuestsIngredients");
    console.log(id);
      var dish = model.getDish(id);
      var dishName = dish.name;
      var dishPrice = model.getDishPrice(id);

      img.html("<img src='images/"+ dish.image +"'> <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis varius nisi, eu scelerisque ex. Cras faucibus posuere erat eu auctor. Integer molestie nulla quam, at ultrices neque maximus eu. In non risus at dolor sollicitudin euismod. In vel est non ipsum pellentesque aliquet gravida nec risus. Praesent nisi ligula, tristique vitae aliquet a, venenatis nec elit. Suspendisse orci massa, venenatis vitae magna in, finibus pretium quam. Curabitur sit amet facil </div>");

      headingName.html(dishName);
      dishDescription.html(dish.description);
      numberOfGuestsIngredients.html(model.num + " personas");

      $("#totCostDish").html( dishPrice + " SEK");
      $( "#dishName").html(dishName);

      var myHTML = '';

      for(i in dish.ingredients){
        var name = dish.ingredients[i].name;
        var quantity = dish.ingredients[i].quantity*model.num;
        var price = dish.ingredients[i].price*model.num;
        myHTML += "<tr><td>"+quantity+"</td><td>"+name+"</td><td>SEK</td><td>"+price+"</td></tr>";
        dishIngredients.html( myHTML );
      }

   //}
  model.addObserver(this.update);




  }




}
