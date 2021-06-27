const http = require("http");
const express = require('express');
const path    = require('path');
const app = express();
const PORT      = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');
const rutasMain = require('./routers/main.js');
app.use( express.static( publicPath ));

//Configuracion de EJS
app.set('view engine', 'ejs');
/**
 * Forma cuando las vistas estan en views solamente
 * app.set('views', path.join(__dirname, 'views'));
 */
// forma en carpeta[]
//app.set('views', './views/main/');
app.set('views', path.join(__dirname, 'views'));

//Utilizacion de MVC
app.use('/', rutasMain);

// Servidor escuchando
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});