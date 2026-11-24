// Questão 6: fatorial(n)
// Receba um inteiro não negativo e retorne o fatorial de n, calculado com um laço.

function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Testes (não altere esta parte)
console.log(fatorial(5) === 120 ? "OK" : "ERRO");
console.log(fatorial(0) === 1 ? "OK" : "ERRO");
