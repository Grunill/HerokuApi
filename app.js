const express = require('express');

const app = express();
const cors = require('cors');

//MIDDLEWARES
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World');
})

//LISTEN
app.listen(process.env.PORT || 3000);