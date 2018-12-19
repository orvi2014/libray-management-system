const database = require('./js/databases');

// Populates the persons table
window.onload = function() {
  populateTable();

}

function populateTable() {
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].userid + '</td>';
      tableBody += '  <td>' + persons[i].uname + '</td>';
      tableBody += '  <td>' + persons[i].udesignation + '</td>';
      tableBody += '  <td>' + persons[i].uemail + '</td>';
      tableBody += '  <td>' + persons[i].uphone + '</td>';
      tableBody += '  <td>' + persons[i].udept + '</td>';
      tableBody += '  <td>' + persons[i].uip + '</td>';
      tableBody += '  <td><a href="updateuser.html"><input type="button" class="btn btn-outline-primary" value="Update" onclick="myFunction(\'' + persons[i]._id + '\')"></a></td>'
      tableBody += '  <td><input type="button" class="btn btn-outline-danger" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
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

// Retrieve the persons
// Deletes a person
function deletePerson(id) {
  // Delete the person from the database
  database.deletePerson(id);

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
    var updateUserid = id;
    localStorage.setItem("userid", updateUserid);
  }
}
