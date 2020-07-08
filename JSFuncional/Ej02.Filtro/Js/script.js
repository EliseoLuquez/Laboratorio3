let numeros = [3, 5, 6, 1, 4];
let pares;
let impares;

pares = numeros.filter(elemento =>!(elemento%2));
impares = numeros.filter(elemento =>(elemento%2));
console.log(pares, impares);