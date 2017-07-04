var request = require('request');

console.log('welcome to the github avatar downloader');

var GITHUB_USER = "";
var GITHUB_TOKEN = "";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  
  var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'blah blah'
  }
};

  request(options, function (error, response, body){
    try {
      const data = JSON.parse(body);
      for (const prop in data){
        console.log(prop);
      }
    } catch (err) {
      console.log('Failed to parse content body');
    }
  })
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
// console.log(requestURL);
