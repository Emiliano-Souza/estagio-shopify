// Trecho A — Validação de email corrigida
function validarEmail(email) {
  // Verifica se o valor recebido é uma string
  if (typeof email !== "string") {
    return false;
  }

  // Divide o email usando o @
  const partes = email.split("@");

  // Um email válido deve ter apenas um @
  if (partes.length !== 2) {
    return false;
  }

  const usuario = partes[0];
  const dominio = partes[1];

  // Deve existir texto antes e depois do @
  if (usuario.length === 0 || dominio.length === 0) {
    return false;
  }

  // O domínio precisa ter pelo menos um ponto
  if (!dominio.includes(".")) {
    return false;
  }

  return true;
}

// Testes do Trecho A
console.log("Trecho A — Validação de email");
console.log(validarEmail("usuario@email.com")); // true
console.log(validarEmail("@@@@")); // false
console.log(validarEmail("usuario@")); // false
console.log(validarEmail("sem-arroba.com")); // false
console.log(validarEmail(123)); // false


// Trecho B — Buscar item em array corrigido
function buscarProduto(produtos, nome) {
  // Verifica se produtos é realmente um array
  if (!Array.isArray(produtos)) {
    return null;
  }

  // Verifica se o nome buscado é uma string
  if (typeof nome !== "string") {
    return null;
  }

  // Usa i < produtos.length para não acessar uma posição inexistente
  for (let i = 0; i < produtos.length; i++) {
    // Verifica se o item existe antes de acessar a propriedade nome
    if (produtos[i] && produtos[i].nome === nome) {
      return produtos[i];
    }
  }

  return null;
}

// Testes do Trecho B
console.log("\nTrecho B — Buscar produto");
const lista = [
  { nome: "Camiseta", preco: 49.90 },
  { nome: "Calça", preco: 89.90 },
  { nome: "Tênis", preco: 199.90 }
];

console.log(buscarProduto(lista, "Calça")); // { nome: "Calça", preco: 89.90 }
console.log(buscarProduto(lista, "Boné")); // null
console.log(buscarProduto("não é array", "Calça")); // null


// Trecho C — Calcular desconto corrigido
function aplicarDesconto(preco, desconto) {
  // Verifica se preço e desconto são números
  if (typeof preco !== "number" || typeof desconto !== "number") {
    return "Erro: preço e desconto devem ser números";
  }

  // Evita valores inválidos como NaN
  if (Number.isNaN(preco) || Number.isNaN(desconto)) {
    return "Erro: preço e desconto devem ser números válidos";
  }

  // O preço não pode ser negativo
  if (preco < 0) {
    return "Erro: preço não pode ser negativo";
  }

  // O desconto não pode ser negativo
  if (desconto < 0) {
    return "Erro: desconto não pode ser negativo";
  }

  // O desconto não pode ser maior que o preço
  if (desconto > preco) {
    return "Erro: desconto não pode ser maior que o preço";
  }

  return preco - desconto;
}

// Testes do Trecho C
console.log("\nTrecho C — Aplicar desconto");
console.log(aplicarDesconto(100, 10)); // 90
console.log(aplicarDesconto(100, 110)); // Erro
console.log(aplicarDesconto(100, -20)); // Erro
console.log(aplicarDesconto("100", 10)); // Erro


// Trecho D — Formatação de preço corrigida
function formatarPreco(valor) {
  // Verifica se o valor é um número válido antes de usar toFixed
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return "Erro: valor inválido";
  }

  // Formata o número com duas casas decimais
  return "R$" + valor.toFixed(2);
}

// Testes do Trecho D
console.log("\nTrecho D — Formatar preço");
console.log(formatarPreco(49.9)); // R$49.90
console.log(formatarPreco(100)); // R$100.00
console.log(formatarPreco("abc")); // Erro: valor inválido
console.log(formatarPreco(null)); // Erro: valor inválido
console.log(formatarPreco(undefined)); // Erro: valor inválido

