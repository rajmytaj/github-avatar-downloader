var request = require('request');

console.log('welcome to the github avatar downloader');

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});