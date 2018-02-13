var DishItemView= function (container, model, name, image, id) {
  // console.log(container);

    var myHTML = '';
    this.id = "bajs";
    myHTML += "<div id='dishBox'class='col-sm-12 col-md-3'><a id='"+id+"'href='#' class='thumbnail'> <img src='images/"+image+"' alt='...'><div class='caption'> <p style='text-align: center; font-size:9pt;'>"+name+"</p></div></a></div>";
    container.append(myHTML);
    this.box = container.find($("#dishBox a"));






}
