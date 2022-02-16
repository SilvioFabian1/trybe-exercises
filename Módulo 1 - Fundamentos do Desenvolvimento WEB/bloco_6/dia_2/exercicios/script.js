const estados = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal(DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais(MG)",
  "Pará(PA)",
  "Paraíba(PB)",
  "Paraná(PR)",
  "Pernambuco(PE)",
  "Piauí(PI)",
  "Rio de Janeiro(RJ)",
  "Rio Grande do Norte(RN)",
  "Rio Grande do Sul(RS)",
  "Rondônia(RO)",
  "Roraima(RR)",
  "Santa Catarina(SC)",
  "São Paulo(SP)",
  "Sergipe(SE)",
  "Tocantins(TO)",
];

const estado = document.querySelector("#estados");

for (let i in estados) {
  const opcao = document.createElement("option");
  opcao.innerHTML = estados[i];
  estado.appendChild(opcao);
}

const envia = document.querySelector("#enviar");
const dadosVerificados = document.querySelector("#dados-validados");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const endereco = document.querySelector("#endereco");
const cidade = document.querySelector("#cidade");
const resumo = document.querySelector("#resumo");
const data = document.querySelector("#data");

function enviar(event) {
  event.preventDefault();

  if (nome.value !== "") {
    const p = document.createElement("p");
    p.innerHTML = nome.value;
    dadosVerificados.appendChild(p);
  } else {
    alert("Nome invalido");
  }

  if (email.value !== "") {
    const p = document.createElement("p");
    p.innerHTML = email.value;
    dadosVerificados.appendChild(p);
  } else {
    alert("Email invalido");
  }

  if (endereco.value !== "") {
    const p = document.createElement("p");
    p.innerHTML = endereco.value;
    dadosVerificados.appendChild(p);
  } else {
    alert("Endereço invalido");
  }

  if (cidade.value !== "") {
    const p = document.createElement("p");
    p.innerHTML = cidade.value;
    dadosVerificados.appendChild(p);
  } else {
    alert("Cidade invalido");
  }

  if (resumo.value !== "") {
    const p = document.createElement("p");
    p.innerHTML = resumo.value;
    dadosVerificados.appendChild(p);
  } else {
    alert("Resumo invalido");
  }

}

envia.addEventListener("click", enviar);

let picker = new Pikaday({ field: document.getElementById('datepicker') });
