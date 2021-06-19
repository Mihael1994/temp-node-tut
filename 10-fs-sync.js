// There are two ways of the fileSystem: Synchronous + Blocking and Asynchronous + Nonblocking.
const {readFileSync, writeFileSync} = require('fs'); // Destructure from fileSystem; Get what you need by destructuring. It's the same as:

// const fs = require('fs)
// fs.readFileSync

// WITH DESTRUCTURING, YOU SAVE LINES OF CODE AND TIME!
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8'); // Synchronously read file, and show it in utf-8. STORE IT IN CONSTANT
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', // choose where to write, and WHAT to write.
    `Here is the result ${first}, ${second}`, 
    {flag: 'a'} // This flag appends.
);

console.log('Done with this task.');
console.log('Starting the next one');