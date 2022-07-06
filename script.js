// FUNCIONES EN JS
function calcularIva (){
    let precio = parseFloat (prompt("Ingrese el precio del producto"));
    let precioConIva = precio * 1.21;
    console.log("El precio con Iva es: "+ precioConIva);
}

calcularIva();

//con parametros

let precioSinIva = parseFloat(prompt("Ingrese el precio del producto"));

function calcularIva2(parametro1){
    let precioConIva = parametro1 * 1.21;
    console.log("El precio con Iva es: "+ precioConIva);
}

let precioHarina = 89.99;
calcularIva2(precioSinIva);
calcularIva2(123.89);
calcularIva2(precioHarina);
calcularIva2(parseFloat(prompt("Ingrese otro numero")));


//con textos, parametros y retorno
function concatenarTextos(texto1, texto2) {
   let textoConcatenado = texto1 + " " + texto2;
   return textoConcatenado; // Martin Zuvilivia
}

let nombre = prompt("Ingresa tu nombre"); //Martin
let apellido = prompt("Ingresa el apellido"); //Zuvilivia
let nombreCompleto = concatenarTextos(nombre, apellido); //Martin Zuvilivia
alert(nombreCompleto);


//funcion con parametros + return + switch

function calcular(primerNumero, segundoNumero, operacion) {
   switch (operacion) {
       case "+":
           return primerNumero + segundoNumero;
           break;
       case "-":
           return primerNumero - segundoNumero;
           break;
       case "*":
           return primerNumero * segundoNumero;
           break;
       case "/":
           return primerNumero / segundoNumero;
           break;
       default:
           return 0;
           break;
   }
}
let primerNumero = parseInt(prompt("Ingrese el primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
let operador = prompt ("Ingrese el operador + - * /");
let resultado = calcular(primerNumero, segundoNumero, operador);
console.log("El resultado de la operacion es: " + resultado);

//funcion flecha
let bienvenido = (nombre, apellido) => {
   alert("Bienvenido " + nombre + " " + apellido);
}
bienvenido (prompt("Ingresa tu nombre"), prompt("Ingresa tu apellido"));
