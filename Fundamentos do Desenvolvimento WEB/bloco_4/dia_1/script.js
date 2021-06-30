const name = "Silvio";

const birthCity = "Recife";

let birthYear = 2030;

console.log(name);

console.log(birthCity);

console.log(birthYear);

////////////////////////////

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId,typeof isEnrolled,typeof patientInfo,typeof patientEmail);

let base = 5,
    altura = 8;

let area = base * altura;

let perimetro = area;

console.log(perimetro);

////////////////////////////////

let nota = 70;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovado(a)!");
}else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
}else if (nota < 60) {
  console.log("Reprovado");
}

///////////////////////////////

let PessoaAprovada = "Aprovade";

switch(PessoaAprovada){
	case "Aprovada":
		console.log("Aprovada");
		break;
		
	case "Lista":
		console.log("Lista");
		break;

	case "Reprovada":
		console.log("Reprovada");
		break;
	
	default:
		console.log("não se aplica");
}