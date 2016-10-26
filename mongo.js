'use strict'

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var create = function(obj1, obj2, db, callback) {
  // Get the documents collection
  var collection = db.collection('student');
  // Insert some documents
  collection.insertMany([obj1, obj2], function(err, result) {
    assert.equal(err, null);
    assert.equal(2, result.result.n);
    assert.equal(2, result.ops.length);
    console.log("Inserted 2 students into the student collection");
    callback(result);
  });
}

var read = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('student');
  // Find some documents
  collection.find({}).toArray(function(err, data) {
    assert.equal(err, null);
    assert.equal(7, data.length);
    console.log("Found the following records");
    console.dir(data);
    callback(data);
  });
}

var update = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('student');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}


var addStudent = function(obj1, obj2) {
  // Connection URL
  var url = 'mongodb://localhost:27017/academic';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    create(obj1, obj2, db, function (result) {
      console.log(result);
      db.close();
    })
  });
}

var showStudent = function() {
  // Connection URL
  var url = 'mongodb://localhost:27017/academic';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    read(db, function(students){
      console.log(students);
      db.close()
    })
  });
}




var updateStudent = function() {
  // Connection URL
  var url = 'mongodb://localhost:27017/academic';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    update(db, function(students){
      console.log(students);
      db.close()
    })
  });
}

var obj1 = {"name" : "yoni", "major":{"$ref":"major","$id":"ObjectId(58102930f5e84e4077af632c)","$db":"academic"}, "email":"yoni@gmail.com"}

var obj2 = {"name" : "ahmadi", "major":{"$ref":"major","$id":"ObjectId(58102ad3f5e84e4077af632d)","$db":"academic"}, "email":"ahmadi@gmail.com"}


// addStudent(obj1, obj2)
showStudent()
