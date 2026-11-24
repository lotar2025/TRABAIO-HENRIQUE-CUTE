// Questão 7: ehPalindromo(texto)
// Receba uma string e retorne true se for um palíndromo, ou false se não for.
// Ignore diferenças entre maiúsculas e minúsculas.

function ehPalindromo(texto) {
  const formatado = texto.toLowerCase();
  const invertido = formatado.split("").reverse().join("");
  return formatado === invertido;
}

// Testes (não altere esta parte)
console.log(ehPalindromo("Arara") === true ? "OK" : "ERRO");
console.log(ehPalindromo("Brasil") === false ? "OK" : "ERRO");
