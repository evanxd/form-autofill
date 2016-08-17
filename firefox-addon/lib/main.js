'use strict';

var tabs = require('sdk/tabs');
var ContentScript = require('./content-script').ContentScript;

tabs.on('ready', function(tab) {  
  tab.url.match(/^https:\/\/*/) &&
    new ContentScript(tab).inject(['form-fields.js', 'profile-data.js',
                                   'form-autofill.js', 'index.js']);
});
