var passport = require('passport'),
    jwt = require('jsonwebtoken'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs'),
    // EmployBasic = require('./models/employ_basic.js') may not need this at all
    db = require('../../models'),
    config = require('../../config');

module.exports = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  var userData = {
    username: username.trim(),
    password: password.trim()
  };
  console.log(userData.username)
  console.log(userData.password)

  //find a user by username
  // return db.User.findOne({where: ('username': userData.username}}, (err, user) =>{
  return db.User.findOne({where: {'username': userData.username}}).then(function(user) {
    // if (err) {
    //   console.log("errored out start of query")
    //   return done(err);
    // }
    if (!user) {
      var error = new Error('Incorrect username or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }
    var payload = {
      sub: user.id
    }
    var token;
    console.log(user.password)
    if (userData.password === user.password) {
      console.log("logged in")
      token = jwt.sign(payload, config.jwtSecret);
      const data = {
        username: user.username
      };
      return done(null, token, data)  
    }
    //TODO:  only necessary with bcrypt compare function, listed in entirety below
    // else if (err)
    //   throw err;
    else {
      console.log("incorrect password")
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';
      return done(error)
    }
  });
    //TODO:  Uncomment this once using real data with encryption instead of seed data
    // return function comparePassword (password, callback) {
    //   bcrypt.compare(password, user.password, function(err, res) {
    //       console.log(res);
    //       if (err)
    //           throw err;
    //       if (!res){
    //       console.log("wrong password")
    //       return done(error);
    //       // return done(null, false, { message: 'Incorrect credentials.' })
    //       }
    //       if (res){
    //         console.log("logged in")
    //         token = jwt.sign(payload, config.jwtSecret);
    //         return done(null, token, data);
    //         // return done(null, user)
    //       }
        
    //     })
    // }





})


// module.exports = function(app) {
//   app.use(passport.initialize())
//   app.use(passport.session())

  // passport.use(new LocalStrategy(
  //   function(email, password, done) {
  //     console.log("hitting passport")
  //     db.employ_option.findOne({
  //       where: {
  //         'email': email
  //       }
  //     }).then(function (user) {
  //       if (user == null) {
  //         console.log("no user")
  //         return done(null, false, { message: 'Incorrect credentials.' })
  //       }
  //       //TODO:  delete these 2 lines and uncomment the bcrypt lines once using bcrypt
  //       if (user.password === password) {
  //         console.log("logged in")
  //         return done(null, user)
  //       }

  //       // bcrypt.compare(password, user.password, function(err, res) {
  //       //   console.log(res);
  //       //   if (res){
  //       //     return done(null, user)
  //       //   }
  //       // });

  //       //TODO: THE FOLLOWING is the sync version for bcrypt can remove once async works.
  //       // var hashedPassword = bcrypt.hashSync(password, user.salt)
        
  //       // if (user.password === hashedPassword) {
  //       //   return done(null, user)
  //       // }
  //       console.log("wrong password")
  //       return done(null, false, { message: 'Incorrect credentials.' })
  //     })
  //   }
  // ))

//   passport.use(new LocalStrategy(
//     function(username, password, done) {
//       // process.nextTick(function() {
//       // console.log("hitting passport")
//       console.log(username)
//       db.user.findOne({ 
//         where: {
//           username: username
//         }
//       }).then(function (user) {
//         if (user == null) { 
//           console.log("no user")    
//           return done(null, false, { message: 'Incorrect credentials.' })
//         }
//         //TODO:  delete these 2 lines and uncomment the bcrypt lines once using bcrypt
//         // if (user.password == password) {
//         //   console.log("logged in")
//         //   return done(null, user)
//         // }

//         // bcrypt.compare(password, user.password, function(err, res) {
//         //   console.log(res);
//         //   if (res){
//         //     console.log("logged in")
//         //     return done(null, user)
//         //   }
//         // });

//         bcrypt.compare(password, user.password, function(err, res) {
//           console.log(res);
//           if (err)
//               throw err;
//           if (res){
//             console.log("logged in")
//             return done(null, user)
//           }
//           console.log("wrong password")
//         return done(null, false, { message: 'Incorrect credentials.' })
//         })
//         // .then(function(data){

        

//         //TODO: THE FOLLOWING is the sync version for bcrypt can remove once async works.
//         // var hashedPassword = bcrypt.hashSync(password, user.salt)
        
//         // if (user.password === hashedPassword) {
//         //   return done(null, user)
//         // }
//         // })
//         })

//     // })
//     }
//   ))



//   passport.serializeUser(function(user, done) {
//     done(null, user.username)
//   });

//   passport.deserializeUser(function(username, done) {
//     db.user.findOne({
//       where: {
//         username: username
//       }
//     }).then(function (user) {
//       if (user == null) {
//         done(new Error('Wrong user id.'))
//       }      
//       done(null, user)
//     })
//   })
// }