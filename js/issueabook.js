const database = require('./js/databases');

window.onload = function() {

   // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('issuebook').addEventListener('click', () => {

    // Retrieve the input fields
    var bookid = document.getElementById('bookid');
    var userid = document.getElementById('uid');
    var today = new Date();
    //console.log(today);
    var dd = today.getDate();
    var mm=today.getMonth();
    var yy=today.getFullYear();
    mm= mm + 2; 
    if(mm>12){
    yy=yy+1;
    mm = 1;

    }
    today = yy + '-' + mm + '-'+ dd
    //console.log(mm);
    //today=mm+dd+yy;
   // console.log(today);
// Save the person in the database
    //database.issueabook(bookid.value, userid.value);
    database.issueabook(bookid.value, userid.value, today);

    // Reset the input fields
    bookid.value = '';
    userid.value = '';
    // Repopulate the table
   // populateTable();
  });
}