var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

function printReverse2 (html) {
  var data = '';
  for(i = html.length - 1; i >= 0; i--) {
    data += html[i];
  }
  console.log(data);
}
getHTML(requestOptions, printReverse2);