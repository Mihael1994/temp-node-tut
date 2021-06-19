// Modules - Encapsulated Code (only share minimum)
// Node uses CommonJS, where every file is a module (by default)
// Do I need only one file for the app? YES and NO. You have smaller tidbits of code scattered through the root, so you don't jam ALL of your
// Code into one file.
const names = require('./4-names'); // One dot means one level (directory) up. Two dots two levels up. And so on...
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); // This one comes from the file, where the function has been invoked.

sayHi('Nikolina');
sayHi(names.mihael);
sayHi(names.milena);