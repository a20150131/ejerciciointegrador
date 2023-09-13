var entrada = parseInt(prompt("Ingrese el monto de la entrada"));
var entrada = parseInt(prompt("Ingrese el monto del segundo plato"));
var entrada = parseInt(prompt("Ingrese el monto del postre"));

var montoparcial = entrada + segundo + postre;

var igv = montoparcial * 18 / 100;

var montototal = montoparcial + igv;

console.log("El monto de la entrada es: "+entrada)
console.log("El monto de la entrada es: "+segundo)
console.log("El monto de la entrada es: "+postre)

console.log("El igv asciende a: "+igv)

console.log("El monto total a pagar es: "+montototal)