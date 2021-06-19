// npm - global command, comes with node
// npm --version gives out the version of npm

// local dependency - use it only in this particular project
// npm i <packageName> installs the package you want to use

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores information about the project and the package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything by default)
// Your package name has to be unique - you can't publish it if our name is already taken in the npm.

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems[0]);