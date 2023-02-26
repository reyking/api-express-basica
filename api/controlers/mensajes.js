module.exports = function (req, res) {
    //el end indica que la respuesta es enviada a quien consulta
    const { mensaje } = req.params
    res.status(200).json(mensaje).end();
    console.log(req);

}