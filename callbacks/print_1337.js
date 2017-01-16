var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  /* Write your code here! */
  //a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
  newStr = html.replace(/a/gi, 4).replace(/e/gi, 3).replace(/ck/gi, 'x').replace(/er/gi, '0r').replace(/you/gi, 'j00').replace(/o/gi, 0).replace(/l/gi, 1)
  .replace(/s/gi, 5).replace(/t/gi, 7);
  console.log(newStr);
  // console.log(html);
}

getHTML(requestOptions, print1337);
