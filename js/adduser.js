const database = require('./js/databases');

window.onload = function() {

  // Populate the table
  //populateTable();

  // Add the add button click event
  document.getElementById('useradd').addEventListener('click', () => {

    // Retrieve the input fields
    var userid =document.getElementById('uid').value;
   // console.log(typeof(userid1));
    //var userid=parseInt(userid1);
    //var regexp= new RegExp("^\d*\.?\*$");
    var uname = document.getElementById('uname');
    var udesignation = document.getElementById('udesignation');
    var udept = document.getElementById('udept');
    var ucname = document.getElementById('ucname');
    var uemail = document.getElementById('uemail');
    var uphone = document.getElementById('uphone');
    var uip = document.getElementById('uip');
    var count = 0;
     //check userid is listed already or not
     database.getPersons(function(persons){
      for(i=0;i<persons.length;i++){
        if(persons[i].userid!=userid){
          count++;
        }
        else{

        }
      }
     // console.log(typeof(NaN));
      
        if (userid!== "" && uname.value !== "" && count==persons.length) {
          console.log(typeof(userid));
          database.addPerson(userid, uname.value, udesignation.value, udept.value, ucname.value, uemail.value, uphone.value, uip.value);
          var successMsg = document.getElementById("msg");
          successMsg.innerHTML = "SUCCESS: User Added Successfully";
          successMsg.style.color = "green";
        } else {
          
          if(count!=persons.length){
            var errorMsg = document.getElementById("msg");
            errorMsg.innerHTML = "ERROR: User Id is already listed";
            errorMsg.style.color = "Red";
          }
          else{
            var errorMsg = document.getElementById("msg");
            errorMsg.innerHTML = "ERROR: Please Fill Up All Fields";
            errorMsg.style.color = "Red";
          }
         
        }  
      // Reset the input fields
      userid.value = '';
      uname.value = '';
      udesignation.value = '';
      udept.value='';
      ucname.value='';
      uemail.value = '';
      uphone.value = '';
      uip.value = '';
  
      // Repopulate the table
      // populateTable();



     })
    // Save the person in the database if form value is not blank
    
  });
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  database.getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].userid + '</td>';
      tableBody += '  <td>' + persons[i].uname + '</td>';
      tableBody += '  <td>' + persons[i].udesignation + '</td>';
      tableBody += '  <td>' + persons[i].udept + '</td>';
      tableBody += '  <td>' + persons[i].ucname + '</td>';
      tableBody += '  <td>' + persons[i].uemail + '</td>';
      tableBody += '  <td>' + persons[i].uphone + '</td>';
      tableBody += '  <td>' + persons[i].uip + '</td>';

      tableBody += '  <td><input type="button" value="Update" onclick="editPerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }
    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
    $(document).ready(function() {
      var t = $('#bootstrap-data-table').DataTable({});
    });

  });
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  database.deletePerson(id);

  // Repopulate the table
  populateTable();
}

// edit against _id
function editPerson(id) {
  edit(id);
}

// create a html form and save it
function edit(id) {
  var div = document.createElement("div");
  div.style.width = "100px";
  div.innerHTML = '<input type="button" class="btn btn-outline-primary" onclick="updatePerson(\'' + id + '\')">';
}
