const database = require('./js/databases');

function populateTable() {

   //Populate the table
  populateTable();

  // Add the add button click event
  document.getElementById('addbook').addEventListener('click', () => {

    // Retrieve the input fields
    var bookid = document.getElementById('bookid');
    var booktittle = document.getElementById('btitle');
    var authornamee = document.getElementById('authorname');
    var accessionnumber = document.getElementById('accessionnumber');
    var publishername = document.getElementById('publishername');
    var publishplace = document.getElementById('publishplace');
    var yearofpublishing = document.getElementById('ypublishing');
    var pagination = document.getElementById('pagination');
    var remarks = document.getElementById('remarks');
    var issbn = document.getElementById('issbn');
    var shelfnum = document.getElementById('shelfnum');
    var columnum = document.getElementById('columnum');


    // Save the person in the database
    database.addBook(bookid.value, booktittle.value, authornamee.value, publishername.value, publishplace.value, yearofpublishing.value, pagination.value, remarks.value, issbn.value, shelfnum.value, columnum.value) ;

    // Reset the input fields
    bookid.value = '';
    booktittle.value = '';
    authornamee.value = '';
    publishername.value = '';
    publishplace.value = '';
    yearofpublishing.value = '';
    remarks.value = '';
    issbn.value = '';
    shelfnum.value = '';
    columnum.value = '';
    // Repopulate the table
   // populateTable();
  });
}

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
      tableBody += '<td>' + book[i].issued_date  + '</td>';
      tableBody += '<td>' + book[i].renew_date  + '</td>';
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

