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
        let limit=numberOfDays;
        let upperLimitDay= today_date - limit;
        let previouMonthDate = 0;
        let previousMonth =0;
       
        console.log(upperLimitDay);
        if(upperLimitDay<0){
            let newUpperLimitDay = Math.abs(upperLimitDay);
            previousMonth = today_month - 1;
            console.log(newUpperLimitDay)
            console.log(previousMonth);
            for(i=1;i<newUpperLimitDay;i++){
                previouMonthDate= 31 - i;
            }
            console.log(previouMonthDate);
        }
        for (i = 0; i < book.length; i++) {
          //  console.log(issuedBookName[i]);
            if (typeof (book[i].issued_date) !== "undefined") {
                let issued_date = ((book[i].issued_date));
                let regexp = new RegExp('-');
                issued_date = (issued_date.split(regexp));
               // console.log(issued_date);
                //console.log(issued_date[2]);
                //console.log(upperLimitDay);
                //console.log(today_date);
               
                if ((issued_date[0] >= upperLimitDay && issued_date[0] <= today_date && issued_date[1]==today_month) || (issued_date[0]>= previouMonthDate && issued_date[1]==previousMonth ) ) {
                   // console.log(renew_date);
                   console.log(previousMonth);
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
