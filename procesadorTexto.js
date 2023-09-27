// procesadorTexto.js

function dividirPalabras(texto) {
    return texto.split(' ');
  }
  
  function extraerTexto(texto, inicio, fin) {
    return texto.substring(inicio, fin);
  }
  
  function eliminarEspacios(texto) {
    return texto.replace(/\s+/g, '');
  }
  
  function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
  function convertirMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  function convertirMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  function contarCaracteres(texto) {
    return texto.length;
  }
  
  module.exports = {
    dividirPalabras,
    extraerTexto,
    eliminarEspacios,
    capitalizar,
    convertirMinusculas,
    convertirMayusculas,
    contarCaracteres,
  };
  