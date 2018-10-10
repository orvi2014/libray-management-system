const database = require('./js/database');

window.onload = function() {

  // Populate the table
  populateTable();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var author = document.getElementById('author');
    var title = document.getElementById('title');

    // Save the person in the database
    database.addPerson(firstname.value, lastname.value, author.value, title.value);

    // Reset the input fields
    firstname.value = '';
    lastname.value = '';
    author.value = '';
    title.value = '';

    // Repopulate the table
    populateTable();
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
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td>' + persons[i].author + '</td>';
      tableBody += '  <td>' + persons[i].title + '</td>';
      tableBody += '  <td><input type="button" value="Update" onclick="updatePerson(\'' + persons[i]._id + '\')"></td>'
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

function updatePerson(id){
  // Creating a form
  
  var  div ='';
  for(i=0;i<3; i++){
    div += '<div>';
    div += '<input type="text" value="Update">';
    div += '</div>';
  }
  // Fill the table content
  document.getElementById('update').innerHTML = div;
  
  }

