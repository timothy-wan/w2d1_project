var http = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  http.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    if(response.statusCode !== 200) {
      console.log('HTTP GET query returned: ' + response.statusCode + " from server");
    } else {
      console.log('Query successfully responded to!');
    }
  });
}

getAndPrintHTMLChunks();