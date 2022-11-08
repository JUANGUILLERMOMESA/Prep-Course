// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    return str;
  }
  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    var suma = x + y
    return suma;
  }
  
  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    var resta = x - y
    return resta;
  }
  
  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var multiplica = x * y
    return multiplica;
  }
  
  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    var divide = x / y
    return divide;
  }
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    var sonIguales = x===y;
    return sonIguales;
  }
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    var tienenMismaLongitud = str1.length == str2.length
    return tienenMismaLongitud;
  }
  
  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    var menosQueNoventa = num < 90
    return menosQueNoventa;
  }
  
  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    var mayorQueCincuenta = num > 50
    return mayorQueCincuenta;
  }
  
  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var obtenerResto = x % y
    return obtenerResto;
  }
  
  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    var esPar = num % 2 == 0;
    return esPar;
  }
  
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    var esImpar = num % 2 == 1;
    return esImpar;
  }
  
  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var elevarAlCuadrado = num ** 2;
    return elevarAlCuadrado;
  }
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    var elevarAlCubo = num ** 3;
    return elevarAlCubo;
  }
  
  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    var elevar = num ** exponent;
    return elevar;
  }
  
  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    var redondearNumero = Math.round(num)
    return redondearNumero;
  }
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    var redondearHaciaArriba = Math.ceil(num);
    return redondearHaciaArriba;
  }
  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
    var numeroRandom = Math.random();
    return numeroRandom;
  }
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:

    let resultado = "";
    if (numero > 0) {
      //resultado += "Es positivo"
      resultado = resultado + "Es positivo";
    } else if (numero < 0) {
      resultado = resultado + "Es negativo";
    } else {
      resultado = false;
    }
    return resultado;

    
    /*if (numero > 0) return "Es positivo";
    else if (numero < 0) return "Es negativo";
    else return false;*/
  
  }
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    
    str = str + "!";
    return str;
  }
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:

    nombre = nombre + " " + apellido
    return nombre;
  }
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:

    Saludo = "Hola" + " " + nombre + "!";
    return Saludo;
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    area = alto * ancho;
    return area;

  }
  
  function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    Perimetro = lado + lado + lado + lado
    return Perimetro;
  }
  
  function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    area = (base * altura)/2
    return area;
  }
  
  function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    dolar = 1.2 * euro
    return dolar;
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };