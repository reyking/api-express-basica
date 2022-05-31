const express = require('express')
const routes  = require('./api/routes')
const app = express()
const path = require('path')

routes(app)
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000)

console.log("iniciando")