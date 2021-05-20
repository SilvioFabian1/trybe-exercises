// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/*for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
*/
//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/*
let result = 0;

for (i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}

console.log(result)
*/

//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*
let result = 0;

for (i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}

console.log(result / numbers.length);
*/

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/*
let result = 0;
let final;

for (i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}

final = result / numbers.length;

if (final > 20) {
  console.log('Valor maior que 20');
}else {
  console.log('Valor menor ou igual a 20');
}

*/

//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/*
let higherNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);
*/

//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/*
let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(`Possui ${impar} numeros impares`);
}
*/

//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;

/*
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);

*/

//8-Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

/*
let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

console.log(numbers);

*/

//9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
  
}

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};