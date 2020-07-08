


/*
//funcion expresada
var x = function()
{
    console.log("Estoy en x");
};*/


const persona1 = new Object();
//Literal
const persona2 = {};

console.log(persona2);

const vec1 = new Array();
//Literal
const vec2 = [];

console.log(vec1);
console.log(vec2);



persona1.nombre = "Romina";
persona1.saludar = function(){
    console.log(`Hola soy ${this.nombre}`);
}
console.log(persona1);

persona1.saludar();


