function updateTable(){
  var table = document.getElementById('table');

  //get user inputs
  var rows = document.getElementById('rows').value;
  var cols = document.getElementById('cols').value;
  var caption = document.getElementById('caption').value;

  //add rows and columns
  for(var i = 0; i < rows; i++){
    var newRow = table.insertRow(i);
    for(var j = 0; j < cols; j++){
      var newCell = newRow.insertCell(j);
      newCell.appendChild(document.createTextNode(`cell ${i} - ${j}`))
    }
  }

  //add caption (optional)
  var newCaption = table.createCaption();
  newCaption.innerHTML = `${caption}`;

}
