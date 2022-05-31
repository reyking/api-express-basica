const path = require("path");

module.exports = function (req, res) {
    let archivo = 'public/Captura.PNG'
    // let archivo = 'Captura.PNG'
    res.status(200).sendFile(path.resolve(archivo))
    // res.status(200).sendFile(__dirname+'/'+ archivo)
// 

}