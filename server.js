// server.js

const http = require('http');
const url = require('url');
const fs = require('fs');
const calculadora = require('./calculadora');

const server = http.createServer(function (req, res) {
  const urlObj = url.parse(req.url, true);
  const { num1, num2, operacion } = urlObj.query;

  if (urlObj.pathname === '/calcular' && num1 && num2 && operacion) {
    const resultado = calculadora.calcular(parseFloat(num1), parseFloat(num2), operacion);

    fs.readFile('./calculadora.html', 'utf8', function (err, data) {
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
    res.end('Por favor, ingrese números y una operación válida en la URL.');
  }
});

server.listen(8080, function () {
  console.log('Servidor en ejecución en http://localhost:8080/');
});
