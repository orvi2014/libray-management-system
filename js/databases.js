// Initialize the database
var Datastore = require('nedb');
db = new Datastore({
  filename: 'db/books.db',
  autoload: true
});
db1 = new Datastore({
  filename: 'db/issuedbook.db',
  autoload: true
});
db2 = new Datastore({
  filename: 'db/persons.db',
  autoload: true
});

// Adds a person
exports.addPerson = function(userid, uname, udesignation, uemail, uphone, udept, uip) {

  // Create the person object
  var person = [{
    "userid": userid,
    "uname": uname,
    "udesignation": udesignation,
    "uemail": uemail,
    "uphone": uphone,
    "udept": udept,
    "uip": uip
  }];

  // Save the person to the database
  db2.insert(person, function(err, newDoc) {
    // Do nothing
  });
};


//Add a book
exports.addBook = function(bookid, acnum, booktittle, authornamee, publishername, publishplace, yearofpublishing, pagination, remarks, issbn, bcasenum, shelfnum) {
  //create the book object
  var book = [{
    "bookid": bookid,
    "booktittle": booktittle,
    "acnum": acnum,
    "authornamee": authornamee,
    "publishername": publishername,
    "publishplace": publishplace,
    "yearofpublishing": yearofpublishing,
    "pagination": pagination,
    "remarks": remarks,
    "issbn": issbn,
    "bcasenum": bcasenum,
    "shelfnum": shelfnum,

  }];
  //save the book to the database
  db.insert(book, function(err, newDoc) {

    //do nothing
  })


};


// Returns all persons
exports.getPersons = function(fnc) {

  // Get all persons from the database
  db2.find({}, function(err, docs) {

    db2.find({
      _id: fnc
    }, {}, function(err, findUpdate) {

    });


    // Execute the parameter function
    fnc(docs);
  });
}
//Retruns all the books
exports.getBooks = function(fnc) {

  // Get all persons from the database
  db.find({}, function(err, docs) {

    db.find({
      _id: fnc
    }, {}, function(err, findUpdate) {

    });


    // Execute the parameter function
    fnc(docs);
  });
}

exports.getissuedbook = function(fnc) {


  db1.find({}, function(err, docs) {

    db1.find({
      _id: fnc
    }, {}, function(err, findUpdate) {

    });

    //Execute the parameter function
    fnc(docs);
  });

}

// Deletes a person
exports.deletePerson = function(id) {

  db2.remove({
    _id: id
  }, {}, function(err, numRemoved) {
    // Do nothing
  });
}
exports.deleteBook = function(id) {

  db.remove({
    _id: id
  }, {}, function(err, numRemoved) {



  });

}
exports.deleteIssuedBbook = function(id) {
  db1.remove({
    bookid: id
  }, {}, function(err, numRemoved) {


  });
}

// Updates a person
exports.updateBook = function(id, {
  bookid,
  acnum,
  booktittle,
  authornamee,
  publishername,
  publishplace,
  yearofpublishing,
  pagination,
  remarks,
  issbn,
  shelfnum
}) {

  db.update({
    _id: id
  }, {
    bookid: bookid,
    acnum: acnum,
    booktittle: booktittle,
    authornamee: authornamee,
    publishername: publishername,
    publishplace: publishplace,
    yearofpublishing: yearofpublishing,
    pagination: pagination,
    remarks: remarks,
    issbn: issbn,
    bcasenum: bcasenum,
    shelfnum: shelfnum
  }, {}, function(err, numReplaced) {
    //console.log(bookid.value);
    // console.log(booktittle.value);
    //console.log(_id);
    // console.log(id);
    // Do nothing
  });

}
exports.updateIssuedBook = function(id, {
  bookid,
  userid,
  renew_date
}) {

  db1.update({
    _id: id
  }, {
    bookid: bookid,
    userid: userid,
    renew_date: renew_date
  }, {}, function(err, numReplaced) {



  });
}
// Update a person
exports.updateUser = function(id, {
  userid,
  uname,
  udesignation,
  uemail,
  uphone,
  udept,
  uip
}) {
  db2.update({
    _id: id
  }, {
    userid: userid,
    uname: uname,
    udesignation: udesignation,
    uemail: uemail,
    uphone: uphone,
    udept: udept,
    uip: uip
  }, {}, function(err, numReplaced) {
    // numReplaced = 1
    // The doc #3 has been replaced by { _id: 'id3', planet: 'Pluton' }
    // Note that the _id is kept unchanged, and the document has been replaced
    // (the 'system' and inhabited fields are not here anymore)
  });
}

exports.issueabook = function(bookid, userid, issued_date, renew_date) {
  //create the book object
  var issuedbook = [{
    "bookid": bookid,
    "userid": userid,
    "issued_date": issued_date,
    "renew_date": renew_date,

  }];
  //save the book to the database
  db1.insert(issuedbook, function(err, newDoc) {

    //do nothing
  })


};
exports.bookcount = function(fnc) {

  db.count({}, function(err, count) {

    //console.log(count);
    localStorage.setItem("bookcount", count);




  });




};
exports.usercount = function(fnc) {

  db2.count({}, function(err, count) {

    //console.log(count);
    localStorage.setItem("usercount", count);




  });




};
exports.issuedbookcount = function(fnc) {

  db1.count({}, function(err, count) {

    //console.log(count);
    localStorage.setItem("issuedbook", count);




  });




};
