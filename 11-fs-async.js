const {readFile, writeFile} = require('fs');

console.log('start'); // This one is right at the beginning, so it begins with this.
readFile('./content/first.txt', 'utf-8', function(err, content) { // If you do not provide a
    if(err) {
        console.log(err);
        return;
    };
    const first = content;
    readFile('./content/second.txt', 'utf-8', function(err, content) {
        if(err) {
            console.log(err);
            return;
        };
    const second = content;
    writeFile('./content/result-async.txt',
    `Here is the result: ${first}, ${second}`, function(err, content) {
    if(err) {
        console.log(err);
        return;
    }
    console.log('done with this task'); // this one is asynchronous, so it will be offloaded later (when it's done)
            }
        );
    });
});
console.log('starting next task'); // because the last one was offloaded and the app continues in the code, it will first write
// starting next task and then done with task.

// This is called a callback hell: a function inside a function, inside an if, and so on. It is advised to search for alternatives, as
// things can get out of hand very fast.

// ALTERNATIVES ARE USING async await OR promises.