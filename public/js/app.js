$(document).ready(function(){
  const table = document.getElementById('table');


  $(".createTable").click(function(){
    table.innerHTML = "";
    //get user inputs
    var rows = $('#rows').val();
    var cols = $("#cols").val();
    var headerType = $("#headerType").val();
    var borderSize = $("#borderSize").val();
    var caption = $("#caption").val();

    //add rows and columns
    for(var i = 0; i < rows; i++){
      var newRow = table.insertRow(i);
      for(var j = 0; j < cols; j++){
        var newCell = newRow.insertCell(j);
        newCell.appendChild(document.createElement("input"))
      }
    }

    //add headers
    if (headerType == 1 || headerType == 3){
      $('<thead></thead').prependTo('#table').append($('#table tr:first'));
    }

    //adjust border size
    table.border = `${borderSize}px`;

    //add caption (optional)
    var newCaption = table.createCaption();
    newCaption.innerHTML = `${caption}`;
  })

  $(".clearTable").click(function(){
    table.innerHTML = '';
    $(".showHtmlField").innerHTML = '';
  })

  $(".showHtml").click(function(){
    $(".showHtmlField").text($("table").html());
  })

})
