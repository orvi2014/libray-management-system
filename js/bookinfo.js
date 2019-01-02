const database = require('./js/databases');

// Populates the book table
window.onload = function() {
  populateTable();

}

// Populates the persons table
function populateTable() {
  // Retrieve the persons
  database.getBooks(function(book) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < book.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + book[i].bookid + '</td>';
      tableBody += '  <td>' + book[i].acnum + '</td>';
      tableBody += '  <td>' + book[i].booktittle + '</td>';
      tableBody += '  <td>' + book[i].authornamee + '</td>';
      tableBody += '  <td>' + book[i].publishername + '</td>';
      tableBody += '  <td>' + book[i].publishplace + '</td>';
      tableBody += '  <td>' + book[i].yearofpublishing + '</td>';
      tableBody += '  <td>' + book[i].pagination + '</td>';
      tableBody += '  <td>' + book[i].remarks + '</td>';
      tableBody += '  <td>' + book[i].issbn + '</td>';
      tableBody += '  <td>' + book[i].bcasenum + '</td>';
      tableBody += '  <td>' + book[i].shelfnum + '</td>';
      tableBody += '  <td><a href="updatebook.html"><input type="button" class="btn btn-outline-primary" value="Update" onclick="myFunction(\'' + book[i]._id + '\')"></a></td>'
      tableBody += '  <td><input type="button" value="Delete" class="btn btn-outline-danger" onclick="deleteBook(\'' + book[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
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
function deleteBook(id) {

  // Delete the person from the database
  database.deleteBook(id);

  // Repopulate the table
  populateTable();
}

// edit against _id
function editPerson(id) {
  edit(id);
}

// create a html form and save it
function edit(id) {
  var div = document.createElement("div");
  div.style.width = "100px";
  div.innerHTML = '<input type="button" onclick="updatePerson(\'' + id + '\')">';
}

function myFunction(id) {

  if (typeof(Storage) !== "undefined") {

    var updateBookid = id;
    localStorage.setItem("updateBookid", updateBookid);


  } else {}
}
