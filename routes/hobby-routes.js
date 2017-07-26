var db = require('../models');
var Sequelize = require('../models').sequelize;

module.exports = function(app) {
    // Match People for Bee Keeping
 app.get('/api/beekeeping', function(req, res) {

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


        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });

// ===========================================================================================================

    // Match People for Speed Reading
 app.get('/api/speedreading', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 2,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


// ===========================================================================================================

    // Match People for Rock Climbing
 app.get('/api/rockclimbing', function(req, res) {
    
    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 3,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


// ===========================================================================================================




    // Match People for Mixing Music
 app.get('/api/mixingmusic', function(req, res) {
    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 4,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });

// ===========================================================================================================





    // Match People for Bird Watching
 app.get('/api/birdwatching', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 5,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }


        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


// ===========================================================================================================





    // Match People for Cycling
 app.get('/api/cycling', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 6,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


// ===========================================================================================================


    // Match People for Body Building
 app.get('/api/bodybuilding', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 7,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });



// ===========================================================================================================


    // Match People for Beer Tasting
 app.get('/api/beertasting', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 8,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });



// ===========================================================================================================


    // Match People for Parkour
 app.get('/api/parkour', function(req, res) {
    
    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 9,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }
        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });

// ===========================================================================================================

    // Match People for Photography
 app.get('/api/photography', function(req, res) {

    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 10,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });



// ===========================================================================================================

    // Match People for Salsa Dancing
 app.get('/api/salsadancing', function(req, res) {
    
    function findRandom(level){
        return db.User2Hobby.findAll({ 
            include: [db.User, db.Hobby],
            where: {hobby_id: 11,
                    level: level},
            order: [
            Sequelize.fn( 'RAND' ),
            ],
            limit: 1 
        })
    }

        var promises = [findRandom('Novice'), findRandom('Intermediate'), findRandom('Expert')];
        Promise.all(promises).then(function(response) {
            res.json(response);
        });
    });


// ===========================================================================================================



app.post('/api/addHobby', function(req,res){
    var addHobby = {
        level: req.body.level,
        user_id: req.body.user_id,
        hobby_id: req.body.hobby_id
        };
    db.User2Hobby.create(addHobby).then(() => {
        res.send("done")
    });
});



}
