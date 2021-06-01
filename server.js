require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile('./build/index.html', { root: __dirname })
})

app.listen(process.env.PORT, () => {
  console.log('server listening at', process.env.APP_PORT)
})
