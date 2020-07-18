const express = require('express');
const path = require('path');
// const auth = require('./server/auth.js');
const app = express();
const port = process.env.PORT || 8080;

      // Thanks to https://www.sitepoint.com/local-authentication-using-passport-node-js/


      /*  EXPRESS SETUP  */

//      app.use(express.static(__dirname));
      const bodyParser = require('body-parser');
      const expressSession = require('express-session')({
        secret: '0123456789',
        resave: false,
        saveUninitialized: false
      });

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(expressSession);

      /* PASSPORT SETUP */

      const passport = require('passport');

      app.use(passport.initialize());
      app.use(passport.session());

      /* MONGOOSE SETUP */

      const mongoose = require('mongoose');
      const passportLocalMongoose = require('passport-local-mongoose');

      mongoose.connect('mongodb://localhost/Users',
        { useNewUrlParser: true, useUnifiedTopology: true });

      const Schema = mongoose.Schema;
      const UserSchema = new Schema({});

      // In mongo:  db.user.find()
      UserSchema.plugin(passportLocalMongoose, {
        // Set usernameUnique to false to avoid a mongodb index on the username column!
        usernameUnique: false,

        findByUsername: function(model, queryParameters) {
          // Add additional query parameter - example AND condition - active: true
          // queryParameters.active = true;
          return model.findOne(queryParameters);
        }
      });
      const User = mongoose.model('User', UserSchema);

      /* PASSPORT LOCAL AUTHENTICATION */

      // Setup passport-local LocalStrategy with the correct options
      passport.use(User.createStrategy());

      // use static serialize and deserialize of model for passport session support
      passport.serializeUser(User.serializeUser());
      passport.deserializeUser(User.deserializeUser());

      /* REGISTER SOME USERS - Do just once, then comment out */

//      Users.register({username:'aboardwithabag@gmail.com'}, 'aboardwithabag@gmail.com');

/*
  // to create user?
  const user = new DefaultUser({username: 'user'});
  await user.setPassword('password');
  await user.save();
  const { user } = await DefaultUser.authenticate()('user', 'password');
 */

      /* ROUTES */



app.use(express.static(path.join(__dirname, 'build')));

// Main consulting site
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// handling user sign up
app.post("/api/users/register/", function(req, res){

  User.register({username: req.body.username}, req.body.password, function(err, user) {
    if (err) { console.error(err); }

    User.authenticate(req.body.username, req.body.password, function(err, result) {
      if (err) { console.error(err); return; }

      console.log(result);
      res.json(result);
    });
  });

});

// Get user info for login
// MUST BE CHANGED TO ACCEPT POST REQUEST
app.get('/api/users/', function(req, res) {
  res.json({user:"Joe"});
});

// See https://github.com/saintedlama/passport-local-mongoose
app.post('/api/users/', function(req, res){
    console.log("posted.");
    User.authenticate(req.body.username, req.body.password, function(err, result) {
      if (err) { console.error(err); return; }

      console.log("authenticated?");
      if (result) { console.log('Result: ' + result); }
      res.json(result);
    });
});

app.listen(port, console.log(`Server listening on port ${port}`));
