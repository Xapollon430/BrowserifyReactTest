const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "test";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  let collection = db.collection("inventory");
  collection.find({}).toArray(function (err, docs) {
    console.log("Found the following records");
    console.log(docs);
  });

  client.close();
});
