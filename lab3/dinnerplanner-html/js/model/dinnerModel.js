//DinnerModel Object constructor

var DinnerModel = function(num, type) {
  //TODO Lab 1 implement the data structure that will hold number of guest
  // and selected dishes for the dinner menu
  var num = 1;
  var type = [];
  //this.menuDish = [];
  var observers = [];
  var modelId = '1';
  var menu = [];
  var currentDish;


  var notifyObservers = function(obj) {
    for(var i=0; i<observers.length; i++){
      observers[i].update(obj);
      //console.log(observers[i]);
    }
  }

  this.addObserver = function(observer) {
    observers.push(observer);
  }

  // this.removeObserver=function(observer){
  //   /* remove observer from array */
  // }

  //Changing the number of guest value
  this.setNumberOfGuests = function(numin) {
    //TODO Lab 1
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
    //TODO Lab 1
    //notifyObservers(num);
    return num;
  }
  //Changing the id to the id of a selected dish
  this.setDishId = function(id) {
    //TODO Lab 1
    modelId = id;
    notifyObservers(modelId);
    return modelId;

  }
  //Returns the id of the dish that is selected
  this.getDishId = function() {
    //TODO Lab 1
    return modelId;
  }

  this.setCurrentDish = function(id){
    this.getDish(id, function(dish) {
 			currentDish = dish;
 			notifyObservers();
 		});

  }

  this.getCurrentDish = function(id){
    //console.log(currentDish.pop());
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
  //Not in use - update function and use it for dinner overview and print out
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

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
    //TODO Lab 1
    menu.push(dish);
    notifyObservers(dish);
  }

  //Removes dish from menu
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

  //
  // this.getDishIngredientsInfo = function (ingredient) {
  //   for(key in dishes){
  //     if(dishes[key].id == id) {
  //       for(i in dishes[key].ingredients){
  //         var name = dishes[key].ingredients[i].name;
  //         var quantitiy = dishes[key].ingredients[i].quantity* num;
  //         var unit = dishes[key].ingredients[i].unit;
  //         var price = dishes[key].ingredients[i].price*num;
  //       }
  //     }
  //   }
  // }

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
