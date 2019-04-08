var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function print1337 (html) {
  var checkList = {
    a : '4',
    e : '3',
    l : '1',
    o : '0',
    s : '5',
    t : '7',
    'ck' : 'x',
    'er' : '0r',
    'you' : 'j00'
  }
  var convertedData = '';
  for(i = 0; i < html.length; i+= 3) {
    var data = html[i] + html[i + 1] + html[i + 2];
    var data2 = html[i] + html[i + 1];
    var data3 = html[i + 1] + html[i + 2];
    if(checkList[data]) {
      convertedData += checkList[data];
    } else if(checkList[data2]) {
      convertedData += checkList[data2] + html[i + 2];
    } else if(checkList[data3]) {
      convertedData += html[i] + checkList[data3];
    } else {
      for(j = 0; j < 3; j++) {
        var data = html[i + j];
        if(checkList[data]){
          convertedData += checkList[data];
        } else{
          convertedData += data;
        }
      }
    }
  }
  console.log(convertedData);
}



getHTML(requestOptions, print1337);