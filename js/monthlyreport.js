const database = require('./js/databases');
let today = new Date();
let today_year = today.getFullYear();
let today_month = today.getMonth() + 1;
let today_date = today.getDate();

// Populates the Monthly Report table
window.onload = function () {
    populateTable();

}

function populateTable() {
    database.getissuedbook(function (book) {


        // Generate the table body
        var tableBody = '';
        for (i = 0; i < book.length; i++) {
            if (typeof (book[i].issued_date) !== "undefined") {
                let issued_date = ((book[i].issued_date));
                let regexp = new RegExp('-');
                issued_date = (issued_date.split(regexp));
                if (today_date >= issued_date[2] && today_month >= issued_date[1] && today_year >= issued_date[0]) {
                    
                    tableBody += '<tr>';
                    tableBody += '  <td>' + book[i].bookid + '</td>';
                    tableBody += '  <td>' + book[i].userid + '</td>';
                    tableBody += '<td>' + book[i].issued_date + '</td>';
                    tableBody += '</tr>';
                } else {
                    console.log('worked');
                }
            }
        }

        // Fill the table content
        document.getElementById('tablebody').innerHTML = tableBody;
    });
}