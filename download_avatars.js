var args = process.argv.slice(2);


var request = require('request');

console.log('welcome to the github avatar downloader');

var GITHUB_USER = args[0];
var GITHUB_TOKEN = args[1];

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'blah blah'
    }
  };

  request(options, function (error, response){
    try {
      // data = JSON.parse(body);
      // for (const prop in data){
      //   console.log(prop);
      // }
      
      //console.log(JSON.parse(response.body));
      cb(error, JSON.parse(response.body)); 
    } catch (err) {
      console.log(err);
      console.log('Failed to parse content body');
    }
  });

} 



getRepoContributors('jquery', 'jquery', function(err, result) {
  
  result.forEach(function(item){
    //console.log(item);
    downloadImageByURL(item.avatar_url,"./avatars/"+item.id+".jpg");
  });

  
});

function downloadImageByURL(url, filePath) {
  var fs = require('fs');

  request.get(url)               
         .on('error', function (err) {                                   
           console.log(err); 
         })
         .on('response', function (response) {                          
           console.log('download successful');
         })
         .pipe(fs.createWriteStream(filePath));               

}

  
  

