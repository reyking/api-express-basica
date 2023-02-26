const path = require("path");

module.exports = function (req, res) {
    let archivo = 'public/a.PNG'
    res.status(200).sendFile(path.resolve(archivo))
}