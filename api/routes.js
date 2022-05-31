const archivos = require('./controlers/archivos');
const mensaje = require('./controlers/mensajes')

module.exports = function routes(app){
    app.get('/', (req, res) => {
        res.status(200).json("hola").end();
        console.log(req);
    })
    app.get('/mensaje/:mensaje', mensaje);
    app.get('/archivo', archivos);
}