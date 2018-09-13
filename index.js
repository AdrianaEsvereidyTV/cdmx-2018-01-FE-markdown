/* El módulo 'path' proporciona utilidades para trabajar con rutas de archivos y directorios. */
const path = require('path');
const fs = require('fs');

const checkUrl = readUrl => {
  console.log(readUrl);
  if (path.isAbsolute(readUrl) !== true) {
    console.log(readUrl);
  } else {
    let reading = path.resolve(readUrl);
    console.log(reading);
  }
};
checkUrl('./README.md');

const readingFile = callFile => {
  fs.readFile('README.md', 'utf8', (error, data) => {
    if (error) {
      console.log('error', err);
    } else {
      console.log(data);
    }
  });
};
readingFile(data => {
  console.log(data);
});


