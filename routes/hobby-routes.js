var db = require('../models');
var Sequelize = require('../models').sequelize;

module.exports = function(app) {
 app.get('/beekeeping', function(req, res) {
 		var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


function findRandom(level){
	return db.User2Hobby.findAll({ 
        include: [db.User, db.Hobby],
        where: {hobby_id: 1,
                level: level},
        order: [
    	Sequelize.fn( 'RAND' ),
  		],
  		limit: 1 
        })
}

}
