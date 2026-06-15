# Reflexão: Com e Sem IA

## Tempo

* Sem IA: 43 minutos
* Com IA: 10 minutos

## Qualidade

### O código gerado pela IA estava correto de primeira? Se não, o que precisou ajustar?

A versão com IA ficou pronta bem mais rápido. Ela sugeriu soluções mais curtas e diretas, principalmente nas funções `inverterString`, `contarVogais` e `removerDuplicatas`.

Na função de inverter string, a IA sugeriu usar:

```js
split("").reverse().join("")
```

Na função de remover duplicatas, ela sugeriu usar `Set`, que deixou o código bem menor.

Mesmo assim, eu precisei revisar o código para entender a lógica do que foi e conferir se não haviam bugs.

### Qual versão ficou com código mais limpo?

A versão com IA ficou mais limpa e menor, porque usou métodos prontos do JavaScript, como:

* `split`
* `reverse`
* `join`
* `match`
* `Math.max`
* `Set`

A versão sem IA ficou mais longa, porque fiz tudo de forma mais manual, usando `for`, `if` e variáveis auxiliares. Mesmo ficando maior.

Por exemplo, na função `removerDuplicatas`, eu fiz um `for` dentro de outro `for` para verificar se o item já existia no novo array. A solução ficou menos elegante, mas me ajudou a entender melhor o processo.

### Qual versão tem melhor tratamento de edge cases?

As duas versões tratam edge cases.

Os principais casos tratados foram:

* String vazia
* Array vazio
* Valor que não é string
* Valor que não é array
* Array com números negativos
* Array com valores repetidos
* String sem vogais

A versão sem IA ficou mais simples e manual, mas eu consegui controlar melhor o que estava acontecendo. A versão com IA ficou mais curta, mas exigiu mais atenção na revisão, porque algumas soluções prontas podem falhar em casos específicos.

## Aprendizado

### Em qual abordagem você sentiu que aprendeu mais?

A lógica pura foi sem IA, mas para eficiencia foi com IA. Uma vez que entende a lógica, com IA é mais prático.

Na função `inverterString`, por exemplo, precisei entender como começar do último caractere da string e ir voltando até o primeiro.

Na função `contarVogais`, precisei comparar cada letra com as vogais usando `if`.

Na função `removerDuplicatas`, precisei pensar em como verificar se um valor já estava dentro do novo array antes de adicionar.

Mas com a IA, o processo foi mais rápido.

### O Copilot sugeriu alguma solução que você não conhecia? Qual?

Sim. A solução com `Set` para remover duplicatas foi uma das que eu achei mais interessante:

```js
return [...new Set(array)];
```

Eu tinha feito essa função de forma mais manual, usando dois `for`. A solução com `Set` ficou muito menor.

Também achei interessante o uso de expressão regular para contar vogais:

```js
str.match(/[aeiou]/gi)
```

Eu consegui entender que essa solução procura todas as vogais na string, tanto maiúsculas quanto minúsculas. Mesmo assim, precisei ajustar o caso em que nenhuma vogal é encontrada.

### Houve algum momento em que o Copilot atrapalhou ou confundiu?

Sim. Ele confundiu com algumas sugestoes que foram necessarias revisões e pensar na lógica, além de funcoes diferentes do javascript.

## Conclusão

### Quando faz sentido usar IA no seu fluxo de trabalho?

Faz sentido usar IA quando eu já tenho uma ideia do que preciso fazer e quero ganhar tempo. Ela ajuda bastante em funções simples, repetitivas ou quando quero lembrar uma forma mais curta de escrever algo em JavaScript.

Também pode ajudar a conhecer soluções novas, como `Set`, `Math.max` e expressões regulares.

### Quando é melhor desligar e fazer na mão?

É melhor desligar a IA quando estou aprendendo uma lógica nova ou quando preciso praticar. Fazendo sem IA, eu sou obrigado a pensar melhor no problema e entender o passo a passo.

Também acho melhor fazer na mão quando o objetivo é treinar raciocínio, porque a IA pode entregar a resposta muito rápido e eu posso acabar não aprendendo de verdade.

### Como você pretende usar o Copilot daqui para frente?

Pretendo usar o Copilot como uma ferramenta de apoio, mas não como uma forma de evitar pensar.

Quero usar para ganhar velocidade e conhecer soluções diferentes, mas sempre revisando, testando e tentando entender cada linha antes de aceitar.

A principal lição desse exercício foi que a IA ajuda bastante, mas quem precisa garantir que o código está certo sou eu.
