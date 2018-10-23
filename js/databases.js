// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/books.db', autoload: true });
db1= new Datastore({filename: 'db/issuedbook.db', autoload: true});

// Adds a person
exports.addPerson = function(userid, uname, udesignation, uemail, uphone) {

  // Create the person object
  var person = [{
    "userid": userid,
    "uname": uname,
    "udesignation": udesignation,
    "uemail": uemail,
    "uphone": uphone
  }];

  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};


//Add a book
exports.addBook = function(bookid, booktittle, authornamee, publishername, publishplace,  yearofpublishing, pagination, remarks, issbn, shelfnum, columnum) 
{
//create the book object
var book= [{
"bookid": bookid,
"booktittle":booktittle,
"authornamee":authornamee,
"publishername":publishername,
"publishplace":publishplace,
"yearofpublishing":yearofpublishing,
"pagination":pagination,
"remarks":remarks,
"issbn":issbn,
"shelfnum":shelfnum,
"columnum":columnum,

}];
//save the book to the database
db.insert(book, function(err, newDoc){

  //do nothing
})


};


// Returns all persons
exports.getPersons = function(fnc) {

  // Get all persons from the database
  db.find({}, function(err, docs) {

  db.find({_id:fnc}, {}, function(err, findUpdate){

  });
  

    // Execute the parameter function
    fnc(docs);
  });
}
//Retruns all the books
exports.getBooks = function(fnc) {

  // Get all persons from the database
  db.find({}, function(err, docs) {

  db.find({_id:fnc}, {}, function(err, findUpdate){

  });
  

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}
 
// Updates a person
exports.updatePerson = function(id){
  
  db.update({ _id: id }, {}, function(err, numUpdate) {
    // Do nothing
  });
  
}
exports.issueabook = function(bookid, userid) 
{
//create the book object
var issuedbook= [{
"bookid": bookid,
"userid":userid,

}];
//save the book to the database
db1.insert(issuedbook, function(err, newDoc){

  //do nothing
})


};


