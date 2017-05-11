
const connect = require('./src/connect');
const createStore = require('./src/create-store');
const structReducer = require('./src/struct-reducer');

const getConfig = require('./src/config');

module.exports = { connect, createStore, structReducer, getConfig };
