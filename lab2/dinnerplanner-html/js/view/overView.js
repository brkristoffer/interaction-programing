var OverView = function (container, model){

  var overViewSpan = container.find("#overViewSpan");
  var totMenuPrice = container.find("#totMenuPrice");
  this.printFullRecipe = container.find("#printFullRecipe");

  this.update = function(){
    var myHTML = '';
  for(i in model.menuDish){
    var id = model.menuDish[i].id;
    //console.log(model.menuDish);
    myHTML += "<div class='col-sm-4'> <a href='#' class='thumbnail'> <img src='images/"+model.menuDish[i].image+"'><div class='caption'><span>"+model.menuDish[i].name+"</span><span style='color: red; float: right;'>"+model.getDishPrice(id)+" SEK</span></div></a></div>";
  }
  overViewSpan.html(myHTML);
  totMenuPrice.html(model.getTotalMenuPrice()+" SEK");
  }
  model.addObserver(this.update);


}
