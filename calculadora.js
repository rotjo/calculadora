class Calculadora {
  sumar (a, b) {
    return a + b;
  }

  restar (a, b) {
    return a - b;
  }
}

var calculadora = new Calculadora();

var resultado = calculadora.sumar(2, 2);

console.log(resultado);
