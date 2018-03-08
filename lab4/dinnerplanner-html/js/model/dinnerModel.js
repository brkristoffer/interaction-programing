//DinnerModel Object constructor

var DinnerModel = function(num, type) {
  //TODO Lab 1 implement the data structure that will hold number of guest
  // and selected dishes for the dinner menu
  var num = 1;
  var type = [];
  var observers = [];
  var menu = [];
  var currentDish;


  var notifyObservers = function(obj) {
    for(var i=0; i<observers.length; i++){
      observers[i].update(obj);
    }
  }

  this.addObserver = function(observer) {
    observers.push(observer);
  }

  //Changing the number of guest value
  this.setNumberOfGuests = function(numin) {
    if(numin > 0){
      num = numin;
    }
    else{
      num = 0;
    }
    notifyObservers(numin);
    return num;
  }
  //Returns the number of guest value
  this.getNumberOfGuests = function() {
    return num;
  }

// Set a current dish
  this.setCurrentDish = function(id){
    this.getDish(id, function(dish) {
 			currentDish = dish;
 			notifyObservers();
 		});

  }

//Returns the current dish
  this.getCurrentDish = function(id){
    return currentDish;

  }

  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function(typein) {
    //TODO Lab 1
    for(dish in dishes){
      if(dishes[dish].type == typein){
        type.push(dishes[dish]);
      }
    }
    return type;
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menu
  }

  // Returns the price of a specific dish by sending the ingredient array to the function
  this.getDishPrice = function(ingredients){
    var dishprice = 0;
    for(i in ingredients){
      dishprice += ingredients[i].amount;
    }
    return dishprice*num;
  }

  //Adds the dish to the menu
  this.addDishToMenu = function(dish) {
    menu.push(dish);
    notifyObservers(dish);
  }

  //Removes dish from menu (is not working)
  this.removeDishFromMenu = function(id) {
    //TODO Lab 1
    for (dish in this.menuDish){
      if(this.menuDish[dish].id === id){
        this.menuDish.splice(id,1);
        break;
      }
    }
    notifyObservers(this.menuDish);
  }

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishes = function (type, filter, callback, errorCallback) {
    $.ajax( {
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query='+type+','+filter,
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      },
      success: function(data) {
        callback(data);
      },
      error: function(error) {
        errorCallback(error);
      }
    })
  }

  //function that returns a dish of specific ID
  this.getDish = function (id, callback, errorCallback) {

    $.ajax( {
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',

      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      },
      success: function(data) {
        callback(data);
      },
      error: function(error) {
        errorCallback(error);
      }
    })
  }

}
