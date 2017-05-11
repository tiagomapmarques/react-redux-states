
const connect = require('./src/connect');
const createStore = require('./src/store');
const structReducer = require('./src/struct-reducer');

const config = require('./src/config');
const configure = config.configure;
const configuration = config.configuration;

module.exports = { connect, createStore, structReducer, configure, configuration };
