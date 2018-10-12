const database = require('./js/database');

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

    // Save the person in the database
    database.addPerson(userid.value, uname.value, udesignation.value, uemail.value, uphone.value);

    // Reset the input fields
    userid.value = '';
    uname.value = '';
    udesignation.value = '';
    uemail.value = '';
    uphone.value = '';

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
      tableBody += '  <td>' + persons[i].title + '</td>';
      tableBody += '  <td><input type="button" value="Update" onclick="editPerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;

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
function editPerson(id){
  edit(id);
}  

// create a html form and save it
function edit(id){
  var div = document.createElement("div");
div.style.width = "100px";
div.innerHTML = '<input type="button" onclick="updatePerson(\'' + id + '\')">';
}

