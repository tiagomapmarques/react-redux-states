
const constants = require('./src/constants');
const structReducer = require('./src/struct-reducer');
const createStore = require('./src/store');
const connect = require('./src/connect');

module.exports = { connect, createStore, structReducer, constants };
