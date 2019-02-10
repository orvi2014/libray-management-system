const database = require("./js/databases");
let today = new Date();
let today_year = today.getFullYear();
let today_month = today.getMonth() + 1;
let today_date = today.getDate();

// Populates the Monthly Report table
window.onload = function() {
  // Populate the table
  populateTable();

  // Add the add button click event
};

function populateTable() {
  database.getissuedbook(function(book) {
    // Generate the table body

    let tableBody = "";
    for (i = 0; i < book.length; i++) {
      //  console.log(issuedBookName[i]);
      if (typeof book[i].renew_date !== "undefined") {
        let renew_date = book[i].renew_date;
        let regexp = new RegExp("-");
        renew_date = renew_date.split(regexp);
        if (
          today_date >= renew_date[2] &&
          today_month >= renew_date[1] &&
          today_year >= renew_date[0]
        ) {
          // console.log(renew_date);
          let bookID = book[i].bookid;
          let uname = book[i].uname;
          let issued_date = book[i].issued_date;
          let renew_date = book[i].renew_date;
          //                     console.log(bookID);
          getName(bookID, uname, issued_date, renew_date);
          function getName(bookID, uname, issued_date, renew_date) {
            database.getBooks(function(books) {
              for (var j = 0; j < books.length; j++) {
                let name = "";
                function tablemaking(bookID, name) {
                  console.log(bookID);
                  tableBody += "<tr>";
                  tableBody += "  <td>" + bookID + "</td>";
                  tableBody += "  <td>" + name + "</td>";
                  tableBody += "  <td>" + uname + "</td>";
                  tableBody += "  <td>" + issued_date + "</td>";
                  tableBody += "  <td>" + renew_date + "</td>";
                  tableBody += "</tr>";
                  document.getElementById("tablebody1").innerHTML = tableBody;
                }

                if (bookID == books[j].bookid) {
                  //issuedBookName[j]=books[i].booktittle ;
                  // console.log(books[i].booktittle);
                  name = books[j].booktittle;

                  tablemaking(bookID, name, uname, issued_date, renew_date);
                } else {
                }
              }
            });
          }
          //  console.log(name);
        } else {
          console.log("worked");
        }
      }
    }

    // Fill the table content
  });
}
