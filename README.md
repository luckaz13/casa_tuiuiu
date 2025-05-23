# Casa Tuiuiú - Website de Aluguel de Temporada

Website profissional para divulgação e reservas da Casa Tuiuiú, uma propriedade de aluguel de temporada localizada em Bonito, MS, no coração do Pantanal.

## 🏠 Sobre a Casa

A Casa Tuiuiú é uma propriedade de dois andares situada em um condomínio seguro e tranquilo, que conta com lagos naturais, cercada por natureza e com vista para uma bela área verde do Pantanal.

### Características:
- 3 quartos (1 suíte com duas varandas)
- 2 banheiros
- Capacidade para 8 pessoas
- Ar-condicionado em todos os quartos
- Pet-friendly
- Área de churrasco completa
- Wi-Fi de alta velocidade
- Estacionamento coberto para 2 carros

## 🚀 Melhorias Implementadas

### Estrutura e Organização
- ✅ **Estrutura de pastas organizada**: `css/`, `js/`, `images/`
- ✅ **CSS separado**: Removido CSS inline, criado `css/main.css`
- ✅ **JavaScript modularizado**: Criado `js/main.js` com todas as funcionalidades
- ✅ **Imagens organizadas**: Movidas para pasta `images/`

### Segurança
- ✅ **Headers de segurança**: Content Security Policy, X-Frame-Options, etc.
- ✅ **Arquivo .htaccess**: Configurações de segurança e cache
- ✅ **Proteção contra XSS**: Headers de proteção implementados
- ✅ **HTTPS ready**: Configurações preparadas para SSL

### SEO e Marketing
- ✅ **Palavras-chave locais**: Bonito MS, Pantanal, turismo, hospedagem
- ✅ **Meta tags otimizadas**: Descrições melhoradas com foco local
- ✅ **Schema.org estruturado**: Dados estruturados para negócios de hospedagem
- ✅ **Sitemap.xml**: Mapa do site para motores de busca
- ✅ **Robots.txt**: Diretrizes para crawlers
- ✅ **Open Graph**: Otimizado para compartilhamento social
- ✅ **Google Analytics**: Integração preparada (requer ID)

### Funcionalidades Sociais
- ✅ **Botões de compartilhamento**: Facebook, Twitter, WhatsApp, Email
- ✅ **Tracking de eventos**: Compartilhamentos rastreados no Analytics
- ✅ **Links sociais**: Preparados no footer

### Mobile e UX
- ✅ **Design responsivo aprimorado**: Melhor experiência mobile
- ✅ **Touch targets otimizados**: Botões com tamanho mínimo de 44px
- ✅ **Navegação mobile melhorada**: Menu hambúrguer otimizado
- ✅ **Formulários mobile-friendly**: Inputs com tamanho adequado
- ✅ **Galeria responsiva**: Grid adaptativo para diferentes telas
- ✅ **Performance mobile**: Otimizações para conexões lentas

### Acessibilidade
- ✅ **Skip links**: Navegação por teclado
- ✅ **ARIA labels**: Elementos interativos rotulados
- ✅ **Alt texts descritivos**: Imagens com descrições detalhadas
- ✅ **Contraste melhorado**: Cores com melhor acessibilidade
- ✅ **Foco visível**: Indicadores de foco para navegação por teclado

### Performance
- ✅ **Lazy loading**: Carregamento sob demanda de imagens
- ✅ **Preload de recursos**: Recursos críticos carregados primeiro
- ✅ **Compressão**: Configurada no .htaccess
- ✅ **Cache headers**: Otimização de cache
- ✅ **Monitoramento**: Tracking de performance

## 📁 Estrutura do Projeto

```
casa-aluguel-bonito/
├── css/
│   ├── main.css          # Estilos principais
│   └── style.css         # Estilos adicionais
├── js/
│   └── main.js           # JavaScript principal
├── images/
│   ├── 1.jpg            # Entrada do condomínio
│   ├── 2.jpeg           # Lago do condomínio
│   ├── 3.jpg            # Vista aérea
│   └── 4.jpg            # Balneário do Sol
├── index.html           # Página principal
├── sitemap.xml          # Mapa do site
├── robots.txt           # Diretrizes para crawlers
├── .htaccess           # Configurações do servidor
├── deploy.bat          # Script de deploy (Windows)
├── deploy.ps1          # Script de deploy (PowerShell)
└── README.md           # Este arquivo
```

## 🔧 Configuração

### Google Analytics
1. Substitua `GA_MEASUREMENT_ID` no arquivo `js/main.js` pelo seu ID do Google Analytics
2. Substitua `GA_MEASUREMENT_ID` no arquivo `index.html` pelo mesmo ID

### Links de Reserva
Atualize os seguintes placeholders no arquivo `index.html`:
- `SEU_ID_AIRBNB` - ID da propriedade no Airbnb
- `SEU_ID_BOOKING` - ID da propriedade no Booking.com
- `SEU_NUMERO_WHATSAPP` - Número do WhatsApp no formato internacional

### Redes Sociais
Atualize os links das redes sociais no footer com os perfis reais.

## 🚀 Deploy

### GitHub Pages
1. Faça push do código para um repositório GitHub
2. Ative GitHub Pages nas configurações do repositório
3. O site estará disponível em `https://username.github.io/repository-name/`

### Servidor Próprio
1. Faça upload dos arquivos para o servidor
2. Certifique-se de que o servidor suporta .htaccess (Apache)
3. Configure SSL/HTTPS para melhor segurança e SEO

## 📊 Monitoramento

### Google Analytics
- Pageviews e sessões
- Eventos de compartilhamento
- Cliques em botões de reserva
- Scroll depth
- Performance timing

### Google Search Console
1. Adicione a propriedade no Search Console
2. Envie o sitemap.xml
3. Monitore indexação e performance de busca

## 🔍 SEO

### Palavras-chave Principais
- Casa aluguel Bonito MS
- Temporada Pantanal
- Hospedagem Bonito MS
- Turismo Pantanal
- Casa Tuiuiú
- Condomínio seguro Bonito

### Meta Descrições
Otimizadas para incluir localização (Bonito, MS, Pantanal) e características principais da propriedade.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔒 Segurança

- Content Security Policy implementada
- Headers de segurança configurados
- Proteção contra XSS e clickjacking
- Arquivos sensíveis protegidos

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte a documentação dos frameworks utilizados:
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Font Awesome](https://fontawesome.com/docs)
- [Google Analytics](https://developers.google.com/analytics)

---

**Casa Tuiuiú** - Sua hospedagem confortável e segura no Pantanal 🦆