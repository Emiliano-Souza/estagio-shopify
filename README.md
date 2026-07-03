# Estagio-Shopify

Repositório criado para armazenar os exercícios, desafios e atividades práticas desenvolvidas durante o programa de estágio/bootcamp da AI/R, com foco em desenvolvimento web, Git, GitHub, JavaScript, Shopify, Liquid e boas práticas de programação.

## 📌 Sobre o projeto

Este repositório faz parte da trilha de aprendizado do estágio/bootcamp da AI/R.

O objetivo é praticar conceitos fundamentais de desenvolvimento, como:

- Fluxo profissional com Git e GitHub
- Criação de branches
- Commits semânticos
- Pull Requests
- Code Review
- Identificação e correção de bugs
- Uso crítico de ferramentas de IA no desenvolvimento
- Desenvolvimento de temas Shopify
- Criação de sections em Liquid
- Uso de filtros, condicionais, loops e snippets reutilizáveis

## 📁 Estrutura do repositório

```bash
estagio-shopify/
├── exercicios/
│   ├── semana-1/
│   │   ├── sobre-mim.md
│   │   ├── calculadora.js
│   │   ├── caca-bugs.md
│   │   ├── caca-bugs-corrigido.js
│   │   ├── sem-ia.js
│   │   ├── com-ia.js
│   │   ├── reflexao-ia.md
│   │   └── quando-usar-ia.md
│   ├── semana-2/
│   │   ├──  sections/
│   │   │   ├── exercicio-liquid-basico.liquid
│   │   │   ├── exercicio-product-grid.liquid
│   │   │   └── exercicios-filtros.liquid
│   │   ├── snippets/
│   │   │   └── product-card.liquid
│   │   └── quando-usar-IA-liquid.md
│   └── semana-3/
│      ├── hero-banner.liquid
│      ├── section-hero-banner.css
│      ├── product-extra-info.liquid
│      ├── section-product-extra-info.css
│      ├── brand-info.liquid
│      └── section-brand-info.liquid
├── .gitignore
└── README.md
```

> Observação: os arquivos Liquid foram organizados em `exercicios/semana-2/` para a entrega do bootcamp. Para uso direto dentro de um tema Shopify, os arquivos de section devem ser colocados em `sections/` e o snippet em `snippets/`.

## ✅ Semana 1 — Git, JavaScript e IA

### Desafio 1.1 — Fluxo Git Profissional

Neste desafio, foram praticados os principais comandos e etapas de um fluxo profissional com Git e GitHub.

Atividades realizadas:

- Criação de branch a partir da `main`
- Criação da pasta `exercicios/semana-1`
- Criação do arquivo de apresentação pessoal
- Implementação de uma calculadora básica em JavaScript
- Adição da função de porcentagem
- Uso de commits semânticos
- Abertura de Pull Request
- Prática de review em código de colega

Arquivos relacionados:

- `exercicios/semana-1/sobre-mim.md`
- `exercicios/semana-1/calculadora.js`

---

### Desafio 1.2 — Caça aos Bugs da IA

Neste desafio, o foco foi desenvolver um olhar crítico sobre códigos gerados por IA.

Foram analisados trechos de código com erros em:

- Validação de e-mail
- Busca de produto em array
- Cálculo de desconto
- Formatação de preço

Para cada trecho, foram descritos:

- Qual era o bug
- Por que o comportamento estava incorreto
- Como corrigir o problema
- Código corrigido com validações e tratamento de edge cases

Arquivos relacionados:

- `exercicios/semana-1/caca-bugs.md`
- `exercicios/semana-1/caca-bugs-corrigido.js`

---

### Desafio 1.3 — Copilot: Com e Sem IA

Neste desafio, foram implementadas as mesmas funções de duas formas diferentes:

1. Sem uso de IA
2. Com auxílio do GitHub Copilot

Funções implementadas:

- `inverterString(str)`
- `contarVogais(str)`
- `encontrarMaior(numeros)`
- `removerDuplicatas(array)`

Além da implementação, foi feita uma reflexão comparando:

- Tempo gasto com e sem IA
- Qualidade do código
- Tratamento de edge cases
- Aprendizado durante o processo
- Pontos positivos e limitações do uso de IA

Arquivos relacionados:

- `exercicios/semana-1/sem-ia.js`
- `exercicios/semana-1/com-ia.js`
- `exercicios/semana-1/reflexao-ia.md`

---

## 🧠 Mini-doc — Quando uso e quando não uso Copilot

Também foi criado um mini-documento com uma reflexão sobre o uso do GitHub Copilot durante as atividades.

O documento aborda:

- Situações em que o Copilot ajudou
- Situações em que o Copilot atrapalhou
- Cuidados necessários ao usar IA para gerar código
- Importância de revisar, testar e entender as sugestões geradas

Arquivo relacionado:

- `exercicios/semana-1/quando-usar-ia.md`

---

## ✅ Semana 2 — Shopify, Liquid e Temas

### Atividades práticas de Liquid

Durante a Semana 2, foram realizados desafios para entender a estrutura de temas Shopify e a linguagem Liquid.

---

### Desafio 2.1 — Section Liquid Básica

Neste desafio, foi criada uma section básica em Liquid com configurações editáveis pelo editor visual da Shopify.

Funcionalidades implementadas:

- Título configurável via `settings`
- Descrição configurável com `richtext`
- Loop de produtos usando `collections.all.products`
- Exibição de imagem, título e preço dos produtos
- Preço formatado com o filtro `money`
- Controle da quantidade de produtos exibidos
- Condicional para alternar entre layout em grade e layout em lista
- Campo extra de cor de fundo
- Botão extra "Ver todos os produtos"

Arquivo relacionado:

- `exercicios/semana-2/exercicio-liquid-basico.liquid`

---

### Desafio 2.2 — Filtros e Condicionais Liquid

Neste desafio, foi criada uma section para exibir produtos de uma coleção usando filtros Liquid e lógica condicional.

Funcionalidades implementadas:

- Seleção de coleção pelo editor visual
- Título da coleção com filtro `upcase`
- Título dos produtos com filtro `capitalize`
- Preço formatado com filtro `money`
- Descrição tratada com `strip_html` e `truncate`
- Imagens redimensionadas com `image_url`
- Badge para produto em promoção
- Badge para produto esgotado
- Badge para produto disponível
- Cálculo de porcentagem de desconto com `assign`
- Contagem de produtos em promoção
- Resumo dinâmico com `capture`

Arquivo relacionado:

- `exercicios/semana-2/exercicio-filtros.liquid`

---

### Desafio 2.3 — Snippet Reutilizável

Neste desafio, foi criado um snippet reutilizável de card de produto e uma section de grade de produtos que utiliza esse snippet com `{% render %}`.

Funcionalidades implementadas no snippet:

- Imagem do produto com `image_url`
- Título do produto como link
- Preço atual formatado
- Preço original riscado em produtos promocionais
- Badge condicional de promoção
- Badge condicional de produto esgotado
- Botão visual de adicionar ao carrinho
- Botão desabilitado para produtos indisponíveis

Funcionalidades implementadas na section:

- Seleção de coleção pelo editor visual
- Controle do número de colunas
- Controle do limite de produtos exibidos
- Opção para exibir ou ocultar badges
- Cor de fundo configurável
- Link "Ver todos os produtos" quando houver mais produtos na coleção
- Layout responsivo para desktop, tablet e mobile

Arquivos relacionados:

- `exercicios/semana-2/product-card.liquid`
- `exercicios/semana-2/exercicio-product-grid.liquid`

---

## 🧠 Mini-doc — Uso de IA em Liquid

Também foi criado um mini-documento com uma reflexão sobre o uso de IA nos exercícios de Liquid da Semana 2.

O documento aborda:

- Como a IA ajudou na criação de sections Liquid
- Como a IA ajudou na organização da lógica de filtros e condicionais
- Situações em que a IA sugeriu soluções que precisaram ser revisadas
- Importância de testar tudo no preview da Shopify
- Cuidados ao usar IA em regras de produto, estoque, promoção e configurações do editor visual

Arquivo relacionado:

- `exercicios/semana-2/quando-usar-IA-liquid.md`

---

## ✅ Semana 3 — Avançando com Shopify: Metafields, Metaobjects e Blocos Dinâmicos

Durante a Semana 3, o foco foi aprofundar o conhecimento em personalização avançada do Shopify, utilizando dados customizados e componentes flexíveis.

---

### Desafio 3.1 — Hero Banner com Blocos Dinâmicos

Neste desafio, foi criada uma section `Hero Banner` totalmente flexível, permitindo que o lojista controle o layout através do editor visual[cite: 2].

**Funcionalidades implementadas:**
- **Settings gerais:** Imagem de fundo, overlay com opacidade ajustável, altura mínima e alinhamento de conteúdo[cite: 2].
- **Blocos dinâmicos:** Implementação de 4 tipos de blocos (Título, Parágrafo, Botão e Imagem)[cite: 2].
- **Flexibilidade:** Capacidade de adicionar, remover e reordenar blocos diretamente pelo admin[cite: 2].
- **Responsividade:** Layout adaptativo para desktop e mobile[cite: 2].

Arquivo relacionado:
- `semana-3/hero-banner.liquid`
- `semana-3/section-hero-banner.css`

---

### Desafio 3.2 — Metafields e Metaobjects

Neste desafio, aprofundamos a estrutura de dados do Shopify para enriquecer as páginas de produto[cite: 1].

**Funcionalidades implementadas:**
- **Metafields de Produto:** Criação e exibição de dados customizados como "Material", "Instruções de Cuidado" e "Vídeo do Produto"[cite: 1].
- **Metaobjects (Brand Info):** Criação de uma definição de objeto para gerenciar informações da marca (logo, descrição, site, país) de forma centralizada[cite: 1].
- **Conexão:** Uso de `metaobject reference` para vincular produtos a marcas específicas[cite: 1].
- **Exibição condicional:** As seções só são renderizadas na loja se os dados estiverem preenchidos, garantindo uma interface limpa[cite: 1].

Arquivos relacionados:
- `semana-3/product-extra-info.liquid`
- `semana-3/brand-info.liquid`
- `semana-3/section-product-extra-info.css`
- `semana-3/section-brand-info.css`

## 🛠️ Tecnologias utilizadas

- JavaScript
- Liquid
- Shopify
- Shopify CLI
- Dawn Theme
- Git
- GitHub
- GitHub Copilot
- Markdown
- HTML
- CSS

## 🔀 Padrão de branches

As branches seguem o padrão:

```bash
exercicio/numero-do-desafio-nome-do-desafio
```

Exemplos:

```bash
exercicio/1.1-fluxo-git
exercicio/1.2-caca-bugs
exercicio/1.3-com-sem-ia
exercicio/2.1-liquid-basico
exercicio/2.2-filtros-condicionais
exercicio/2.3-snippet-reutilizavel
```

## 📝 Padrão de commits

Os commits seguem o padrão de commits semânticos:

```bash
feat: nova funcionalidade
fix: correção de bug
docs: alteração em documentação
refactor: melhoria no código sem alterar comportamento
chore: configuração ou tarefa auxiliar
```

Exemplos usados nos desafios:

```bash
docs: adicionar apresentação pessoal
feat: criar calculadora com operações básicas
feat: adicionar cálculo de porcentagem
fix: identificar e corrigir bugs em código gerado por IA
docs: adicionar reflexão sobre uso de IA no desenvolvimento
feat: criar section de exercício Liquid básico
feat: criar section com filtros e condicionais Liquid
feat: criar snippet product-card e section de grade de produtos
chore: adicionar gitignore
```

## 🚀 Como executar os arquivos JavaScript

Para executar os arquivos `.js`, é necessário ter o Node.js instalado.

Exemplos:

```bash
node exercicios/semana-1/calculadora.js
node exercicios/semana-1/caca-bugs-corrigido.js
node exercicios/semana-1/sem-ia.js
node exercicios/semana-1/com-ia.js
```

## 🛒 Como testar os arquivos Liquid no Shopify

Para testar as sections Liquid no preview da Shopify, é necessário copiar os arquivos para as pastas corretas do tema, exemplos:

```bash
sections/exercicio-liquid-basico.liquid
sections/exercicio-filtros.liquid
sections/exercicio-product-grid.liquid
snippets/product-card.liquid
assets/hero-banner.css
```

Depois, dentro da pasta do tema, rode:

```bash
shopify theme dev --store=sua-loja.myshopify.com
```

No editor visual da Shopify, as sections podem ser adicionadas em:

```text
Adicionar seção
```

## 📌 Organização do projeto

O repositório contém:

- Exercícios de JavaScript da Semana 1
- Análises em Markdown
- Reflexões sobre IA
- Atividades práticas de Liquid da Semana 2
- Sections Liquid dos desafios
- Snippet reutilizável de produto
- `.gitignore` configurado
- README atualizado com a documentação da Sprint 1

## 🎯 Aprendizados

Durante a Sprint 1, foram praticados conceitos importantes para o desenvolvimento profissional, como organização de código, versionamento, revisão de código, análise crítica de soluções geradas por IA e escrita de documentação.

Na Semana 1, o foco foi Git, GitHub, JavaScript e uso crítico de IA. Na Semana 2, o foco foi Shopify, Liquid e criação de componentes reutilizáveis em temas.

O principal aprendizado foi que ferramentas de IA podem acelerar o desenvolvimento, mas o código gerado sempre precisa ser revisado, testado e ajustado de acordo com os requisitos do problema. Também foi possível entender melhor como temas Shopify são organizados e como sections e snippets ajudam a criar uma estrutura mais modular e reutilizável.

## 👤 Autor

**Emiliano Souza**
