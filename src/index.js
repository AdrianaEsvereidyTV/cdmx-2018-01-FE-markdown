/* let name = 'Esvereidy';
console.log(`Hola ${name}`); */

const fs = require('fs');

readFile = (callback) => {
    fs.readFile('./README.md', 'uttf8',(err, data =>{
        if (err){
            callback(data)
        }
    }))
} 
readFile(data => {
    console.log(data);
}); 

/* const fs = require('fs')
result = undefined
 
function countLines(cb) {
 
        fs.readFile('./src/README.md','utf8', function doneReading(err, fileContents) {
 
        result = fileContents.toString().split('\n').length - 1
 
        cb()
 
        })
 
 }
 
function logMyResult() {
  console.log(result)
}
 
countLines(logMyResult) */
 
