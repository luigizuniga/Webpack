// path elemento de node
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// objeto con la configuracion deseada
module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: './src/index.js',
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
          }
    },
    module: {
        rules: [
            {
                // Test declara la regla con extensión de archivos js
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
                // Regla aplicada a las imagenes en formato png
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                //Regla aplicacda a las fuentes
                test: /\.(woff|woff2)$/,
                //url-loader, transforma archivos en URI base64.
                use : {
                    loader: 'url-loader',
                    options: {
                        // limit => limite de tamaño
                        limit: 10000,
                        // Mimetype => tipo de dato
                        mimetype: "application/font-woff",
                        // name => nombre de salida
                        name:"[name].[contenthash].[ext]",
                        // outputPath => donde se va a guardar en la carpeta final
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false
                    }
                }
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
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        // Configuracion del Plugin CSS
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src", "assets/images"),
                to: "assets/images"
              }
            ]
        }),
        new Dotenv()
    ],
    optimization: {
        // minificacion de css
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}