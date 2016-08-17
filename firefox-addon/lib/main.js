'use strict';

var tabs = require('sdk/tabs');
var ContentScript = require('./content-script').ContentScript;

tabs.on('ready', function(tab) {
  var contentScript;
  if (tab.url.match(/^https:\/\/*/)) {
    contentScript = new ContentScript(tab);
    contentScript.inject(['form-fields.js', 'profile-data.js',
                          'form-autofill.js', 'index.js']);
  }
});
