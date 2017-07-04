function downloadImageByURL(url, filePath) {
  var fs = require('fs');
var request = require('request');


  request.get(url)               
         .on('error', function (err) {                                   
           throw err; 
         })
         .on('response', function (response) {                          
           console.log('Response Status Code: ', response.statusCode);
         })
         .pipe(fs.createWriteStream(filePath));               

}
downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")