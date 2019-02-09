const database = require('./js/databases');

window.onload = function() {

   // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('addbook').addEventListener('click', () => {

    // Retrieve the input fields
    var bookid = document.getElementById('bookid');
    var acnum = document.getElementById('acnum');
    var booktitle = document.getElementById('btitle');
    var authorname = document.getElementById('authorname');
    var publishername = document.getElementById('publishername');
    var publishplace = document.getElementById('publishplace');
    var yearofpublishing = document.getElementById('ypublishing');
    var pagination = document.getElementById('pagination');
    var remarks = document.getElementById('remarks');
    var issbn = document.getElementById('issbn');
    var bcasenum = document.getElementById('bcasenum');
    var shelfnum = document.getElementById('shelfnum');
    var count =0;
    //check bookid is available or not
    database.getBooks(function(books){
    for(i=0;i<books.length;i++){
      if(books[i].bookid!=bookid.value){
        count++;
  
       }
       else{
         
       }
    }
    if(bookid.value!=="" && booktitle.value!=="" && authorname.value!=="" && count==books.length){
      database.addBook(bookid.value, acnum.value, booktitle.value, authorname.value, publishername.value, publishplace.value, yearofpublishing.value, pagination.value, remarks.value, issbn.value, bcasenum.value, shelfnum.value) ;
      var successMsg = document.getElementById("msg");
      successMsg.innerHTML= "SUCCESS: Book Added Successfully";
      successMsg.style.color = "green";
    }
    else{
      if(count!=books.length){
        var errorMsg = document.getElementById("msg");
      errorMsg.innerHTML= "ERROR: Book is added already";
      errorMsg.style.color = "Red";
      }
      else{
        var errorMsg = document.getElementById("msg");
        errorMsg.innerHTML= "ERROR: Please Fill Up All Fields";
        errorMsg.style.color = "Red";
      }
     
    }

    // Reset the input fields
    bookid.value = '';
    acnum.value='';
    booktitle.value = '';
    authorname.value = '';
    publishername.value = '';
    publishplace.value = '';
    yearofpublishing.value = '';
    remarks.value = '';
    issbn.value = '';
    bcasenum.value= '';
    shelfnum.value = '';
    // Repopulate the table
   // populateTable();

    })
    // Save the book in the database if form value is not none
   
  });
}

// Populates the persons table
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
div.innerHTML = '<input type="button" class="btn btn-outline-primary" onclick="updatePerson(\'' + id + '\')">';
}
