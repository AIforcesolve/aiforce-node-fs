const fs = require('fs');

// BUG: Callback hell
function readData(cb) {
  fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
    if(err) throw err;
    cb(data);
  });
}

if (require.main === module) {
  readData((data) => console.log(data));
}

module.exports = { readData };
