'use strict';

/*
 * Module dependencies.
 */

var cookie = require('component-cookie');

/**
 * Clear cookies.
 */
function clearCookies() {
  var cookies = cookie();
  // eslint-disable-next-line guard-for-in
  for (var name in cookies) {
    cookie(name, '', { path: '/' });
  }
}

/*
 * Exports.
 */

module.exports = clearCookies;
