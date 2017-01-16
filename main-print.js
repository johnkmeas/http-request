const http = require('http');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */



  http.get(requestOptions, function(res) {
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
getAndPrintHTML()