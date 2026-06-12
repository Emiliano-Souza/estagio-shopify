// Tempo de início: 10:50

// a) inverterString(str)
// Recebe uma string e retorna ela invertida.
// Exemplo: "hello" → "olleh"
// Exemplo: "Shopify" → "yfipohS"
function inverterString(str) {
  if (typeof str !== "string") {
    return "Erro: precisa ser uma string";
  }

  let invertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertida = invertida + str[i];
  }

  return invertida;
}

// b) contarVogais(str)
// Recebe uma string e retorna a quantidade de vogais.
// Deve funcionar com maiúsculas e minúsculas.
// Exemplo: "programacao" → 5
// Exemplo: "Shopify" → 2
function contarVogais(str) {
  if (typeof str !== "string") {
    return "Erro: precisa ser uma string";
  }

  let quantidade = 0;

  for (let i = 0; i < str.length; i++) {
    let letra = str[i].toLowerCase();

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      quantidade++;
    }
  }

  return quantidade;
}

// c) encontrarMaior(numeros)
// Recebe um array de números e retorna o maior valor.
// Exemplo: [3, 7, 2, 9, 1] → 9
// Exemplo: [10, 10, 10] → 10
function encontrarMaior(numeros) {
  if (!Array.isArray(numeros)) {
    return "Erro: precisa ser um array";
  }

  if (numeros.length === 0) {
    return "Erro: array vazio";
  }

  let maior = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== "number") {
      return "Erro: todos os valores precisam ser números";
    }

    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

// d) removerDuplicatas(array)
// Recebe um array e retorna um novo array sem valores duplicados.
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
// Exemplo: ["a", "b", "a", "c"] → ["a", "b", "c"]
function removerDuplicatas(array) {
  if (!Array.isArray(array)) {
    return "Erro: precisa ser um array";
  }

  let novoArray = [];

  for (let i = 0; i < array.length; i++) {
    let arrayExistente = false;

    for (let j = 0; j < novoArray.length; j++) {
      if (array[i] === novoArray[j]) {
        arrayExistente = true;
      }
    }

    if (arrayExistente === false) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

// Testes
console.log(inverterString("hello")); 
console.log(inverterString("Shopify")); 
console.log(inverterString("")); 

console.log(contarVogais("programacao")); 
console.log(contarVogais("BCDFG")); 

console.log(encontrarMaior([3, 7, 2, 9, 1])); 
console.log(encontrarMaior([10, 10, 10])); 
console.log(encontrarMaior([-5, -2, -10])); 
console.log(encontrarMaior([])); 

console.log(removerDuplicatas([1, 2, 2, 3, 3, 4])); 
console.log(removerDuplicatas(["a", "b", "a", "c"])); 
console.log(removerDuplicatas([])); 

// Tempo de fim: 11:33 (Com testes e revisão)
// Tempo total SEM IA: 43 minutos