const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = process.env.PORT || 3005;
const passport = require('./config/passport');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
var session = require("express-session");
const db = require("./models");


const app = express();
AdminBro.registerAdapter(AdminBroMongoose)
app.use(logger("dev"));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  
  secret: 'hello world',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());



const run = async() => {
  const connection = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/opendiner", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false });

  const adminBro = new AdminBro({
    databases: [connection],
    rootPath: '/admin',
  })

  const router = AdminBroExpress.buildRouter(adminBro)
  app.use(adminBro.options.rootPath, router)
}
run()

if (process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
}
  



// mongoose.set('useFindAndModify', false);
require('./routes/api-routes')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});