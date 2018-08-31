/* let name = 'Esvereidy';
console.log(`Hola ${name}`); */
/* El módulo 'path' proporciona utilidades para trabajar con rutas de archivos y directorios. */
const path = require('path'); 
const fs = require('fs');

const checkUrl = (readUrl) => {
    console.log(readUrl);
    if(path.isAbsolute(readUrl) != true){
       console.log(readUrl); 
    } {
    let reading = path.resolve(readUrl);
    console.log(reading);
    
    } 
};
checkUrl('./README.md'); 

const readFile = (callback) => {
    fs.readFile('README.md', 'utf8',(err, data) =>{
        if (err){
            callback(data);
        }
        else{
            console.log(data);
        }
    })
}; 
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
 
