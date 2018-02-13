var SidebarView = function (container, model) {
//  var numberOfGuests = container.find("#numberOfGuests");
//  var model = new DinnerModel(numberOfGuests, );

var numberOfGuests = container.find("#numberOfGuests");
var totSek = container.find("#sekTot");
var starter = "starter";
//var allDishes = model.getAllDishes(starter);
//for(var i=0; i < allDishes.length; i++){
//  dish.html(allDishes[i].name);
//}


 //container.find("#plusGuest").onclick() = function(evt){
//  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
//  console.log("hello bajs");
//};

this.minusButton = container.find("#minusGuest");
this.plusButton = container.find("#plusGuest");
//plus.onclick = function (evt){
//  model.setNumberOfGuests(model.getNumberOfGuests() + 1);

//}




//var hello = model.setNumberOfGuests(model.getNumberOfGuests() + 1);
//console.log(ExampleViewController);

totSek.html(model.getTotalMenuPrice());
numberOfGuests.html(model.getNumberOfGuests());




}
