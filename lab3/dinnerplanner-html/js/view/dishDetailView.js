var DishDetailView = function(container, model){

  this.backtoselectdish = container.find("#backtoselectdish");
  this.addtomenu = container.find("#addtomenu");
  var dishIngredients = container.find("#dishIngredients");
  var img = container.find("#img");
  var dishCaption = container.find("#dishCaption");
  var dishDescription = container.find("#dishDescription");
  var numberOfGuestsIngredients = container.find("#numberOfGuestsIngredients");
  var totCostDish = container.find("#totCostDish");
  var dishNameBox = container.find("#dishNameBox");
  var ingrQuan = [];
  var ingrPrice = [];


  this.displayDish = function() {


    // model.getDish(id, function(dish){
    //      for(i in dish.extendedIngredients){
    //        var name = dish.extendedIngredients[i].name;
    //        var unit = dish.extendedIngredients[i].unit;
    //        var quantity = dish.extendedIngredients[i].amount*num;
    //        ingrQuan.push(quantity);
    //        var price = dish.extendedIngredients[i].amount*num;
    //        ingrPrice.push(price);
    //        myHTML += "<tr><td id='ingrnum'>"+quantity+"<td/><td>"+unit+"</td><td>"+name+"</td><td>SEK</td><td id='ingrnum'>"+price+"</td></tr>";
    //        dishIngredients.html( myHTML );
    //      }
    //       numberOfGuestsIngredients.html("Ingredients for "+num + " personas");
    //
    //      img.html("<img src='"+ dish.image +"'> <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis varius nisi, eu scelerisque ex. Cras faucibus posuere erat eu auctor. Integer molestie nulla quam, at ultrices neque maximus eu. In non risus at dolor sollicitudin euismod. In vel est non ipsum pellentesque aliquet gravida nec risus. Praesent nisi ligula, tristique vitae aliquet a, venenatis nec elit. Suspendisse orci massa, venenatis vitae magna in, finibus pretium quam. Curabitur sit amet facil </div>");
    //      dishDescription.html(dish.instructions);
    //      dishNameBox.html(dish.title);
    //
    //    },
    //    function(error) {
    //      console.log(error);
    //    });


    // var id = model.getDishId();
    // var dish = model.getDish(id);
    // var dishName = dish.name;
    //
    // img.html("<img src='images/"+ dish.image +"'> <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis varius nisi, eu scelerisque ex. Cras faucibus posuere erat eu auctor. Integer molestie nulla quam, at ultrices neque maximus eu. In non risus at dolor sollicitudin euismod. In vel est non ipsum pellentesque aliquet gravida nec risus. Praesent nisi ligula, tristique vitae aliquet a, venenatis nec elit. Suspendisse orci massa, venenatis vitae magna in, finibus pretium quam. Curabitur sit amet facil </div>");
    //
    // dishDescription.html(dish.description);
    // dishNameBox.html(dishName);
  }

  this.update = function(){
    ingrQuan = [];
    ingrPrice = [];
    var id = model.getDishId();
    var num = model.getNumberOfGuests();
    var myHTML = '';
    //model.setCurrentDish(id);
    var dish = model.getCurrentDish();
    console.log(dish);




    // var id = model.getDishId();
    // model.getDish(id, function(dishes){
    //      console.log(dishes);
    //    },
    //    function(error) {
    //      console.log(error);
    //    });

  //   var id = model.getDishId();
  //   var nume = model.getNumberOfGuests();
  //   var dish = model.getDish(id);
  //   var dishPrice = model.getDishPrice(dish.ingredients);
  //   var myHTML = '';
  //
  //   for(i in dish.ingredients){
  //     var name = dish.ingredients[i].name;
  //     var unit = dish.ingredients[i].unit;
  //     var quantity = dish.ingredients[i].quantity*nume;//*model.num;
  //     var price = dish.ingredients[i].price*nume;//*model.num;
  //     myHTML += "<tr><td>"+quantity+" "+unit+"</td><td>"+name+"</td><td>SEK</td><td>"+price+"</td></tr>";
  //     dishIngredients.html( myHTML );
  //   }
  //
  //   numberOfGuestsIngredients.html("Ingredients for "+nume + " personas");
  //   totCostDish.html(dishPrice + " SEK");
  // }
}
}
