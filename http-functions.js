module.exports = function getHTML (options, callback) {
    /* Your code here */
  const http = require('https');

    http.get(options, function(res) {
        // set encoding of received data to UTF-8
      res.setEncoding('utf8');
      var chunk = '';
      // the callback is invoked when a `data` chunk is received
      res.on('data', function (data) {
        chunk += data;

      });

      res.on('end', function() {
        callback(chunk + '\n')
        console.log('Response stream complete.');
      });
    })
};