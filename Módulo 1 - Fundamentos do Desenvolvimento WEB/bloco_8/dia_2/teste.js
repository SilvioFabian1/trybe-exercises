const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i in students) {
    const student = students[i];
    if (student.grade >= 60)
      student.approved = 'Aprovado';
     else
      student.approved = 'Recuperação';
  }
}

verifyGrades();

console.log(students);

// Caso 2

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(students);

// Outro exemplo
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index in numbers) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);

// Caso 2

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

// exemplo

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

/*
=> ---------------
  Cada elemento do array: josé
  Index, posição do elemento: 0
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 50
  Index, posição do elemento: 1
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 0.25
  Index, posição do elemento: 2
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: { comida: 'Chocolate' }
  Index, posição do elemento: 3
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
*/

// Exercicio

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach(email => console.log(`O email ${email} esta cadastrado em nosso banco de dados!`));

// .find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Exercicio 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const verify = (number) => number % 3 === 0 && number % 5 === 0;
  return numbers.find(verify);
}

console.log(findDivisibleBy3And5());

// Exercicio 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const verificaTamanho = (nome) => nome.length >= 5;
  return names.find(verificaTamanho);
}

console.log(findNameWithFiveLetters());

// Exercicio 3

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'));
