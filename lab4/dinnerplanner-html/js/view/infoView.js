var InfoView = function (container, model) {

  var overViewName = container.find("#overViewName");
  this.infoBackToSearch = container.find("#infoBackToSearch");

  this.update = function(){
    overViewName.html("My dinner: "+ model.getNumberOfGuests()+" people");
  }
}
