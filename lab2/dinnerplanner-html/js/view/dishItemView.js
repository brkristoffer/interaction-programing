var DishItemView= function (container, model) {


  this.update = function(type, filter){
     var myHTML = '';
     if(type == "all"){

       for(i in model.getFullMenu()){
         var name = model.getFullMenu()[i].name;
         var image = model.getFullMenu()[i].image;
         var id = model.getFullMenu()[i].id;

         myHTML += "<div id='dishBox'class='col-sm-12 col-md-3'><a id='"+id+"'href='#' class='thumbnail'> <img src='images/"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a></div>";
       }
     }
     else{

       for(i in model.getAllDishes(type, filter)){
         var name = model.getAllDishes(type, filter)[i].name;
         var image = model.getAllDishes(type, filter)[i].image;
         var id = model.getAllDishes(type, filter)[i].id;

         myHTML += "<div id='dishBox'class='col-sm-12 col-md-3'><a id='"+id+"'href='#' class='thumbnail'> <img src='images/"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a></div>";
       }
     }
    // console.log(this);

  container.html(myHTML);
  //console.log(this.dishId);
 }
 this.update();
 this.dishId = container.find("#dishBox a");


  //console.log(this);
   model.addObserver(this.update);


   //console.log(this.dishId);



//  this.update=function(model, changeDetails){
       // redraw just the portion affected by the changeDetails
       // or remove all graphics in the view, read the whole model and redraw
//  }
  //model.addObserver(this.update);


//Reurns all the FILTERED dishes in the DishLibrary
//model.getAllDishes("starter");

//Reurns all the dishes in the DishLibrary








}
