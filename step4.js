var http = require('https');

function getHTML (options, callback) {

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
        callback(buffer);
      });
    }
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);