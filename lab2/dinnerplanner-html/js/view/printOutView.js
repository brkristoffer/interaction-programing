var PrintOutView = function (container, model){
model.addObserver(this);
this.update = function(){
  var myHTML = '';
  var menu = model.getFullMenu();
  var num = model.getNumberOfGuests();

  for(i in menu){
    var ingredients = menu[i].ingredients;
    var ingrStr = '';
    for(ingr in ingredients){
      var quantity = ingredients[ingr].quantity*num;
      var unit = ingredients[ingr].unit;
      var name = ingredients[ingr].name;
      ingrStr += ""+quantity+" "+unit+"   "+name+"<br>";
    }
    myHTML += "<div class='row'><div class='col-xs-12 col-sm-3'><a href='#' class='thumbnail'><img id='imagePrintOut' src='images/"+menu[i].image+"'></a></div><div class='col-xs-12 col-sm-5'><div class='panel panel-default '><div class='panel-heading'><h3 class='panel-title'>"+menu[i].name+"</h3></div><div class='panel-body'>"+ingrStr+"</div></div> </div><div class='col-xs-12 col-sm-4'><div class='panel panel-default'><div class='panel-body'>"+menu[i].description+"</div></div>  </div></div>";
  }
  container.append(myHTML);
}

}
