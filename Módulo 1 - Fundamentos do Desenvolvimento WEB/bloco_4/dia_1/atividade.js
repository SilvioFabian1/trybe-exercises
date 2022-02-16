// //1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

let a = 5,
    b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// //2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let A = 20,
    B = 15;

if (A < B) {
  console.log(B);
}else {
  console.log(A);
}

// //3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let valor1 = 20,
    valor2 = 15,
    valor3 = 30;

if (valor2 < valor1 && valor3 < valor1) {
  console.log("O maior valor é " + valor1);
}else if (valor1 < valor2 && valor3 < valor2) {
  console.log("O maior valor é " + valor2);
}else if (valor1 < valor3 && valor2 < valor3) {
  console.log("O maior valor é "+ valor3);
}else {
  return 0;
}

// //4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let pn = -10;

if (pn > 0) {
  console.log('positive');
}else {
  console.log('negative');
}

// //5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 60,
    angulo2 = 60,
    angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;

if (somaAngulos <= 180 && somaAngulos > 0) {
  console.log("true");
}else if (somaAngulos > 180) {
  console.log("false");
}else {
  console.log("erro");
}

// //6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca;

if (peca.toLowerCase() == "peao") {
  console.log("Na primeira jogada anda 2 casas, depois anda só uma");
}else if (peca.toLowerCase() == "cavalo") {
  console.log("Anda em formato de 'L'");
}else if (peca.toLowerCase() == "bispo") {
  console.log("Anda em todas as casas da diagonal");
}else if (peca.toLowerCase() == "torre") {
  console.log("Anda para frente, para trás, esquerda e direita quantas casas quiser");
}else if (peca.toLowerCase() == "rainha") {
  console.log("Anda em qualquer direção, quantas casas quiser");
}else if (peca.toLowerCase() == "rei") {
  console.log("Anda na direção que quiser, porém apenas uma casa por vez");
}else {
  console.log("Nome inválido");
}

// //7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let porcentagem = 101;

if (porcentagem <= 100 && porcentagem >= 90) {
  console.log("A");
}else if (porcentagem <= 89 && porcentagem >= 80) {
  console.log("B");
}else if (porcentagem <= 79 && porcentagem >= 70) {
  console.log("C");
}else if (porcentagem <= 69 && porcentagem >= 60) {
  console.log("D");
}else if (porcentagem <= 59 && porcentagem >= 50) {
  console.log("E");
}else if (porcentagem < 50 && porcentagem > 0) {
  console.log("F");
}else {
  console.log("Erro");
}

// //8- Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let num1 = 2,
    num2 = 3,
    num3 = 5;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log("true");
}else {
  console.log("false");
}

// //9-Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let num1a = 2,
    num2a = 3,
    num3a = 5;

if (num1a % 2 != 0 || num2a % 2 != 0 || num3a % 2 != 0) {
  console.log("true");
}else {
  console.log("false");
}

// //10-Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let CustoProduto = 10,
    ValorVenda = 20,
    lucro = ValorVenda - CustoProduto;

if (lucro > 0) {
  console.log((lucro * 1000) * 0.8);
}else {
  console.log("Invalido");
}

// //11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let SalarioBruto = 10000,
    aliquota,
    SalarioBrutoINSS,
    salario,
    aliquota2,
    salario2,
    IR;

if (SalarioBruto <= 1556.94) {
   aliquota = 0.08;
   salario = SalarioBruto * aliquota;
   SalarioBrutoINSS = SalarioBruto - salario;
}else if (SalarioBruto >= 1556.95 && SalarioBruto <= 2594.92) {
  aliquota = 0.09;
  salario = SalarioBruto * aliquota;
  SalarioBrutoINSS = SalarioBruto - salario;
} else if (SalarioBruto >= 2594.93 && SalarioBruto <= 5189.82) {
  aliquota = (SalarioBruto / 100) * 11;
  salario = SalarioBruto - aliquota;
  SalarioBrutoINSS = salario;
} else if (SalarioBruto >= 5189.82) {
  aliquota = 570.88;
  salario = SalarioBruto - aliquota;
  SalarioBrutoINSS = salario;
}

if (SalarioBrutoINSS < 1903.98) {
  IR = SalarioBrutoINSS;
}else if (SalarioBrutoINSS >= 1903.99 && SalarioBrutoINSS <= 2826.65) {
  aliquota2 = (SalarioBrutoINSS / 100) * 7.5 - 142.80;
  salario2 = SalarioBrutoINSS - aliquota2;
  IR = salario2;
} else if (SalarioBrutoINSS >= 2826.66 && SalarioBrutoINSS <= 3751.05) {
  aliquota2 = (SalarioBrutoINSS / 100) * 15 - 354.80;
  salario2 = SalarioBrutoINSS - aliquota2;
  IR = salario2;
}else if (SalarioBrutoINSS >= 3751.06 && SalarioBrutoINSS <= 4664.68) {
  aliquota2 = (SalarioBrutoINSS / 100) * 22.5 - 636.13;
  salario2 = SalarioBrutoINSS - aliquota2;
  IR = salario2;
} else if (SalarioBrutoINSS >= 4664.68) {
  aliquota2 = (SalarioBrutoINSS / 100) * 27.5 - 869.36;
  salario2 = SalarioBrutoINSS - aliquota2;
  IR = salario2;
}

console.log(IR);