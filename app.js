// const dbConnect = require("./data/User").dbConnect;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var expressValidator = require('express-validator');
var shareData = require('./shareData');

const app = express();
const session = require("express-session");
const MongodbSession = require("connect-mongodb-session")(session);

const PORT = process.env.PORT || 8080;
// const MongoClient = require('mongodb').MongoClient;

// const URI =
// "mongodb+srv://rashidtvmr:Mass94877348@mycluster-ztbvh.mongodb.net/newtask";
const URI = "mongodb://localhost:27017/test";

app.set("view engine", "ejs");
app.set("views", "views");

const store = new MongodbSession({
  uri: URI,
  collection: "sessions"
});

app.use(
  session({
    secret: "No one is perfect",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

const formRoute = require("./routes/form");
// const adminRoute = require("./routes/admin");
const users = require("./routes/users");
const postdetail = require("./routes/post")
const commentdetails =require("./routes/comments");
// const controller = require("./controller/user");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static("./public"));



///form/getprod/:prodId
app.use("/", formRoute);
app.use("/forms", users);
app.use("/dashboard",users);
app.use("/post",postdetail);
app.use("/comment",commentdetails);




app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
mongoose
  .connect(URI)
  .then(result => {
    console.log("Db Start");
  })
  .catch(err => {
    console.log(err);
  });