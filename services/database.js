import mongoose from "mongoose";
import config from "../config.js";
mongoose.Promise = global.Promise;

let _db;

mongoose.connect(config.mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Check for db connection and starts the server
function connectDB() {
  _db = mongoose.connection;

  _db.once("open", () => {
    console.log("Connected to database");
  });

  _db.on("connected", function () {
    console.log("Mongoose connection open");
  });

  _db.on("error", (err) => {
    if (err) throw err;
  });

  _db.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
  });

  _db.on("reconnected", function () {
    console.log("Mongoose default connection reconnected.");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function () {
    _db.close(function () {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });

  return _db;
}

export default connectDB;
