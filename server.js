const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
