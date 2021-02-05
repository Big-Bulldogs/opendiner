const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = process.env.PORT || 3005;
import passport from './config/passport';
var session = require("express-session");

const db = require("./models/schema");


const app = express();

app.use(logger("dev"));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
//Not sure how to configure this yet
// app.get("/", function (req, res) { 
//   res.sendFile(__dirname + "/public/login.html");
// });

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/opendiner", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
require('./routes/api-routes')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});