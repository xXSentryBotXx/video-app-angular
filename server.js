const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/animate', express.static(path.join(__dirname, '/node_modules/animate.css/')));
app.use('/angular', express.static(path.join(__dirname, '/node_modules/angular/')));
app.use('/angular-router', express.static(path.join(__dirname, '/node_modules/@uirouter/angularjs/release/')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log('Server listening at port ' + PORT);
});
