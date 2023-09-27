// server.js

const http = require('http');
const url = require('url');
const fs = require('fs');
const procesadorTexto = require('./procesadorTexto');

const server = http.createServer(function (req, res) {
  const urlObj = url.parse(req.url, true);
  const { texto, accion } = urlObj.query;

  if (urlObj.pathname === '/procesar' && texto && accion) {
    let resultado;

    switch (accion) {
      case 'dividir':
        resultado = procesadorTexto.dividirPalabras(texto).join(', ');
        break;
      case 'extraer':
        resultado = procesadorTexto.extraerTexto(texto, 0, 5);
        break;
      case 'eliminarEspacios':
        resultado = procesadorTexto.eliminarEspacios(texto);
        break;
      case 'capitalizar':
        resultado = procesadorTexto.capitalizar(texto);
        break;
      case 'minusculas':
        resultado = procesadorTexto.convertirMinusculas(texto);
        break;
      case 'mayusculas':
        resultado = procesadorTexto.convertirMayusculas(texto);
        break;
      case 'contarCaracteres':
        resultado = procesadorTexto.contarCaracteres(texto);
        break;
      default:
        resultado = 'Acción no válida';
    }

    fs.readFile('./palabra.html', 'utf8', function (err, data) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const htmlString = data.replace('{resultado}', resultado);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlString);
      }
    });
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Por favor, proporcione un texto y una acción válida en la URL.');
  }
});

server.listen(8080, function () {
  console.log('Servidor en ejecución en http://localhost:8080/');
});
