var SidebarController = function (view, model, app) {

    view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    app.confirmDinner.click(function(){
      app.showDinnerOverviewScreen();
    })

};
