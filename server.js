
const express = require('express');
const port = process.env.PORT || 3000;
// const port = 3000;



let app = express();

app.use(express.static(__dirname + '/'));




app.listen(port, () => {
  console.log('Listening on port 3000')
});
