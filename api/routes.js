const archivos = require('./controlers/archivos');
const mensaje = require('./controlers/mensajes')

module.exports = function routes(app){
    app.get('/v1/mensaje/:mensaje', mensaje);
    app.get('/v1/archivo', archivos);
    app.get('/v1*', (req, res) => {
        res.status(200).json("hola, este metodo no esta implementado").end();
        console.log(req);
    })
}