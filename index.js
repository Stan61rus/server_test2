const express = require("express");  
const app = express();

app.get('/', function (req, res) {
    const filename = req.query.filename || "file"
    res.download('file.doc', filename + ".doc")
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });