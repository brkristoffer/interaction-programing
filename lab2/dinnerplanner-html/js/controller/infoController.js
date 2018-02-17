var InfoController= function (view, model, app) {
  model.addObserver(view);

  view.infoBackToSearch.click(function(){
    app.showSelectDishAgainScreen();
  });

}
