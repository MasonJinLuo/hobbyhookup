const jwt = require('jsonwebtoken');
var db = require('../../models');
const config = require('../../config');


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // check if a user exists
    // return db.User.findById(userId, (userErr, user) => {
    //   if (userErr || !user) {
    //     return res.status(401).end();
    //   }

    //   return next();
    // });

    // return db.User.findById(userId).then(function (user) {
      return db.User.findOne({where: {id: userId}}).then(function (user){
        if (!user) { 
          console.log("no user")
          // return done(null, false, { message: 'Incorrect credentials.' })
          return res.status(401).end()
        } 
        if (user){       
          req.user = user;
          return db.User2Hobby.findAll({include: [db.Hobby], where: {user_id: userId}}).then(function(hobbies){
            req.user.dataValues.hobbyObject = {hobbies: []};
            if (hobbies){
              hobbyObject = {hobbies : hobbies};
              req.user.dataValues.hobbyObject = hobbyObject;
            }
            return db.Chat.findAll({where: {receiver: user.username}}).then(function(inboxChats){
            req.user.dataValues.inboxChatObject = {inboxChats: []};
            if (inboxChats){
              // req.user.dataValues.inboxChatObject = {inboxChats : inboxChats}
              inboxChatObject = {inboxChats : inboxChats};
              req.user.dataValues.inboxChatObject = inboxChatObject;
              // console.log(req.user);
              // console.log('returning next now')
              // return next();  
            }
            console.log('returning next now')
            return next();
          })
          
          })
        }
      // return next();
    });
  });
};