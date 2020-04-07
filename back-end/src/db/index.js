const mongoose = require('mongoose');
const Config = require('../config/config');
const config = new Config();

// mongoose.webmg = mongoose.createConnection(`mongodb://${config.Mongo.RouteEngine.username}:${config.Mongo.RouteEngine.password}@${config.Mongo.RouteEngine.url}:${config.Mongo.RouteEngine.port}/${config.Mongo.RouteEngine.db}`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });
mongoose.webmg = mongoose.createConnection(config.Mongo.connectionString, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });
module.exports = mongoose
