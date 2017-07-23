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

	var promises = [findMessages('TomCat', 'OdyMon'), findMessages('OdyMon', 'TomCat')];
	Promise.all(promises).then(function(response){
		res.json(response)

	});


	});
}