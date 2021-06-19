const path = require('path');

console.log(path.sep); // Returns platform specific seperator. in Windows, it is '/'.

const filePath = path.join('/content', 'subfolder', 'test.txt'); // Returns the normalized path of test.txt
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename); // Returns the basename, in this case it's test.txt, because we got it in filePath. Would it be another file, it would
// give out the other file.

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // Returns the absolute path. Starts with Users/jovan/Desktop/ and then your appFolder, and so on.