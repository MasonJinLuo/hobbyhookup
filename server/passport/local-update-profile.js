// const User = require('mongoose').model('User');
// const PassportLocalStrategy = require('passport-local').Strategy;

//TODO:  Distinguish between username and email already taken in error, check password




  // db.User.findAll({ attributes: ['email'] }).then(function(data) {
  // db.User.findAll({ attributes: ['username', 'email'] }).then(function(data) {
  //   var exist_username = [];
  //   var exist_email = []
  //   for (key in data) {
  //     exist_username.push(data[key].dataValues.username);
  //     exist_email.push(data[key].dataValues.email);
  //   };
  //   if (exist_username.indexOf(userData.username) === -1 && exist_email.indexOf(userData.email) === -1) {
  //     db.User.create({
  //       username: userData.username,
  //       password: userData.password,
  //       // password: userData.hashedPassword,
  //       email: userData.email
  //       // first_name: userData.username,
  //       // last_name: userData.username,
  //       // age: 42,
  //       // location: userData.username

  //     }).then(function() {
  //         // res.send(true);
  //         // alert("Succesfully registered, please log in.")
  //         console.log("Succesfully registered, please log in.")
  //         return done(null)
  //       });
  //     } else {
  //       // alert("Error: Existing user")
  //       var error = "existingUser"
  //       console.log("Error: Username or email exists in the system.")
  //       return done(error)
  //       // res.send('exist user');
  //     }
  // });

  // //TODO:  CONVERT THIS OUT OF JQUERY
  //   $.post("/newuser/post", userData, function(data){
  //     if (data===true){
  //       alert("Successfully registered, please log in.");
  //     }else if(data === "exist user"){
  //       alert("You've already registered before, please log in.")
  //     }else if(data === "invalid email"){
  //       alert("Invalid email.");
  //     };
      // $("#newuser-email").val("");
      // $("#pw-new").val("");
      // $("#pw-new-valid").val("");
      // $("#fact").val("");
    // });



});






//     app.post("/newuser/post", function(req, res) {
//         db.employ_basic.findAll({ attributes: ['email'] }).then(function(data) {
//             var hashedPassword;
//             var salt = bcrypt.genSaltSync(10);
//             var hashedPassword = bcrypt.hashSync(req.body.password, salt);
//             // bcrypt.genSaltSync(10, function(err, salt) {
//             //     bcrypt.hash(req.body.password, salt, function(err, hash) {
//             //         hashedPassword = hash;
//             //     });
//             // });
//             var valid_email = [];
//             for (key in data) {
//                 valid_email.push(data[key].dataValues.email)
//             };
//             console.log(valid_email[0]);
//             if (valid_email.indexOf(req.body.email) !== -1) {
//                 db.employ_option.findAll({ attributes: ['email'] }).then(function(data) {
//                     var exist_email = [];
//                     for (key in data) {
//                         exist_email.push(data[key].dataValues.email);
//                     };
//                     if (exist_email.indexOf(req.body.email) === -1) {
//                         db.employ_option.create({
//                             email: req.body.email,
//                             // password: req.body.password,
//                             password: hashedPassword,
//                             favorite: req.body.favorite
//                         }).then(function() {
//                             res.send(true);
//                         });
//                     } else {
//                         res.send('exist user');
//                     }
//                 });
//             } else {
//                 res.send('invalid email');
//             };
//         });

//     });



// module.exports = function(app) {
//   app.use(passport.initialize())
//   app.use(passport.session())

//   // passport.use(new LocalStrategy(
//   //   function(email, password, done) {
//   //     console.log("hitting passport")
//   //     db.employ_option.findOne({
//   //       where: {
//   //         'email': email
//   //       }
//   //     }).then(function (user) {
//   //       if (user == null) {
//   //         console.log("no user")
//   //         return done(null, false, { message: 'Incorrect credentials.' })
//   //       }
//   //       //TODO:  delete these 2 lines and uncomment the bcrypt lines once using bcrypt
//   //       if (user.password === password) {
//   //         console.log("logged in")
//   //         return done(null, user)
//   //       }

//   //       // bcrypt.compare(password, user.password, function(err, res) {
//   //       //   console.log(res);
//   //       //   if (res){
//   //       //     return done(null, user)
//   //       //   }
//   //       // });

//   //       //TODO: THE FOLLOWING is the sync version for bcrypt can remove once async works.
//   //       // var hashedPassword = bcrypt.hashSync(password, user.salt)
        
//   //       // if (user.password === hashedPassword) {
//   //       //   return done(null, user)
//   //       // }
//   //       console.log("wrong password")
//   //       return done(null, false, { message: 'Incorrect credentials.' })
//   //     })
//   //   }
//   // ))

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