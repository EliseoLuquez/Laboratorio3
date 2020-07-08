//Ejemplo Reduce1
/*let numeros = [3, 5, 6, 1, 4];
let total;
total = numeros.reduce((previo, actual, indice, arr)=>{
    return previo + actual;
}, 0);
//console.log(total);

//Ejemplo Reduce2
let total;
let personas = [
    {'nombre': 'juan', edad:30, sexo:'m'},
    {'nombre': 'pedro', edad:35, sexo:'m'},
    {'nombre': 'andrea', edad:32, sexo:'f'}
]
total = personas.reduce((previo, actual) => previo + actual.edad, 0);
*/

//Ejemplo Reduce3
/*
let personas = [
    {'nombre': 'juan', edad:70, sexo:'m'},
    {'nombre': 'pedro', edad:35, sexo:'m'},
    {'nombre': 'andrea', edad:32, sexo:'f'}
]
let mayorEdad = personas.filter(per=>per.sexo === 'm')
                .map(per=>per.edad)
                .reduce((previo, actual)=>previo >= actual ? previo : actual);
console.log(mayorEdad);
*/

//Ejemplo Sort1
/*
let personas = [
    {'nombre': 'juan', edad:70, sexo:'m'},
    {'nombre': 'pedro', edad:35, sexo:'m'},
    {'nombre': 'andrea', edad:32, sexo:'f'}
]
let numeros = [3, 5, 6, 1, 4];

//let personas = ['juan','pedro', 'andrea'];

console.log(personas.sort((a,b)=> a.nombre.localeCompare(b.nombre)));
*/

//Ejemeplo 
/*
let numeros = [21, 23 ,45];
let a;
let b;
let c;
a = numeros[0];
b = numeros[1];
c = numeros[2];
let [a, b, c] = numeros;

console.log(a,b,c);
let personas = {'nombre': 'juan', edad:70, sexo:'m'};

let {nombre, edad, sexo} = personas;
console.log(personas);
function Sumar(a, b, ...c)
{
    let rta = a + b;
    return c.reduce((prev, actual)=> prev + actual, rta);
}

console.log(Sumar(5, 3, 5, 4, 3));

let v1 = [3, 2, 4, 1, 6];

let v2 = [...v1];
v2[0] = 100;
console.log(v1, v2);
*/

let x = [3,3,5,3,6,3,6,5,2,3];

let miSet = new Set(x);
let sinRepetidos = [...miSet];

console.log(sinRepetidos);

Array.prototype.unique = function(){
    return [...new Set(this)]
}
console.log(x.unique());