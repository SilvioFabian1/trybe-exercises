//Acesse o elemento elementoOndeVoceEsta
document.getElementById("elementoOndeVoceEsta");

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById("elementoOndeVoceEsta").parentNode;

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText = "Ola mundo";

//Acesse o primeiroFilho a partir de pai .
document.getElementById("pai").firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById("elementoOndeVoceEsta").previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById("elementoOndeVoceEsta").nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai .
document.getElementById("pai").firstElementChild.nextElementSibling
  .nextElementSibling;

//Crie um irmão para elementoOndeVoceEsta
let pai = document.getElementById("pai");
let irmao = document.createElement("div");
irmao.id = "irmao";
pai.appendChild(irmao);

//Crie um filho para elementoOndeVoceEsta
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("div");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho
const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoPrimeiroFilhoDoFilho = document.createElement("div");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho
const terceiroFilho =
  filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.getElementById("pai");

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== "elementoOndeVoceEsta") {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById(
  "segundoEUltimoFilhoDoFilho"
);
segundoEUltimoFilhoDoFilho.remove();
