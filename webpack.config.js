// path elemento de node
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// objeto con la configuracion deseada
module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: './src/index.js',
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, 'dist'),
        // filename le pone el nombre al archivo final
        filename: 'main.js'
    },
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
                // Test declara que extensión de archivos aplicara el loader
                test: /\m?js$/,
                // Exclude permite omitir archivos o carpetas especificas en este caso de node_modules
                exclude: /node_modules/,
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                // Nueva regla  extensión de archivos aplicara en css
                test: /\.css|.styl$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                ]
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        // Configuracion del Plugin HTML
        new HtmlWebpackPlugin({
            inject: true, // Inyecta el BUNDLE al TEMPLATE HTML
            template: './public/index.html', // Inyecta la Ruta del TEMPLATE
            filename: './index.html' // Nombre final que tendra el archivo transformado
        }),
               // Configuracion del Plugin CSS
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src", "assets/images"),
                to: "assets/images"
              }
            ]
          })
    ]
}