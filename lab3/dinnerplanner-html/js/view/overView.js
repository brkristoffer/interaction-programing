var OverView = function (container, model){

  this.printFullRecipe = container.find("#printFullRecipe");
  var overViewSpan = container.find("#overViewSpan");
  var totMenuPrice = container.find("#totMenuPrice");

  this.update = function(){
    var fullMenu = model.getFullMenu();
    var menuPrice = 0;
    var myHTML = '';

    for(i in fullMenu){
      var dish = fullMenu[i];
      //var dishPrice = model.getDishPrice(dish.ingredients);
      //menuPrice += dishPrice;
      myHTML += "<div class='col-sm-4'> <a href='#' class='thumbnail'> <img src='"+dish.image+"'><div class='caption'><span>"+dish.title+"</span><span style='color: red; float: right;'>"+""+" SEK</span></div></a></div>";
    }
    overViewSpan.html(myHTML);
    totMenuPrice.html( " SEK");
  }
  model.addObserver(this);
}
