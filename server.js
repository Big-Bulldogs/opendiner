const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = process.env.PORT || 3005;

const db = require("./models/schema");


const app = express();

app.use(logger("dev"));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/opendiner", { useNewUrlParser: true });

app.post('/newrestaurant', ({body}, res) => {
    db.Restaurant.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});