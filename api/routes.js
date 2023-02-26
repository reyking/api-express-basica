const archivos = require('./controlers/archivos');
const mensaje = require('./controlers/mensajes')

module.exports = function routes(app){
    //definicion de cada ruta, de mas especifico(larga) a mas generarl(corta)
    //se puede definir multiples funciones por cada get/post/put/delete ej:
    // app.get('/algo',funcion(req,res),segunda_funcion(req,res))
    app.get('/v1/mensaje/:mensaje', mensaje);
    app.get('/v1/archivo', archivos);
    app.get('/v1*', (req, res) => {
        res.status(200).json("hola, este metodo no esta implementado").end();
        console.log(req);
    })
}