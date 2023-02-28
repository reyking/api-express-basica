const archivos = require('./controlers/archivos');
const mensaje = require('./controlers/mensajes')

const spawn = require("child_process").spawn;

module.exports = function routes(app) {
//node tmabien puede editar excel

    //definicion de cada ruta, de mas especifico(larga) a mas generarl(corta)
    //se puede definir multiples funciones por cada get/post/put/delete ej:
    // app.get('/algo',funcion(req,res),segunda_funcion(req,res))
    app.post('/nombre', function ingresar(req, res) {
        console.log(req.body);
        //ejecutar script de python, permite arguemntos, ayi pasarle el nombre
        const pythonProcess = spawn('python', ["./api/algo.py"]);
        //recurara data mediante prints de python
        pythonProcess.stdout.on('data', (data) => {
            console.log('data recibida del python: ' + data)
        });

        res.redirect('/')
    });
    app.get('/registrar', function registrar(req, res) { 
        //aca va mas funcioanblidades
    });
    app.get('/', function principal(req, res) {
        res.send(
            `<html>
            <body>
                <h1>Ingresa tu nombre:</h1>
                <form method="post" action="/nombre">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                    <input type="submit" value="Enviar" />
                </form>
            </body>
        </html>`
        );

    });

}