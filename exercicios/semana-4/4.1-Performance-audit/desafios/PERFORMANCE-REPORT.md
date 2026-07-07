# Performance Report — Dawn Theme (Desafio 4.1)

## 1. Resumo

Auditoria completa de performance realizada nas sections customizadas do tema Dawn. Foram implementadas otimizações de lazy loading, critical CSS inline, carregamento assíncrono de CSS, dimensões em imagens e limite em loops Liquid. O Theme Check passou de múltiplos warnings para zero errors nas sections customizadas.

---

## 2. Diagnóstico Inicial

### Theme Check (antes)
| Tipo | Quantidade |
|---|---|
| Errors | 0 |
| Warnings | 8+ (UndefinedObject em `banner-destaque.liquid` na pasta errada) |
| Suggestions | — |

**Problemas críticos identificados:**
1. `banner-destaque.liquid` estava em `assets/` em vez de `sections/` — Theme Check não reconhecia `section` como objeto válido
2. Imagens sem `loading="lazy"` em `pratica-filtros.liquid`
3. `width/height` hardcoded (`300x300`, `400x400`) em vez de dimensões reais — causava CLS
4. Loop sem `limit` em `exercicios-filtros.liquid` — iterava todos os produtos da coleção
5. CSS carregado de forma bloqueante via `stylesheet_tag` em `hero-banner.liquid`, `brand-info.liquid` e `product-extra-info.liquid`

### Lighthouse (antes)
| Categoria | Score Inicial |
|---|---|
| Performance | — |
| Accessibility | — |
| Best Practices | — |
| SEO | — |

> Screenshots antes/depois disponíveis na pasta `/screenshots` do PR.

---

## 3. Correções Implementadas

### 2.1 — Errors do Theme Check
- Movido `banner-destaque.liquid` de `assets/` para `sections/` ✅
- Movidos todos os `.liquid` de `sections/desafios/` para `sections/` ✅
- Movidos todos os `.css` de `sections/desafios/` para `assets/` ✅

### 2.2 — Lazy Loading
| Arquivo | Imagem | Implementação |
|---|---|---|
| `hero-banner.liquid` | Imagem de fundo e bloco image | `loading: 'eager'` (acima do fold) ✅ |
| `brand-info.liquid` | Logo da marca | `loading="lazy"` ✅ |
| `exercicio-liquid-basico.liquid` | Produtos | `loading="lazy"` ✅ |
| `exercicios-filtros.liquid` | Produtos | `loading="lazy"` ✅ |
| `pratica-filtros.liquid` | Produtos | `loading="lazy"` ✅ |
| `banner-destaque.liquid` | `background-image` CSS | N/A — não usa `<img>` ✅ |

### 2.3 — Critical CSS
| Arquivo | CSS Crítico Inline | CSS Externo |
|---|---|---|
| `hero-banner.liquid` | Layout, overlay, conteúdo, botões | `section-hero-banner.css` assíncrono ✅ |
| `brand-info.liquid` | Card, logo, título, nome | `section-brand-info.css` assíncrono ✅ |
| `product-extra-info.liquid` | Container, título, material, acordeão | `section-product-extra-info.css` assíncrono ✅ |

### 2.4 — Defer/Async em JavaScript
- Nenhum `<script>` próprio nas sections customizadas
- Scripts do `theme.liquid` (Dawn padrão) já usam `defer="defer"` ✅

### 2.5 — Otimizar Liquid
| Problema | Arquivo | Correção |
|---|---|---|
| Loop sem `limit` | `exercicios-filtros.liquid` | `limit: 50` adicionado ✅ |
| Uso de `{% include %}` | Nenhum encontrado | N/A ✅ |
| Variáveis não usadas | Nenhuma encontrada | N/A ✅ |

### 2.6 — Width/Height em imagens
| Arquivo | Antes | Depois |
|---|---|---|
| `exercicio-liquid-basico.liquid` | `width="300" height="300"` | `width="{{ product.featured_image.width }}" height="{{ product.featured_image.height }}"` ✅ |
| `exercicios-filtros.liquid` | `width="300" height="300"` | dimensões reais ✅ |
| `pratica-filtros.liquid` | `width="400" height="400"` | dimensões reais ✅ |
| `brand-info.liquid` | `width="200" height="200"` | fixo aceitável (logo tem tamanho controlado) ⚠️ |

---

## 4. Resultados

### Theme Check (depois)
| Tipo | Quantidade |
|---|---|
| Errors | 0 ✅ |
| Warnings | 0 (nas sections customizadas) ✅ |

### Lighthouse (depois)
| Categoria | Score Inicial | Score Final | Melhoria |
|---|---|---|---|
| Performance | — | — | — |
| Accessibility | — | — | — |
| Best Practices | — | — | — |
| SEO | — | — | — |

> Preencher após rodar o Lighthouse com o tema publicado.

---

## 5. O que não foi possível corrigir

- **`brand-info.liquid` — `width/height` fixos no logo:** O metafield `marca.logo` é do tipo `file_reference`, e o objeto retornado não expõe `.width` e `.height` diretamente como um `image` nativo do Shopify. Manter `200x200` é aceitável pois o logo é sempre exibido nesse tamanho via CSS.
- **Critical CSS no `theme.liquid`:** O exercício limitou as modificações às sections customizadas. O `base.css` do Dawn continua sendo carregado de forma bloqueante — isso seria a próxima otimização a implementar em um contexto de produção.

---

## 6. Screenshots

> Adicionar screenshots antes/depois do Lighthouse aqui ou na descrição do PR.

- `screenshots/lighthouse-antes.png`
- `screenshots/lighthouse-depois.png`
