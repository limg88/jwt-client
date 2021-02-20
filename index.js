const express = require('express');
const jwtToken = require('./jwt-token');
const app = express();
const port = 3000;


app.get('/', async (req, res) => {
  let jwt = await jwtToken.getToken();
  res.status(jwt.status).send(jwt.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})