var InfoController= function (view, model, app) {
  view.overViewName.html("My dinner: "+ model.getNumberOfGuests()+" people");
  view.infoBackToSearch.click(function(){
    app.showSelectDishAgainScreen();
  });

}
