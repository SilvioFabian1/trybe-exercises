//1-Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function checkPalindrome(word) {
  let l = word.length;
  for (let i = 0; i < l / 2; i += 1) {
      if (word.charAt(i) !== word.charAt(l - 1 - i)) {
          return false;
      }
  }
  return true;
};
// console.log(checkPalindrome("arara"));

//2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function ArrayDeInteiro(value) {
  let i = 0;
  for (let index in value) {
    if (value[i] < value[index]) {
      i = index;
    }
  }
  return i;
}

// console.log(ArrayDeInteiro([2,4,5,6,21,20]));

//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function ArrayDeInteiroMenor(value) {
  let i = 0;
  for (let index in value) {
    if (value[i] > value[index]) {
      i = index;
    }
  }
  return i;
}

// console.log(ArrayDeInteiroMenor([2,4,5,1,21,20]));

//4-Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function Maiorpalavra(value) {
  let i = value[0];
  for (let indice in value) {
    if (i.length < value[indice].length) {
      i = value[indice];
    }
  }
  return i;
}

// console.log(Maiorpalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//6- Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
// console.log(somaTodosNumeros(5));

//7-Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be'));