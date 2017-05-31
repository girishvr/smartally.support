const Tesseract = require('tesseract.js')
const request = require('request')
const fs = require('fs')
const filename = 'pic.png'

var writeFile = fs.createWriteStream(filename)

exports.ocr = (url) => {
  request(url).pipe(writeFile)
  .on('close', function() {
    console.log(url, 'saved to', filename)
    Tesseract.recognize(filename)
      .progress((p) => {
         console.log('progress', p)
       })
       .then((result) => {
         console.log(result.text);
       })
      .catch((err) => {
        console.error(err)
      });
  });
}
