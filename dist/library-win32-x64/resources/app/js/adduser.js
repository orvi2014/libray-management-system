const database = require('./js/databases');

window.onload = function() {

  // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('useradd').addEventListener('click', () => {

    // Retrieve the input fields
    var userid = document.getElementById('uid');
    var uname = document.getElementById('uname');
    var udesignation = document.getElementById('udesignation');
    var uemail = document.getElementById('uemail');
    var uphone = document.getElementById('uphone');
    var udept = document.getElementById('udept');
    var uip = document.getElementById('uip');

    // Save the person in the database if form value is not blank
    if (userid.value !== "" && uname.value !== "") {
      database.addPerson(userid.value, uname.value, udesignation.value, uemail.value, uphone.value, udept.value, uip.value);
      var successMsg = document.getElementById("msg");
      successMsg.innerHTML = "SUCCESS: Book Added Successfully";
      successMsg.style.color = "green";
    } else {
      var errorMsg = document.getElementById("msg");
      errorMsg.innerHTML = "ERROR: Please Fill Up All Fields";
      errorMsg.style.color = "Red";
    }

    // Reset the input fields
    userid.value = '';
    uname.value = '';
    udesignation.value = '';
    uemail.value = '';
    uphone.value = '';
    udept.value = '';
    uip.value = '';

    // Repopulate the table
    // populateTable();
  });
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
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

      tableBody += '  <td><input type="button" value="Update" onclick="editPerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }
    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
    $(document).ready(function() {
      var t = $('#bootstrap-data-table').DataTable({});
    });

  });
}

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
  div.innerHTML = '<input type="button" class="btn btn-outline-primary" onclick="updatePerson(\'' + id + '\')">';
}
