'use strict';

/**
 * Module Depedencies
 */

var clearCookies = require('../lib');
var assert = require('assert');

describe('clearCookies', function() {
  before(function() {
    // set the cookie
    document.cookie = 'han=solo';
    document.cookie = 'yolo=dolo';
  });

  it('should clear all cookies', function() {
    clearCookies();
    assert(!document.cookie);
  });
});
