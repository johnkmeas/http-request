function getAndPrintHTMLChunks () {
  const http = require('http');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  http.get(requestOptions,(err, res) => {
    if(err){
      console.log(err)
    } else {
      console.log(data,'\n')
    }
  })
}
getAndPrintHTMLChunks()