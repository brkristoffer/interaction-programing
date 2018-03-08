var PrintOutView = function (container, model){
  model.addObserver(this);

  this.update = function(){
    container.html("");
    var myHTML = '';
    var menu = model.getFullMenu();
    var num = model.getNumberOfGuests();

    for(i in menu){
      var instructions = menu[i].instructions;
      var ingredients = '';
      for(ingredient in menu[i].extendedIngredients){
        ingredients += num +"x ";
        ingredients += menu[i].extendedIngredients[ingredient].originalString + "<br>";
      }

      myHTML += "<div class='row'><div class='col-xs-12 col-sm-3'><a href='#' class='thumbnail'><img id='imagePrintOut' src='"+menu[i].image+"'></a></div><div class='col-xs-12 col-sm-5'><div class='panel panel-default '><div class='panel-heading'><h3 class='panel-title'>"+menu[i].title+"</h3></div><div class='panel-body'>"+ingredients+"</div></div> </div><div class='col-xs-12 col-sm-4'><div class='panel panel-default'><div class='panel-body'>"+instructions+"</div></div>  </div></div>";
    }
    container.append(myHTML);
  }

}
