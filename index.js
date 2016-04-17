
'use strict';

var verbs = require('./verbs.js');
var nouns = require('./nouns.js');

var getstr = (action) =>
	`${verbs[action.type]} ${nouns[action.itemType]} ${action.itemPath}`;

module.exports = getstr;
