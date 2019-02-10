const database = require('./js/databases');
let today = new Date();
let today_year = today.getFullYear();
let today_month = today.getMonth() + 1;
let today_date = today.getDate();


// Populates the Monthly Report table
window.onload = function () {
  // populateTable();
   document.getElementById('report').addEventListener('click', () => {
    var numberOfDays= document.getElementById('days').value;
    console.log(numberOfDays);
    populateTable(numberOfDays);
   })

}
function populateTable(numberOfDays){
    database.getissuedbook(function (book) {
        // Generate the table body
       
        let tableBody = '';
        for (i = 0; i < book.length; i++) {
          //  console.log(issuedBookName[i]);
            if (typeof (book[i].issued_date) !== "undefined") {
                let issued_date = ((book[i].issued_date));
                let regexp = new RegExp('-');
                let limit=numberOfDays;
                let upperLimitDay= today_date - limit;
                console.log(upperLimitDay);
                issued_date = (issued_date.split(regexp));
                console.log(issued_date);
                console.log(issued_date[2]);
                console.log(upperLimitDay);
                console.log(today_date);
                if (issued_date[2] >= upperLimitDay && issued_date[2] <= today_date) {
                   // console.log(renew_date);
                   let bookID=book[i].bookid;
                   let uname=book[i].uname;
                   let issued_date=book[i].issued_date;
                   let renew_date=book[i].renew_date;
                    console.log(bookID);
                          getName(bookID,uname,issued_date,renew_date)
                 function getName(bookID,uname,issued_date,renew_date, numberOfDays){
        console.log(bookID);                 
                    
                    database.getBooks(function(books){
                        
                        for(var j=0;j<books.length;j++){
                            let name = '';
                            
                                if(bookID==books[j].bookid){
                                    //issuedBookName[j]=books[i].booktittle ;
                                   // console.log(books[i].booktittle);
                                    //console.log(books[i].booktittle);
                                   name =  books[j].booktittle;
                                   console.log(name);
                                  // console.log(name);
                                   //console.log(bookID);
                                   tableBody += '<tr>';
                                   tableBody += '  <td>' + bookID + '</td>';
                                   tableBody += '  <td>' + name + '</td>';
                                   tableBody += '  <td>' + uname + '</td>';
                                   tableBody += '  <td>' + issued_date + '</td>';
                                   tableBody += '  <td>' + renew_date + '</td>';
                                   tableBody += '</tr>';
                                   document.getElementById('tablebody2').innerHTML = tableBody;
                                }
                                else{
                    
                                }

                            }
                           
                
                    });
                }
              //  console.log(name);
                   
                    

                } else {
                    console.log('worked');
                }
            }



            }
        })
    }
