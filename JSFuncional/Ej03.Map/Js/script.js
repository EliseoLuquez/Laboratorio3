//Ejemplo Map1
//let numeros = [3, 5, 6, 1, 4];
//let doble;
//pares = numeros.map(elemento =>!(elemento*2));
//console.log(doble);

//Ejemplo Map2
let nombre;
let personas = [
    {'nombre': 'juan', edad:30},
    {'nombre': 'pedro', edad:35},
    {'nombre': 'andrea', edad:32}
]
nombres = personas.map(e=>({nombre:e.nombre}));
console.log(nombres);

