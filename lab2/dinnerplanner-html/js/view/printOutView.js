var PrintOutView = function (container, model){

  var myHTML = '';
  for(i in model.menuDish){
    myHTML += "<div class='row'><div class='col-xs-12 col-sm-3'><a href='#' class='thumbnail'><img id='imagePrintOut' src='images/"+model.menuDish[i].image+"'></a></div><div class='col-xs-12 col-sm-5'><div class='panel panel-default '><div class='panel-heading'><h3 class='panel-title'>"+model.menuDish[i].name+"</h3></div><div class='panel-body'>"+model.menuDish[i].description+"</div></div> </div><div class='col-xs-12 col-sm-4'><div class='panel panel-default'><div class='panel-body'>"+model.menuDish[i].description+"</div></div>  </div></div>";
  }
  container.append(myHTML);



}
