const http = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

function getHTML(options, cb){
  http.get(options, function(res) {
      // set encoding of received data to UTF-8
    res.setEncoding('utf8');
    var chunk = '';
    // the callback is invoked when a `data` chunk is received
    res.on('data', function (data) {

      chunk += data;
    });

    res.on('end', function() {
      cb(chunk + '\n')
      console.log('Response stream complete.');
    });
  })
}

function printHTML (html) {
  console.log(html);
}

getHTML(options, printHTML)