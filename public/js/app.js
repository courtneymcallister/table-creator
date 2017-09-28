$(document).ready(function(){

  const table = document.getElementById('table');
  $('#table').hide();
  $('.showHtmlField').hide();
  $('.clearTable').hide();
  $('.alignmentOptions').hide();

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

    //add alignment to each table cell
    $(document).on('click', function(e){
      var target = $(e.target);
      console.log(target.html());
      if (target.is("td,th") || target.is("#align")){
        $('.alignmentOptions').show();
        var cell = target.html();
        $('.alignLeft').click(function(){
          // target.css("text-align", "left");
          cell.style.textAlign = "left";
        })
        $('.alignCenter').click(function(){
          // target.css("text-align", "center");
          cell.style.textAlign = "center";
        })
        $('.alignRight').click(function(){
          // target.css("text-align", "right");
          cell.style.textAlign = "right";
        })
      } else {
        $('.alignmentOptions').hide();
      }

    })

    //display the table
    $('#table').show();
    $('.createTable').hide();
    $('.clearTable').show();

  })



  $(".clearTable").click(function(){
    $(".showHtmlField").text('').hide();
    $('#table').hide();
    $('.createTable').show();
    $('.clearTable').hide();

  })

  $(".showHtml").click(function(){
    var field = $('.showHtmlField');
    var output = $('.preview').html();
    output = formatXml(output);

    //fill html field with data & show div
    field.text(output);
    field.show();
  })

  //source: https://gist.github.com/sente/1083506
  function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w([^>]*[^\/])?>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
  }


})
