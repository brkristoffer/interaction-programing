var PageView = function (container, model) {
    this.searchDish = container.find("#searchDish");
  //  this.type = "all";
    this.searchFilter = container.find("#searchFilter");

    this.dropdown = container.find("#dropdown-menu-page li a");

    // this.update = function(){
    //   numberOfGuests.html(model.getNumberOfGuests());
    //   totSek.html(model.getTotalMenuPrice());
    //
    // }
    // //this.update();
    // //console.log(this);
    // model.addObserver(this.update);

    //console.log(this.dropDownMenu.value);

    //var myHTML = '';
    //var typeArray = [];
    //var dropdownM = container.find("#dropdown-menu-page")
       // for(i in model.getFullMenu()){
       //   var type = model.getFullMenu()[i].type;
       //   if(!typeArray.includes(type)){
       //     typeArray.push(type);
       //     myHTML += "<li><a href='#'>"+type+"</a></li>";
       //   }
       //
       // }
       // dropdownM.html(myHTML);



}
