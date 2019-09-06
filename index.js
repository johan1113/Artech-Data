const express = require('express');
const hbs = require('express-handlebars');
const app = express();

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

/*
// Requiring fs module in which 
// readFile function is defined. 
const file = require('file-system');
const fs = require('fs');

var headers;

function processData(allText, dataUsers) {
    var allTextLines = allText.split('\n');
    headers = allTextLines[0].split(',');
    for (let index = 1; index < allTextLines.length; index++) {
        const user = allTextLines[index].split(',');
        dataUsers.push(user);
    }
}
*/

//defninir ruta root o principal
app.get('/', function (request, response) {
    console.log("home");
    response.render('home', {layout: false});
});

app.listen(7000);