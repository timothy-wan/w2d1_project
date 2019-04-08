module.exports = function getHTML (options, callback) {
    var http = require('https');
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
};