var DishView= function (container, model) {


  var myHTML = '';

   for(i in model.getFullMenu()){
     var name = model.getFullMenu()[i].name;
     var image = model.getFullMenu()[i].image;
     //Lägg till dishens id ist för i som image id

     myHTML += "<div class='col-sm-12 col-md-3'><a id='img"+i+"'href='#' class='thumbnail'> <img src='images/"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a></div>";
   }


   container.html(myHTML);




}
