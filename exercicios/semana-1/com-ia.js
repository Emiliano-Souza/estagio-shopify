
// Tempo de início: 10:30

// Função que inverte uma string
// Exemplo: "hello" → "olleh"

function inverterString(str) {
  if (typeof str !== "string") {
    return "Erro: o valor informado deve ser uma string";
  }

    return str.split("").reverse().join("");

}

// Função que conta as vogais em uma string (maiúsculas e minúsculas)
// Exemplo: "programacao" → 5
function contarVogais(str) {
    if (typeof str !== "string") {
    return "Erro: o valor informado deve ser uma string";
  }
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
        contador++;
      }
    }

    return contador;
}

// Função que encontra o maior número em um array
// Exemplo: [3, 7, 2, 9, 1] → 9
function encontrarMaior(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Erro: o valor informado deve ser um array não vazio";
  }

    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
        maior = array[i];
      }
    }

    return maior;
}

// Função que remove valores duplicados de um array
// Exemplo: [1, 2, 2, 3, 3, 4] → [1, 2, 3, 4]
function removerDuplicatas(array) {
  if (!Array.isArray(array)) {
    return "Erro: o valor informado deve ser um array";
  }

    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!novoArray.includes(array[i])) {
        novoArray.push(array[i]);
      }
    }

    return novoArray;
}


// Testes
console.log(inverterString("hello")); // "olleh"
console.log(contarVogais("programacao")); // 5
console.log(encontrarMaior([3, 7, 2, 9, 1])); // 9
console.log(removerDuplicatas([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4] 


// Tempo de fim: 10:40 (Com testes e revisão)
// Tempo total COM IA: 10 minutos
