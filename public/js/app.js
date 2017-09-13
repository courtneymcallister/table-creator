$(document).ready(function(){
  const table = document.getElementById('table');


  $(".createTable").click(function(){
    table.innerHTML = "";
    //get user inputs
    var rows = $('#rows').val();
    var cols = $("#cols").val();
    var caption = $("#caption").val();

    //add rows and columns
    for(var i = 0; i < rows; i++){
      var newRow = table.insertRow(i);
      for(var j = 0; j < cols; j++){
        var newCell = newRow.insertCell(j);
        newCell.appendChild(document.createElement("input"))
      }
    }

    //add caption (optional)
    var newCaption = table.createCaption();
    newCaption.innerHTML = `${caption}`;
  })

  $(".clearTable").click(function(){
    table.innerHTML = '';
    var field = document.getElementsByClassName("showHtmlField")
    field.innerHTML = '';
  })

  $(".showHtml").click(function(){
    $(".showHtmlField").text($("table").html());
  })

})
