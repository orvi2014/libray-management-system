const database = require('./js/databases');

window.onload = function() {

   // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('issuebook').addEventListener('click', () => {

    // Retrieve the input fields
    var bookid = document.getElementById('bookid');
    var userid = document.getElementById('uid');
// Save the person in the database
    //database.issueabook(bookid.value, userid.value);
    database.issueabook(bookid.value, userid.value);

    // Reset the input fields
    bookid.value = '';
    userid.value = '';
    // Repopulate the table
   // populateTable();
  });
}