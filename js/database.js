// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/persons.db', autoload: true });

// Adds a person
exports.addPerson = function(firstname, lastname, author, title) {

  // Create the person object
  var person = {
    "firstname": firstname,
    "lastname": lastname,
    "author": author,
    "title": title
  };

  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
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

