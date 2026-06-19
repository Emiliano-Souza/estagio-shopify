# Desafio 1.2 — Caça aos Bugs da IA

## Trecho A — Validação de email

### Qual é o bug?

A função original verifica apenas se o texto possui `@`.

```js
function validarEmail(email) {
  if (email.includes("@")) {
    return true;
  }
  return false;
}
```

Isso é insuficiente, porque strings como `"@@@@"` e `"usuario@"` retornam `true`, mesmo não sendo emails válidos.

### Por que está errado?

Um email minimamente válido precisa ter:

- texto antes do `@`;
- apenas um `@`;
- domínio depois do `@`;
- pelo menos um ponto no domínio;
- texto depois do ponto.

### Como corrigir?

Uma forma simples é validar o tipo da entrada e usar uma expressão regular básica.

```js
function validarEmail(email) {
  if (typeof email !== "string") {
    return false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}
```

---

## Trecho B — Buscar item em array

### Qual é o bug?

O loop usa `i <= produtos.length`.

```js
for (let i = 0; i <= produtos.length; i++) {
```

O correto é usar `i < produtos.length`.

### Por que está errado?

Arrays começam no índice `0` e terminam em `length - 1`.

Se o array tem 3 itens, os índices válidos são:

```text
0, 1, 2
```

Quando `i` chega em `3`, `produtos[3]` é `undefined`. Então tentar acessar `produtos[i].nome` pode gerar erro.

Também é melhor usar `===` em vez de `==`, porque `===` compara valor e tipo, evitando conversões inesperadas.

### Como corrigir?

```js
function buscarProduto(produtos, nome) {
  if (!Array.isArray(produtos) || typeof nome !== "string") {
    return null;
  }

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      return produtos[i];
    }
  }

  return null;
}
```

---

## Trecho C — Calcular desconto

### Qual é o bug?

A função original subtrai o desconto diretamente do preço.

```js
function aplicarDesconto(preco, desconto) {
  const precoFinal = preco - desconto;
  return precoFinal;
}
```

Ela não valida se o preço e o desconto são números válidos. Também permite desconto maior que o preço e desconto negativo.

### Por que está errado?

Se o desconto for maior que o preço, o resultado pode ficar negativo.

Exemplo:

```js
aplicarDesconto(100, 110); // -10
```

Se o desconto for negativo, ele aumenta o preço.

Exemplo:

```js
aplicarDesconto(100, -20); // 120
```

Isso não faz sentido para uma função de desconto.

### Como corrigir?

```js
function aplicarDesconto(preco, desconto) {
  if (typeof preco !== "number" || typeof desconto !== "number") {
    return "Erro: preço e desconto devem ser números";
  }

  if (preco < 0) {
    return "Erro: preço não pode ser negativo";
  }

  if (desconto < 0) {
    return "Erro: desconto não pode ser negativo";
  }

  if (desconto > preco) {
    return "Erro: desconto não pode ser maior que o preço";
  }

  return preco - desconto;
}
```

---

## Trecho D — Formatação de preço

### Qual é o bug?

A função original usa `toFixed(2)` sem verificar se o valor é realmente um número.

```js
function formatarPreco(valor) {
  return "R$" + valor.toFixed(2);
}
```

### Por que está errado?

Se `valor` for uma string, como `"abc"`, a função quebra porque strings não possuem `toFixed`.

Se `valor` for `null` ou `undefined`, também pode gerar erro ou comportamento inesperado.

### Como corrigir?

```js
function formatarPreco(valor) {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return "Erro: valor precisa ser um número";
  }

  if (valor < 0) {
    return "Erro: valor não pode ser negativo";
  }

  return "R$ " + valor.toFixed(2).replace(".", ",");
}
```

---

## Reflexão

Esses bugs mostram que código gerado por IA pode parecer correto em casos simples, mas falhar em situações reais. O bug mais perigoso seria o de desconto, porque poderia gerar preços negativos ou valores incorretos em uma loja. Também considero perigoso o erro da busca no array, porque poderia quebrar o sistema em produção.

Para evitar esse tipo de problema, é importante testar casos comuns e também casos extremos, como valores vazios, tipos errados, números negativos e entradas inválidas. Além disso, sempre devo revisar a lógica do código antes de confiar em uma sugestão gerada por IA.