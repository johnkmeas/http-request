const http = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options) {

  /* Add your code here */

  http.get(options, function(res) {
      // set encoding of received data to UTF-8
    res.setEncoding('utf8');
    var chunk = '';
    // the callback is invoked when a `data` chunk is received
    res.on('data', function (data) {

      chunk += data;

    });

    res.on('end', function() {
      console.log(chunk, '\n')
      console.log('Response stream complete.');
    });
  })
}
getAndPrintHTML(options)