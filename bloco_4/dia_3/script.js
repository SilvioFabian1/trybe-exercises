//1-Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

/*
let n = 5,
    asterisco = "*",
    inputLine = "";

for (let i = 1; i <= n; i += 1) {
  inputLine = inputLine + asterisco;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};

*/

//2-Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let n = 5,
    asterisco = "*",
    inputLine = "";

for (let i = 1; i <= n; i += 1) {
  inputLine = asterisco + inputLine;
  console.log(inputLine);
};