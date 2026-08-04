# Tabulendário — site

Site estático (HTML + CSS + JS puro), hospedado de graça no GitHub Pages, no domínio `tabulendario.com`.

## Estrutura

```
tabulendario-site/
├── index.html          → página principal
├── links.html          → página de links (usada no link da bio do Instagram)
├── css/
│   ├── style.css       → estilos do site principal (cores, fontes, layout)
│   └── links.css       → estilos específicos da página de links
├── js/
│   └── script.js       → menu mobile, carrosséis (jogos e avaliações), Pixel
├── images/              → todas as fotos, logos e banners
├── robots.txt           → libera indexação e aponta pro sitemap
├── sitemap.xml          → mapa do site enviado ao Google Search Console
└── CNAME                → mantém o domínio tabulendario.com conectado (não mexer)
```

## Como fazer as edições mais comuns

**Trocar um texto** — abra `index.html`, use "localizar" (Ctrl+F) pelo texto atual e edite direto. Não precisa saber programar.

**Trocar o número de WhatsApp** — ele aparece várias vezes, sempre no formato `5579981355465`. Busque por esse número em `index.html` e `links.html` e troque em todas as ocorrências.

**Trocar/adicionar um jogo no carrossel "Jogos em destaque"** — salve a foto da caixa em `images/` seguindo o padrão de nome `jogo-nome-do-jogo.jpg` (retrato, 900×1200px é o ideal) e referencie dentro da seção `id="jogos-destaque"` no `index.html`, copiando o bloco de um card existente. Se for só trocar a foto de um jogo que já existe, basta subir o arquivo novo com o **mesmo nome** do antigo.

**Trocar os banners de categoria (Novato, Aventureiro, Estratégico, Heroico)** — arquivos `images/banner-novato.jpg`, `banner-aventureiro.jpg`, `banner-estrategico.jpg`, `banner-heroico.jpg`. Mesma lógica: suba com o mesmo nome pra substituir.

**Adicionar/editar uma avaliação** — dentro da seção `id="avaliacoes"` no `index.html`, cada avaliação é um bloco `.review-card`. Copie um bloco existente pra adicionar uma nova, ou edite o texto/nome/nota direto.

**Cores e fontes** — tudo centralizado no topo do `css/style.css`, no bloco `:root`.

## Integrações ativas

- **Meta Pixel** (ID `769652489523479`) — instalado em `index.html` e `links.html`. Dispara `PageView` automaticamente e `Contact` sempre que alguém clica em qualquer link de WhatsApp. Acompanhe em Gerenciador de Eventos → Testar eventos.
- **Google Search Console** — propriedade `tabulendario.com` verificada, com `sitemap.xml` enviado.
- **Dados estruturados (JSON-LD)** — no `<head>` do `index.html`: nome, endereço, horário de funcionamento e nota média das avaliações. É o que permite as estrelinhas aparecerem no resultado do Google.

## Publicando alterações

O site já está publicado e o domínio já está conectado — não precisa repetir a configuração inicial. Pra atualizar algo, é só subir o(s) arquivo(s) alterado(s) no GitHub (substituindo os antigos com o mesmo nome) e aguardar alguns minutos: o GitHub Pages republica sozinho.

---

## Apêndice — reconectar do zero (só se um dia precisar recriar o repositório)

1. Repositório novo no GitHub, público
2. Subir todos os arquivos desta pasta
3. Settings → Pages → Source: branch `main`, pasta `/ (root)`
4. Settings → Pages → Custom domain: `tabulendario.com` (isso recria o arquivo `CNAME`)
5. No provedor do domínio, registros DNS:

   | Tipo  | Nome/Host | Valor |
   |-------|-----------|-------|
   | A     | @         | 185.199.108.153 |
   | A     | @         | 185.199.109.153 |
   | A     | @         | 185.199.110.153 |
   | A     | @         | 185.199.111.153 |
   | CNAME | www       | seu-usuario.github.io |

6. Marcar "Enforce HTTPS" depois que o DNS propagar
7. Reenviar o `sitemap.xml` no Google Search Console
