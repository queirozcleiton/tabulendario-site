# Tabulendário — site novo (grátis, sem Wix)

Site estático (HTML + CSS + JS puro), pronto para publicar de graça no GitHub Pages.

## Estrutura
```
tabulendario-site/
├── index.html
├── css/style.css
├── js/script.js
├── images/
└── README.md
```

## O que foi corrigido em relação ao site antigo (Wix)
- Redes sociais agora apontam para os perfis reais (Instagram/Facebook do Tabulendário, não da Wix)
- Número de WhatsApp padronizado em todos os botões: `55 79 98135-5465`
- Rodapé com o nome certo da empresa
- Botão de entrada no grupo do WhatsApp adicionado
- `alt` descritivo em todas as imagens (acessibilidade e SEO)
- Sem a tag `noindex` — o Google poderá indexar o site
- Botão flutuante de WhatsApp fixo na tela

## Como publicar no GitHub Pages (passo a passo)

1. **Crie uma conta no GitHub** (gratuita): https://github.com/join

2. **Crie um repositório novo**
   - Clique em "New repository"
   - Nome sugerido: `tabulendario-site`
   - Deixe como **Público**
   - Não marque "Add a README" (você já tem um)

3. **Suba os arquivos**
   - No repositório vazio, clique em "uploading an existing file"
   - Arraste TODA a pasta `tabulendario-site` (ou os arquivos/pastas: `index.html`, `css`, `js`, `images`)
   - Clique em "Commit changes"

4. **Ative o GitHub Pages**
   - No repositório, vá em **Settings → Pages**
   - Em "Source", selecione a branch `main` e a pasta `/ (root)`
   - Clique em **Save**
   - Em alguns minutos seu site estará em algo como:
     `https://seu-usuario.github.io/tabulendario-site/`

5. **Conectar o domínio `tabulendario.com`**
   - Ainda em Settings → Pages, no campo "Custom domain", digite `tabulendario.com` e salve
     (isso cria automaticamente um arquivo `CNAME` no repositório)
   - No painel do seu provedor de domínio (Registro.br, GoDaddy etc.), adicione estes registros DNS:

     | Tipo  | Nome/Host | Valor |
     |-------|-----------|-------|
     | A     | @         | 185.199.108.153 |
     | A     | @         | 185.199.109.153 |
     | A     | @         | 185.199.110.153 |
     | A     | @         | 185.199.111.153 |
     | CNAME | www       | seu-usuario.github.io |

   - A propagação pode levar de alguns minutos até 24h
   - Depois que propagar, marque "Enforce HTTPS" nas configurações do Pages (certificado gratuito e automático)

6. **Indexação no Google**
   - Acesse o [Google Search Console](https://search.google.com/search-console)
   - Adicione a propriedade `tabulendario.com`
   - Envie o site para indexação

## Editando o conteúdo depois
Todo o texto está direto no `index.html` — dá pra editar sem programar, só localizando o trecho pelo texto atual. Cores e fontes ficam em `css/style.css`, no topo do arquivo (bloco `:root`).
