module.exports = function (req, res) {
    const { mensaje } = req.params
    res.status(200).json(mensaje).end();
    console.log(req);

}