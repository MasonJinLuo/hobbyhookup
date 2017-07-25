const express = require('express');
db = require('../../models')
const config = require('../../config');
const router = new express.Router();

router.get('/dashboard', (req, res) => {
	console.log (req)
	console.log (req.body)
	console.log (req.message)
	console.log (req.username)
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    username: req.username,
    user: req.user
  });
});

router.get('/profile', (req, res) => {
  console.log('api.js start')
  console.log(req.user)
  res.status(200).json({
    user: req.user
  });
  console.log('api.js end')
});

router.get('/inbox', (req, res) => {
  console.log('api.js start')
  console.log(req.user)
  res.status(200).json({
    user: req.user
  });
  console.log('api.js end')
});

module.exports = router;