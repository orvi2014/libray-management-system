const database = require('./js/databases');

window.onload = function() {

   // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('issuebook').addEventListener('click', () => {

    // Retrieve the input fields
    var bookid = document.getElementById('bookid');
    var userid = document.getElementById('uid');
       // check against userid
    database.getPersons(function(persons){
     
    // Repopulate the table
   // populateTable();
  }); 
})
}
