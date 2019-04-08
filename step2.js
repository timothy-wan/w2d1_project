var http = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  http.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    if(response.statusCode !== 200) {
      console.log('HTTP GET query returned: ' + response.statusCode + " from server");
    } else {
      var buffer = '';

      response.on('data', function(data) {
        buffer += data;
      });

      response.on('end', function(data) {
        console.log(buffer);
      });
    }
  });
}

getAndPrintHTML();