class Calculadora {
  sumar (a, b) {
    return a + b;
  }

  restar (a, b) {
    return a - b;
  }

  multiplicar (a, b) {
    return a * b;
  }

  dividir (a, b) {
    return a / b;
  }

  modulo(a, b) {
    return a % b;
  }

  joaquin() {
    return Date.now();
  }
}

var calculadora = new Calculadora();

var resultado = calculadora.sumar(2, 2);

console.log(resultado);
