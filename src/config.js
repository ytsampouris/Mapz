"use strict";

var path = require('path');

// var config = {
//   PORT: process.env.OPENSHIFT_NODEJS_PORT || 8000,
//   IPADDRESS: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
//   TILES_DIR: process.env.OPENSHIFT_DATA_DIR || path.join(__dirname, '/data'),
//   MAP_DIR: path.join(__dirname, '/static/map'),
// }

var config = {
  PORT: 8080,
  IPADDRESS: '127.0.0.1',
  TILES_DIR: path.join(__dirname, '/maps'),
  MAP_DIR: path.join(__dirname, '/client/dist'),
}

module.exports = config;
