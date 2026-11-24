function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouã";

  for (let letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

// Testes (não altere esta parte)
console.log(contarVogais("Programação") === 5 ? "OK" : "ERRO");
console.log(contarVogais("JS") === 0 ? "OK" : "ERRO");
