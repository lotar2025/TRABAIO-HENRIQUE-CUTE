// Questão 8 (desafio): contarPrimos(n)
// Receba um inteiro n e retorne quantos números primos existem entre 2 e n,
// incluindo n se ele for primo. 0 e 1 não são primos.

function contarPrimos(n) {
  let quantidade = 0;

  for (let num = 2; num <= n; num++) {
    let ehPrimo = true;

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      if (num % divisor === 0) {
        ehPrimo = false;
        break;
      }
    }

    if (ehPrimo) {
      quantidade++;
    }
  }

  return quantidade;
}

// Testes (não altere esta parte)
console.log(contarPrimos(10) === 4 ? "OK" : "ERRO");
console.log(contarPrimos(1) === 0 ? "OK" : "ERRO");
console.log(contarPrimos(30) === 10 ? "OK" : "ERRO");
