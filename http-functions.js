module.exports = function getHTML (options, callback) {
    /* Your code here */
  const http = require('http');

    http.get(options, function(res) {
        // set encoding of received data to UTF-8
      res.setEncoding('utf8');

      // the callback is invoked when a `data` chunk is received
      res.on('data', function (data) {
        var chunk = '';
        chunk += data;
        callback(chunk + '\n')
      });

      res.on('end', function() {
        console.log('Response stream complete.');
      });
    })
};