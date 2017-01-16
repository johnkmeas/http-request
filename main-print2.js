const http = require('http');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTML(options) {

  /* Add your code here */

  http.get(options, function(res) {
      // set encoding of received data to UTF-8
    res.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    res.on('data', function (data) {
      var chunk = '';
      chunk += data;
      console.log(chunk, '\n')
    });

    res.on('end', function() {
      console.log('Response stream complete.');
    });
  })
}
getAndPrintHTML(options)