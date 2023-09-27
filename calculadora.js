// calculadora.js

function calcular(num1, num2, operacion) {
  switch (operacion) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      if (num2 === 0) {
        return 'Error: División por cero';
      }
      return num1 / num2;
    default:
      return 'Operación no válida';
  }
}

module.exports = {
  calcular,
};
