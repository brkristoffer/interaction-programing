var SidebarView = function (container, model) {
//  var numberOfGuests = container.find("#numberOfGuests");
//  var model = new DinnerModel(numberOfGuests, );



this.minusButton = container.find("#minusGuest");
this.plusButton = container.find("#plusGuest");


this.update = function(){
  var numberOfGuests = container.find("#numberOfGuests");
  var totSek = container.find("#sekTot");
  var menuDish = container.find("#menuDish");

  numberOfGuests.html(model.getNumberOfGuests());
  totSek.html(model.getTotalMenuPrice());
  //this.displayMenu();

  //this.displayMenu = function(){
    var menuDish = container.find("#menuDish");
    var myHTML = '';

    for(i in model.menuDish){
      var dishName = model.menuDish[i].name;
      var dishPrice = model.getDishPrice(model.menuDish[i].id);
      myHTML += '<li><div class="col-xs-8" style="font-size: 8pt;">'+dishName+'</div></li><li><div class="col-xs-4" style="font-size: 8pt;">'+dishPrice+'</div></li>'
      menuDish.html(myHTML);

    }



}

console.log(this.update);
model.addObserver(this.update);

// var starter = "starter";
// var myHTML = '';


//model.addDishToMenu(1);
//model.addDishToMenu(2);
//model.addDishToMenu(100);




//plus.onclick = function (evt){
//  model.setNumberOfGuests(model.getNumberOfGuests() + 1);

//}




//var hello = model.setNumberOfGuests(model.getNumberOfGuests() + 1);
//console.log(ExampleViewController);

//totSek.html(model.getTotalMenuPrice());
//this.numberOfGuests.html(model.getNumberOfGuests());




}
