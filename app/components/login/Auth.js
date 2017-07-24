// const jwt = require('jsonwebtoken');
// db = require('../../../models')
// const config = require('../../../config');

class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  // static getUser() {
  //   var token = localStorage.getITem('token');
  //   return jwt.verify(token, config.jwtSecret, (err, decoded) => {
  //   // catch errors
  //   if (err) {
  //     console.log("error with getUser token")
  //     throw err
  //   }

  //   const userId = decoded.sub;

  //   // check if a user exists
  //   // return db.User.findById(userId, (userErr, user) => {
  //   //   if (userErr || !user) {
  //   //     return res.status(401).end();
  //   //   }

  //   //   return next();
  //   // });

  //   return db.User.findById(userId).then(function (user) {
  //       if (!user) { 
  //         console.log("no user")
  //         // return done(null, false, { message: 'Incorrect credentials.' })
  //         return 'error'
  //       }
  //     return user;
  //   });
  // });
  // }
}

export default Auth;