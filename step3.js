var http = require('https');
function getAndPrintHTML (options) {

  http.get(options, function(response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);