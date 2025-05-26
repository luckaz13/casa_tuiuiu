# Plano de Melhorias para index.html - Casa Tuiuiú

## 1. Melhorias de Performance

### 1.1 Otimização de Imagens
- Converter todas as imagens para formato WebP
- Implementar `srcset` para imagens responsivas
- Adicionar `loading="lazy"` para imagens abaixo do fold
- Definir dimensões explícitas (width/height) para evitar layout shifts

### 1.2 Carregamento de Recursos
```html
<!-- Exemplo de implementação -->
<link rel="preload" href="css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/main.css"></noscript>
```

### 1.3 JavaScript
- Mover scripts para o final do body
- Adicionar `defer` ou `async` onde aplicável
- Considerar code splitting para funcionalidades não críticas

## 2. Melhorias de Acessibilidade

### 2.1 ARIA e Semântica
- Adicionar `aria-label` em ícones decorativos
- Implementar `role` adequado em elementos interativos
- Usar elementos semânticos (`section`, `article`, `time`)

### 2.2 Navegação por Teclado
- Melhorar estilos de `:focus-visible`
- Garantir ordem lógica de tabindex
- Testar navegação apenas com teclado

### 2.3 Contraste e Legibilidade
- Verificar relação de contraste mínimo 4.5:1
- Garantir tamanho de fonte adequado
- Oferecer opção de alto contraste

## 3. Melhorias de SEO

### 3.1 Metatags
- Adicionar metatag `canonical`
- Expandir `og:image` com múltiplos tamanhos
- Incluir metatags para Twitter Cards

### 3.2 Structured Data
```json
// Exemplo expandido
{
  "@type": "LodgingBusiness",
  "priceRange": "R$300-R$600",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "reviewCount": "42"
  }
}
```

## 4. Melhorias de Estrutura

### 4.1 Componentização
- Criar partials para:
  - Header/Navbar
  - Seção de Contato
  - Cards de Comodidades
  - Galeria de Imagens

### 4.2 CSS
- Adotar metodologia BEM
- Extrair estilos repetitivos em utilitários
- Implementar variáveis CSS para cores e espaçamentos

## 5. Melhorias de UX

### 5.1 Formulário de Contato
- Adicionar formulário direto além dos links externos
- Incluir validação client-side
- Feedback visual ao enviar

### 5.2 Galeria Interativa
- Implementar lightbox para ampliar imagens
- Adicionar navegação por setas
- Mostrar descrição ampliada

## Cronograma de Implementação

| Fase | Tarefas | Tempo Estimado |
|------|---------|----------------|
| 1 | Performance + Acessibilidade | 3 dias |
| 2 | SEO + Componentização | 4 dias |
| 3 | Melhorias de UX | Contínuo |

## Próximos Passos
1. Implementar melhorias de performance
2. Validar acessibilidade com ferramentas automáticas
3. Testar em múltiplos dispositivos
4. Monitorar métricas pós-implementação
## Como atualizar a CSP para permitir apenas o CSS crítico inline

1. Copie o conteúdo exato do bloco `<style>` do CSS crítico inline inserido no `<head>` do seu `index.html`.
2. Acesse uma ferramenta online confiável, como [https://report-uri.com/home/hash](https://report-uri.com/home/hash), cole o CSS e gere o hash SHA256 (em formato base64).
3. No seu `index.html`, localize a meta tag CSP:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' ...; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com 'unsafe-inline'; ...">
```
4. Remova `'unsafe-inline'` de `style-src` e adicione o hash gerado, por exemplo:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' ...; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com 'sha256-...'; ...">
```
5. Salve o arquivo.

**Observação:** O hash deve ser gerado exatamente com o conteúdo do CSS crítico inline, sem quebras de linha extras ou espaços a mais.

---
Se precisar de um exemplo prático ou do conteúdo exato do CSS crítico para gerar o hash, basta pedir!