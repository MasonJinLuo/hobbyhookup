const express = require('express');

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

module.exports = router;