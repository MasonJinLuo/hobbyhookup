var db = require('../models');
var Sequelize = require('../models').sequelize;

module.exports = function(app) {
// suppose to get the most recent 3 people
app.get('/messages', function(req, res) {


	function findMessages( send, receive){
		return db.Chat.findAll({
			where: {
				sender: send,
				receiver: receive
			}
		});
	}

	var promises = [findMessages(req.query.sender , req.query.receiver), findMessages(req.query.receiver , req.query.sender)];
	Promise.all(promises).then(function(response){
		res.json(response)

	});


	});


app.post('/api/sendMessage', function(req, res){
	var newMessage = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        message: req.body.message
        };
	db.Chat.create(newMessage).then(() => {
		res.send("done")
	});
});











}



