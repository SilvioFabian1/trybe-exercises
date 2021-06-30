//3- Agora inverta o lado do triângulo.
let n = 5,
    asteriscos = "*",
    espacoEmBranco = "",
    posicaoEmBranco = n;

for (let i = 0; i < n; i += 1) {
  for (let p = 0; p <= n; p += 1) {
    if (p < posicaoEmBranco) {
      espacoEmBranco =  espacoEmBranco + ' ';
    } else {
      espacoEmBranco = espacoEmBranco + asteriscos;
    }
  }
  console.log(espacoEmBranco);
  espacoEmBranco = '';
  posicaoEmBranco -= 1;
};