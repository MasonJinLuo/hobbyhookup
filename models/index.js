'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var hobbyhookupdb        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    hobbyhookupdb[model.name] = model;
  });

Object.keys(hobbyhookupdb).forEach(function(modelName) {
  if (hobbyhookupdb[modelName].associate) {
    hobbyhookupdb[modelName].associate(hobbyhookupdb);
  }
});

hobbyhookupdb.sequelize = sequelize;
hobbyhookupdb.Sequelize = Sequelize;

module.exports = hobbyhookupdb;