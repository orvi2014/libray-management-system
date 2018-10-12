// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/persons.db', autoload: true });

// Adds a person
exports.addPerson = function(userid, uname, udesignation, uemail, uphone) {

  // Create the person object
  var person = {
    "userid": userid,
    "uname": uname,
    "udesignation": udesignation,
    "uemail": uemail,
    "uphone": uphone
  };

  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};

//Add a book
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

// Deletes a person
exports.deletePerson = function(id) {

  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}

// Update a person
exports.updatePerson = function(id,{firstname,lastname,author,title}) {
  db.update({_id:id},{ firstname: firstname} , {}, function (err, numReplaced) {
    // numReplaced = 1
    // The doc #3 has been replaced by { _id: 'id3', planet: 'Pluton' }
    // Note that the _id is kept unchanged, and the document has been replaced
    // (the 'system' and inhabited fields are not here anymore)
  });
}

