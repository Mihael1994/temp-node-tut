// GLOBALS - NO WINDOW !!!
// Why? Because there is no browser, therefore there is no BOM Manipulation!
// Web APIs like Geolocation also don't work, beaucse it is a built in Browser API! And because there is no Browser to work with...
// The App will crash if you use window.

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about enviroment where the program is being executed

console.log(__dirname); // Returns freeCodeCamp.org, the folder
