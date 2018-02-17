var SidebarView = function (container, model) {

  this.minusButton = container.find("#minusGuest");
  this.plusButton = container.find("#plusGuest");
  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html(model.getNumberOfGuests());

  this.update = function(){
    var totSek = container.find("#sekTot");
    var menuDish = container.find("#menuDish");
    numberOfGuests.html(model.getNumberOfGuests());
    var num = model.getNumberOfGuests();
    var menuDish = container.find("#menuDish");
    var myHTML = '';
    var totMenuPrice = 0;

    var menu = model.getFullMenu();
    for(i in menu){
      var dish = menu[i];
      var dishName = dish.name;
      var dishPrice = model.getDishPrice(dish.ingredients);
      totMenuPrice += dishPrice;
      myHTML += '<li><div class="col-xs-8" style="font-size: 8pt;">'+dishName+'</div></li><li><div class="col-xs-4" style="font-size: 8pt;">'+dishPrice+'</div></li>'
      menuDish.html(myHTML);
      totSek.html(totMenuPrice + " SEK");
    }
  }
}
