var PageView = function (container, model) {
    var myHTML = '';
    var typeArray = [];
    var dropdownM = container.find("#dropdown-menu-page")
       for(i in model.getFullMenu()){
         var type = model.getFullMenu()[i].type;
         if(!typeArray.includes(type)){
           typeArray.push(type);
           myHTML += "<li><a href='#'>"+type+"</a></li>";
         }

       }
       dropdownM.html(myHTML);

    

}
