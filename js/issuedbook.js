const database = require('./js/databases');
// Populates the persons table
window.onload = function() {
  var tableBody = '';
  var bookIdArray=[]; 
  var userIdArray=[]; 
  var uNameArray=[]; 
  var issued_dateArray=[]; 
  var renew_dateArray=[];
  // Retrieve the persons
  database.getissuedbook(function(book) {

    // Generate the table body & take the value into arrays. 
   
    for (i = 0; i < book.length; i++) {
      bookIdArray[i]= book[i].bookid;
     // console.log(bookIdArray);
      userIdArray[i]= book[i].userid;
      uNameArray[i]=book[i].uname;
      issued_dateArray[i]= book[i].issued_date;
      renew_dateArray[i]= book[i].renew_date;
    }

    // Fill the table content
    getBookName(bookIdArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray);
  });
  //getBookName(bookIdArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray);
  
}
function getBookName(bookIdArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray){
 //console.log(bookIdArray.length) ; 
var  bookNameArray=[];
var bookIdArrayCount =0;

database.getBooks(function(book){
  for(i=0 ;i<bookIdArray.length;i++){
   for(j=0;j<book.length;j++){
     if(bookIdArray[i]==book[j].bookid){
       bookNameArray[i]=book[j].booktittle;
      // console.log(bookNameArray[i]);
      // console.log(bookIdArray[i]);
      console.log(uNameArray[i]);
       bookIdArrayCount++;
     }  
   }
  }
  makeTable(bookIdArray, bookNameArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray, bookIdArrayCount);

});
//console.log(bookIdArray.length);
//makeTable(bookIdArray, bookNameArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray, bookIdArrayCount);

}
function makeTable(bookIdArray, bookNameArray, userIdArray, uNameArray, issued_dateArray, renew_dateArray, bookIdArrayCount){
  //console.log('hello');
  //console.log(bookIdArray.length);
  var tableBody= '';
for(i=0;i<bookIdArrayCount;i++){
  console.log("hey");
  tableBody += '<tr>';
      tableBody += '<td>' + bookIdArray[i] + '</td>';
      tableBody += '<td>' + bookNameArray[i] + '</td>';
      tableBody += '<td>' + userIdArray[i] + '</td>';
      tableBody += '<td>' + uNameArray[i]  + '</td>';
      tableBody += '<td>' + issued_dateArray[i]  + '</td>';
      tableBody += '<td>' + renew_dateArray[i]  + '</td>';
      tableBody += '</tr>';
}
document.getElementById('tablebody').innerHTML = tableBody;
$(document).ready(function() {
  var t = $('#bootstrap-data-table').DataTable({});
});
$.fn.dataTable.ext.errMode = 'none';

$('#tablebody').on('error.dt', function(e, settings, techNote, message) {
  console.log('An error has been reported by DataTables: ', message);
})
}

// Deletes a person
 // edit against _id
// create a html form and save it
function edit(id){
  var div = document.createElement("div");
div.style.width = "100px";
div.innerHTML = '<input type="button" onclick="updatePerson(\'' + id + '\')">';
}

