require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const express = require('express')

const app = express()

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {
  res.sendFile('./build/index.html', { root: __dirname })
  // res.send('ok')
})

app.listen(process.env.APP_PORT, () => {
  console.log('server listening at', process.env.APP_PORT)
})
