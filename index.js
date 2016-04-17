
'use strict';

var verbs = require('./verbs.json');
var nouns = require('./nouns.json');

var getstr = (action) =>
	`${verbs[action.type]} ${nouns[action.itemType]} ${action.itemPath}`;

module.exports = getstr;
