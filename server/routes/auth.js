var express = require('express');
var validator = require('validator');
var passport = require('passport');

var router = new express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var db = require('../../models');
var config = require('../../config');

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  var errors = {};
  var isFormValid = true;
  var message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your ysername.';
  }

  if (!isFormValid) {
    console.log(isFormValid);
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  // let isFormValid = true;
  // let message = '';



  var isFormValid = true;
  var message = '';
  console.log(isFormValid)
  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your username.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;


    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    console.log(isFormValid)
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


function validateUpdateProfileForm(payload) {
  var errors = {};
  var isFormValid = true;
  var message = '';

  // if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
  //   isFormValid = false;
  //   errors.email = 'Please provide a correct email address.';
  // }

  // if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
  //   isFormValid = false;
  //   errors.password = 'Password must have at least 8 characters.';
  // }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!payload || typeof payload.age !== 'integer' || payload.age.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your age.';
  }

  if (!payload || typeof payload.location !== 'string' || payload.location.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your location.';
  }

  if (!payload || typeof payload.image_path !== 'string' || payload.location.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide a link to your avatar.';
  }


  if (!isFormValid) {
    console.log(isFormValid);
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}



router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      // if (err.name === 'MongoError' && err.code === 11000) {
      //   // the 11000 Mongo code is for a duplication email error
      //   // the 409 HTTP status code is for conflict error
      //   return res.status(409).json({
      //     success: false,
      //     message: 'Check the form for errors.',
      //     errors: {
      //       email: 'This email is already taken.'
      //     }
      //   });
      // }
      if (err === "existingUser"){
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.'
          }
        })
      }
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});




router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});


router.post('/updateprofile', (req, res, next) => {
  const validationResult = validateUpdateProfileForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    }); 
  }



/**
 * Return the Passport Local Strategy object.
 */
// module.exports = new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password',
//   session: false,
//   passReqToCallback: true
// }, (req, username, password, done) => {
  console.log("update hitting local-update passwordhash")
  console.log(req.body)
  var hashedPassword;
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password.trim(), salt);
  console.log("signup hitting local-signup post-passwordhash")
  const userData = {
    username: username.trim(),
    password: password.trim(),
    hashedPassword: hashedPassword,
    // name: req.body.name.trim()
    // email: req.body.email.trim()    
    age: req.body.age.trim(),
    location: req.body.location.trim(),
    image_path: req.boody.image_path.trim()

  };
  console.log(userData)

  // const newUser = new User(userData);
  // newUser.save((err) => {
  //   if (err) { return done(err); }

  //   return done(null);
  // });

  //TODO Find user and check password first

  db.User.update({
        age: userData.age,
        location: userData.location,
        image_path: userData.image_path
      }, {
          where: {
              username: username
          }
  }).then(function(data, err) {
    console.log(data)
    console.log(err)
    //TODO: do something with err
    return res.status(200).json({
       success: true,
       message: 'You have successfully updated your profile!'
    });
  });
});


//   return passport.authenticate('local-update-profile', (err) => {
//     if (err) {
//       // if (err === "existingUser"){
//       //   return res.status(409).json({
//       //     success: false,
//       //     message: 'Check the form for errors.',
//       //     errors: {
//       //       email: 'This email is already taken.'
//       //     }
//       //   })
//       // }
//       if (err.name === 'IncorrectCredentialsError') {
//         return res.status(400).json({
//           success: false,
//           message: err.message
//         });
//       }
//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: 'You have successfully updated your profile!'
//     });
//   })(req, res, next);
// });


module.exports = router;