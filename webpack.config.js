// path elemento de node
const path = require('path');

// objeto con la configuracion deseada
module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: './src/index.js',
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, 'dist'),
        // filename le pone el nombre al archivo final
        filename: 'main.js '
    },
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    resolve: {
        extensions: ['.js']
    }
}