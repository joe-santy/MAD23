const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// Thanks to https://www.sitepoint.com/local-authentication-using-passport-node-js/
// See https://github.com/saintedlama/passport-local-mongoose

/*  EXPRESS SETUP for server */
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: '0123456789',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

/* PASSPORT SETUP for authentication */

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

/* MONGOOSE SETUP for database access */

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/MAD23',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) {
      console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
    }
  }
);

const Schema = mongoose.Schema;
const UserSchema = new Schema({});

// In mongo:  db.users.find()
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


const BlogSchema = new Schema({
  url: String,
  title : String,
  author : String,
  date : Date,
  content : String
});
const BlogPost = mongoose.model('BlogPost', BlogSchema);


/* PASSPORT LOCAL AUTHENTICATION */

// Setup passport-local LocalStrategy with the correct options
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* ROUTES */

app.use(express.static(path.join(__dirname, 'build')));

// Main consulting site
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});






// To load blog posts
app.get('/api/blog', function(req, res) {
  // Get blog posts
  let blogPosts = [];
  let getBlogPosts = BlogPost.find({})
    .cursor()
    .on('data', function(doc) {
      blogPosts.push([
        doc.url,
        doc.title,
        doc.author,
        doc.date,
        doc.content
      ]);
    })
    .on('end', function() { console.log(blogPosts);  res.send(blogPosts); });
  // console.log(blogPosts);
  // res.send({blogPosts : blogPosts});
});

// To properly load urls; the router is in ./src/Views.js
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// To add blog post
app.post('/api/blog', function(req, res) {
  // Add blog post
  const blogPost = new BlogPost({

    // Replace space with dash, lowercase.
    url : req.body.title.replace(/\s/g, '-').replace(/(?!-)\W/g, '').toLowerCase(),
    title : req.body.title,
    author : req.body.author,
    date : new Date().toISOString().slice(0,10),
    content : req.body.content
  });

  blogPost.save(function(err){
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(blogPost.url + ' saved.');
      res.send(blogPost.url + ' saved.');
    }
  });


});

// Handling user sign up
app.post("/api/users/register/", function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) { console.error(err); return; }
    console.log("Registered " + req.body.username);
    res.json({user:req.body.username});
  });
});

// Handling user login
app.post('/api/users/', passport.authenticate('local'), function(req, res){
  console.log("Authenticated " + req.body.username);
  res.json({user:req.body.username});
});

app.listen(port, console.log(`Server listening on port ${port}`));
