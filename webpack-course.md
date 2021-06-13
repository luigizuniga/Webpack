# WEBPACK

[¿Qué es Webpack?](https://www.notion.so/Qu-es-Webpack-b1c715b34fcc48a4b9f2ba9d6f17d7ba)

[Conceptos Básicos](https://www.notion.so/Conceptos-B-sicos-3eb482cf3fe1457bb57611a41696021d)

[Tu primer Build con webpack](https://www.notion.so/Tu-primer-Build-con-webpack-a1a77400ee44451c92e867a3998cbd11)

[Instalación de Webpack y construcción del proyecto](https://www.notion.so/Instalaci-n-de-Webpack-y-construcci-n-del-proyecto-b9b92a212a0047969dfb42df9dd901db)

[Configuración de webpack config](https://www.notion.so/Configuraci-n-de-webpack-config-6bfdc599d5c44306861a7ac023e02475)

[Babel Loader para JavaScript](https://www.notion.so/Babel-Loader-para-JavaScript-ffb227ce1aaa40298e5f7115ed052043)

# ¿Qué es Webpack?

## Ideas/conceptos claves

**Module bundlers** son herramientas de Frontend que nos permiten usar archivos con módulos JavaScript, entre otras características y convertiros a un JavaScript el cual el navegador pueda entender

## Apuntes

- ***Webpack*** es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler)
- ***Webpack*** nos permite trabajar con
    - HTML
    - CSS
    - JavaScript
    - Archivos estáticos
    - Imágenes
    - Fuentes
- Tambien nos permite tener un modo en desarrollo para nuestros proyectos para hacer pruebas
- Nacio en el 2012, desde ese entonces varias empresas lo usan como ser
    - Twitter
    - Instagram
    - PayPal
- También nos permite
    - Gestionar dependencias
    - Ejecutar tareas
    - Conversión de archivos
- Nos permite trabajar en módulos
    - Permitiéndonos tener un código separado en desarrollo, pero en producción en una fuente
    - Webpack permite tener módulos de JS en formato
        - AMD
        - Common JS
        - ES15

**RESUMEN:** Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

# Conceptos Básicos

## Ideas/conceptos claves

**Webpack** es un paquete de módulos estáticos para aplicaciones de JS modernas

**Loader** Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

**Plugins** Extienden recursos para añadir configuraciones y particularidades de recursos externos

## Apuntes

- Webpack construye un gráfico de dependencias que mapea cada módulo para con verlo en uno o más módulos
- Desde webpack 4 ya no dependemos de tener un archivo de configuración, pero si debemos tener un punto de entrada
- Tambien tendremos que tener un punto de salida
    - En este punto se creará nuestro proyecto una vez esté preparado
    - Normalmente es la carpeta **dist** ⇒ Distribution
- Tambien contamos con diferentes modos
    - Modo de desarrollo
    - Modo de producción
    - Modos de performance
        - Donde tu añades
            - Configuraciones de minificación
            - Donde se va enviar
            - Carpeta de destino
    - Modos de desarrollo local
        - Donde puedes
            - Crear puertos específicos para tu proyecto
            - Ver cambios en tiempo real
- Dispone de loader y plugins permitiéndonos preparar particularidades de nuestro proyecto

# Tu primer Build con webpack

Creamos una carpeta como le quieras llamar(Bueno no! si eres de Windows te dejo este articulo cortito de los nombres de carpetas [PROHIBIDOS](https://www.fayerwayer.com/2020/07/windows-nombres-prohibidos-en-carpetas/#:~:text=Nombres%20prohibidos%20para%20crear%20carpetas%20y%20archivos%20en%20Windows&text=CLOCK%24.,%2C%20LPT7%2C%20LPT8%2C%20LPT9.) ) La creamos desde la terminal con **mkdir** y luego entramos a ella con **cd**

```jsx
mkdir curso-webpack
cd curso-webpack

```

una vez que entres a la carpeta inicializamos nuestro repositorio con **git**

```
git init

```

El paso que sigue es inicializar nuestro proyecto con npm y si no sabes de npm aqui esta el [curso](https://platzi.com/clases/npm/) del profesor

```
npm init -y

```

o si les da error “Invalid Name” usen para personalizar la configuración

```
npm init

```

y para abrir el proyecto **como flash** es poner en la terminal y les abre el editor ( si usas **VS CODE**)

```
code .

```

Crear directorio SRC con un archivo index.js para que luego sea detectado por el comando Webpack.

La carpeta **SRC** es el source de todo el proyecto ( index.js , imágenes, utils, assets, helpers, database, etc).

- * Instalación de Webpack**si no quieres escribir ese comando también puedes usar estela **i** de install

```
npm i webpack webpack-cli -D

```

o si usas **yarn** us

```
yarnadd webpack webpack-cli -D

```

Y luego ejecutamos webpack**npx** lo que hace es ejecutar paquetes directamente de npm, este viene instalado de npm

```
npx webpack

```

Al hacer esto webpack creo una carpeta llamada **dist**, esto lo hace por defecto webpack sin preguntarnos.**Modo de desarrollo**Por defecto webpack al compilar nuestro proyecto setea el modo “production” implícitamente pero podemos definirle el modo explícitamente corriendo:

```
npx webpack --mode production
npx webpack --mode development

```

La **diferencia** radica que el modo development deja el código mas legible para los desarrolladores pero con comentarios, el modo **production** deja el código comprimido y mas limpio para usarse.




# Instalación de Webpack y construcción del proyecto

## Pasos nuevo proyecto

1. Clonar el proyecto

    ```jsx
    git clone [https://github.com/gndx/js-portfolio.git](https://github.com/gndx/js-portfolio.git)
    ```

2. Instalar Webpack con npm o yarn

    ```jsx
    npm install webpack webpack-cli -D
    ```

    con Yarn

    ```jsx
    yarn add webpack webpack-cli -D
    ```


# Configuración de webpack config

El archivo de configuración nos va ayudar a poder establecer la configuración y elementos que vamos a utilizar en nuestro proyecto, este archivo se debe crear en la raiz con el nombre

```jsx
webpack.config.js
```

En este archivo debemos indicar

- El punto de entrada
- Hacia a donde a enviar la configuración de nuestro proyecto
- Las extensiones que vamos usar

ejemplo de configuración basica webpackconfig

```jsx
const path = require('path');

module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "main.js"
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js"]
  },
}
```

El comando para arrancar esta configuración es:

```jsx
npx webpack --mode production --config webpack.config.js
```

Para configurar una manera resumida este comando, ingresamos a nuestro package.json y añadimos el siguiente comando build en scripts:

```jsx
"scripts": {
		...
    "build": "webpack --mode production --config webpack.config.js"
  },
```

# Babel Loader para JavaScript

Babel permite hacer compatible tu código JavaScript con todos los navegadores solucionando problemas de compatibilidad

Se deben añadir las siguientes dependencias a nuestro proyecto:

```jsx
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

- **babel-loader**  permite usar babel con webpack
- **@babel/core** es babel en general
- **@babel/preset-env** permite usar las ultimas características de JavaScript
- **@babel/plugin-transform-runtime** te permite trabajar con eventos asincronos como  `async` y `await`

Debes crear el archivo de configuración de babel el cual tiene como nombre `.babelrc`

contenido `.babelrc`

```jsx
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

Para utilizar babel en webpack añadir la siguiente configuración en `webpack.config.js`

```jsx
module: {
rules: [{
*// Test declara que extensión de archivos aplicara el loader*
test: /\.js$/,
*// Exclude permite omitir archivos o carpetas especificas en este caso de node_modules*
exclude: /node_modules/,
*// Use es un arreglo u objeto donde dices que loader aplicaras*
use: {
	loader: 'babel-loader'
		}
	}]
}
```

Babel nos ayuda a transpilar el código JavaScript el cual todos los navegadores puedan entender Contiene “extensiones” o plugins las cuales nos permiten tener características más allá del JavaScript común.