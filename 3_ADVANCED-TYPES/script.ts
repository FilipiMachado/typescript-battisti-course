const numArray: number[] = [1, 2, 3, 4];
const numArray2: Array<number> = [1, 2, 3, 4];

const names: string[] = ["fil", "br"];
const names2: Array<string> = ["Fil", "Br", "Hue", "Zero"];

numArray.push(5);

//console.log(numArray);

// Tipo Any
/* 
- O tipo Any passa para o TS que qualquer tipo declarado é correspondente a variável
- Deve-se ao máximo evitar esse tipo
- Casos de uso: o tipo do dado realmente não importa ou arrays com dados de múltiplos tipos
*/

const array1: any = [1, "test", true, [], { name: "Fil" }];
//console.log(array1);

// Parâmetros tipados
function sum(a: number, b: number) {
  //console.log(a + b);
}

sum(4, 6);
//sum("2", "2");

// Tipo de retorno de funções
function greetings(name: string): string {
  return "Hello " + name + "!";
  //return 5
  //console.log(`Olá ${name}`);
}

//console.log(greetings("Zueirinho"));

// Função anônima
setTimeout(() => {
  const salary: number = 1000;

  //console.log(parseFloat(salary));

  //console.log(salary)
}, 2000);

// Tipos de Objeto
function passCoordinates(coords: { x: number; y: number }) {
  return `X coords: ${coords.x} // Y coords: ${coords.y}`;
}

const objCoord = { x: 15, y: 20 };

//console.log(passCoordinates(objCoord));

// Props opcionais
function showNumbers(a: number, b: number, c?: number) {
  if (!c) {
    return `A: ${a} / B: ${b}`;
  }
  return `A: ${a} / B: ${b} / C: ${c}`;
}

//console.log(showNumbers(1, 2, 3));
//console.log(showNumbers(1, 2));

// Validando argumento opcional
function amazingGreetings(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ` + firstName + lastName;
  }
  return "Olá " + firstName;
}

//console.log(amazingGreetings("Fil", "Br"));
//console.log(amazingGreetings("Fil"));

// Union type (melhor que utilizar Any)
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é: ${balance}`);
}

showBalance(100);
showBalance("850");
//showBalance(true)
//showBalance({})

