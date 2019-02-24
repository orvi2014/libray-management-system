const database = require('./js/databases');
// Populates the persons table
window.onload = function() {
  // Retrieve the persons
  database.getissuedbook(function(book) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < book.length; i++) {
      tableBody += '<tr>';
      tableBody += '<td>' + book[i].bookid + '</td>';
      tableBody += '<td>' + book[i].userid + '</td>';
      tableBody += '<td>' + book[i].uname + '</td>';
      tableBody += '<td>' + book[i].issued_date  + '</td>';
      tableBody += '<td>' + book[i].renew_date  + '</td>';
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
    document.getElementById('tablebody').innerHTML = tableBody;
    $(document).ready(function() {
      var t = $('#bootstrap-data-table').DataTable({});
    });
    $.fn.dataTable.ext.errMode = 'none';

    $('#tablebody').on('error.dt', function(e, settings, techNote, message) {
      console.log('An error has been reported by DataTables: ', message);
    });
  });
}

// Deletes a person
 // edit against _id
// create a html form and save it
function edit(id){
  var div = document.createElement("div");
div.style.width = "100px";
div.innerHTML = '<input type="button" onclick="updatePerson(\'' + id + '\')">';
}

