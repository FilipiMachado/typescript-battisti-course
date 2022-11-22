"use strict";
const numArray = [1, 2, 3, 4];
const numArray2 = [1, 2, 3, 4];
const names = ["fil", "br"];
const names2 = ["Fil", "Br", "Hue", "Zero"];
numArray.push(5);
//console.log(numArray);
// Tipo Any
/*
- O tipo Any passa para o TS que qualquer tipo declarado é correspondente a variável
- Deve-se ao máximo evitar esse tipo
- Casos de uso: o tipo do dado realmente não importa ou arrays com dados de múltiplos tipos
*/
const array1 = [1, "test", true, [], { name: "Fil" }];
//console.log(array1);
// Parâmetros tipados
function sum(a, b) {
    //console.log(a + b);
}
sum(4, 6);
//sum("2", "2");
// Tipo de retorno de funções
function greetings(name) {
    return "Hello " + name + "!";
    //return 5
    //console.log(`Olá ${name}`);
}
//console.log(greetings("Zueirinho"));
// Função anônima
setTimeout(() => {
    const salary = 1000;
    //console.log(parseFloat(salary));
    //console.log(salary)
}, 2000);
// Tipos de Objeto
function passCoordinates(coords) {
    return `X coords: ${coords.x} // Y coords: ${coords.y}`;
}
const objCoord = { x: 15, y: 20 };
console.log(passCoordinates(objCoord));
