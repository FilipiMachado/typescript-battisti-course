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
    console.log(a + b);
}
