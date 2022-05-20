const http = require('http')
const fs = require("fs")

http.get('http://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
    fs.appendFileSync("text.txt", String(data), 'utf-8')
  });
  

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    
  })
  

})