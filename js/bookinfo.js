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
  database.getBooks(function(book) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < book.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + book[i].bookid + '</td>';
      tableBody += '  <td>' + book[i].booktittle + '</td>';
      tableBody += '  <td>' + book[i].authornamee + '</td>';
      tableBody += '  <td>' + book[i].publishername + '</td>';
      tableBody += '  <td>' + book[i].publishplace + '</td>';
      tableBody += '  <td>' + book[i].yearofpublishing + '</td>';
      tableBody += '  <td>' + book[i].pagination + '</td>';
      tableBody += '  <td>' + book[i].remarks + '</td>';
      tableBody += '  <td>' + book[i].issbn + '</td>';
      tableBody += '  <td>' + book[i].shelfnum + '</td>';
      tableBody += '  <td>' + book[i].columnum + '</td>';
      tableBody += '  <td><a href="updatebook.html"><input type="button" value="Update" class="btn btn-outline-primary" onclick="myFunction(\'' + book[i]._id + '\')"></a></td>'
      tableBody += '  <td><input type="button" value="Delete" class="btn btn-outline-danger" onclick="deleteBook(\'' + book[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
    $(document).ready(function () {
      var t = $('#bootstrap-data-table').DataTable({});
      console.log(t)
})

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
function editPerson(id){
  edit(id);
}  

// create a html form and save it
function edit(id){
  var div = document.createElement("div");
div.style.width = "100px";
div.innerHTML = '<input type="button" onclick="updatePerson(\'' + id + '\')">';
}

function myFunction(id){

if(typeof(Storage)!=="undefined"){

var updateBookid= id;
localStorage.setItem("updateBookid", updateBookid);


}
else{

}



}






