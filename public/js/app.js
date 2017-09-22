$(document).ready(function(){
  const table = document.getElementById('table');
  $('#table').hide();
  $('.showHtmlField').hide();

  $(".createTable").click(function(){
    table.innerHTML = "";

    //get user inputs
    var rows = $('#rows').val();
    var cols = $("#cols").val();
    var headerType = $("#headerType").val();
    var borderSize = $("#borderSize").val();
    var caption = $("#caption").val();

    //add rows and columns - this needs to be changed to jquery
    for(var i = 0; i < rows; i++){
      var newRow = table.insertRow(i);
      for(var j = 0; j < cols; j++){
        var newCell = newRow.insertCell(j);
      }
    }

    //add headers - theres definitely a more elegant way to do this
    if (headerType == 1){ //first row
      $('<thead></thead').prependTo('#table').append($('#table tr:first'));
      $('#table tr:first td').replaceWith('<th></th>')
    } else if (headerType == 2){ //first column
      $('<th></th>').prependTo('#table tr');
      $('#table td:last-child').remove();
    } else if (headerType == 3){ //both
      $('<thead></thead').prependTo('#table').append($('#table tr:first'));
      $('#table tr:first td').replaceWith('<th></th>')
      $('#table th:last-child').remove();
      $('<th></th>').prependTo('#table tr');
      $('#table td:last-child').remove();
    }

    //adjust border size
    table.border = borderSize;

    //add caption (optional)
    var newCaption = table.createCaption();
    newCaption.innerHTML = `${caption}`;

    //display the table
    $('#table').show();


  })

  $(".clearTable").click(function(){
    $(".showHtmlField").text('').hide();
    $('#table').hide();

  })

  $(".showHtml").click(function(){
    var output = $('.preview').html();
    $(".showHtmlField").text(output);
    $(".showHtmlField").show();
  })

})
