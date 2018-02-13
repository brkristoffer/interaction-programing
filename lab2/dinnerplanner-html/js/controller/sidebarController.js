var SidebarController = function (view, model, app) {

    view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    //view.numberOfGuests.textContent= num;
    });

    view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    //view.numberOfGuests.textContent= num;
    });

    app.confirmDinner.click(function(){
      app.showDinnerOverviewScreen();
    })

};
