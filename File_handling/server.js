var fs = require('fs')
//fs.writeFile('File.txt', 'Hello World', function (err, data) {
//if (err) throw err;
//fs.appendFile('File.txt', 'Hello Parth', function (err, data) {
//  if (err) throw err;
fs.readFile('File.txt', 'utf-8', function (err, data) {
    if (err) throw err;


    console.log(data);

})