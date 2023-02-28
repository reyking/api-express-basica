const express = require('express')
require('dotenv').config()
const routes  = require('./api/routes')
const app = express()
const path = require('path')


//acceso a la carpeta public de forma estatica, sin router
app.use('/static', express.static(path.join(__dirname, 'public')));
//confiuracion de rutas dentro de router
app.use(express.urlencoded());
routes(app)
app.listen(process.env.PORT);
console.log(`escuchando en puerto ${process.env.PORT}`)
