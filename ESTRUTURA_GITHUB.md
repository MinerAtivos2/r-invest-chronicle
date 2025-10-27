# 📁 Estrutura Completa do Projeto no GitHub

## 🗂️ Árvore de Diretórios

```
seu-repo/
├── public/
│   ├── posts/              # ← Posts HTML completos (Opção 2)
│   │   ├── .gitkeep
│   │   ├── post-7.html     # Posts com gráficos R
│   │   └── post-8.html
│   ├── images/             # ← Imagens locais (opcional)
│   │   ├── post-1-hero.jpg
│   │   └── analise-grafico.png
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── PostCard.tsx    # ← Exibe cards com imagens
│   │   ├── SearchBar.tsx
│   │   └── ui/
│   │
│   ├── data/
│   │   └── posts.ts        # ← ARQUIVO PRINCIPAL para posts
│   │
│   ├── pages/
│   │   ├── Index.tsx       # Página principal (lista de posts)
│   │   ├── Post.tsx        # Página individual do post
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── GUIA_POSTS_R.md         # ← Guia para criar posts via R
├── ESTRUTURA_GITHUB.md     # ← Este arquivo
├── README.md
└── package.json
```

---

## 📝 Opções de Publicação (Como Funcionam)

### **Opção 1: Posts Simples (Recomendada)**

#### Estrutura do Post
Edite apenas `src/data/posts.ts`:

```typescript
{
  id: "7",
  title: "Análise de Dividendos Q1 2024",
  excerpt: "Resumo em 1-2 frases do conteúdo",
  content: "Conteúdo completo do post.\n\nPode ter múltiplos parágrafos.\n\n- Listas\n- Formatação básica",
  author: "Seu Nome",
  date: "2024-03-20",
  tags: ["Dividendos", "Análise"],
  readTime: "5 min",
  imageUrl: "https://images.unsplash.com/photo-xxxxx?w=800&h=400&fit=crop"  // Opcional
}
```

#### Onde ficam as imagens?
Você tem 3 opções:

1. **URLs externas (Unsplash, Imgur, etc.)** - Recomendado
   ```typescript
   imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
   ```

2. **Imagens locais em `public/images/`**
   ```typescript
   imageUrl: "/images/minha-analise.jpg"
   ```
   - Adicione o arquivo em `public/images/minha-analise.jpg` no GitHub

3. **Sem imagem**
   - Apenas omita o campo `imageUrl`

---

### **Opção 2: Posts HTML Completos (Para gráficos R)**

#### Quando usar?
- Gráficos interativos (plotly, ggplot2)
- Tabelas complexas
- Visualizações customizadas

#### Estrutura
1. **Gere HTML**: `public/posts/post-7.html`
2. **Referência no posts.ts**:
```typescript
{
  id: "7",
  title: "Análise com Gráficos",
  excerpt: "Post com visualizações interativas...",
  content: '<iframe src="/posts/post-7.html" width="100%" height="800px" style="border:none;"></iframe>',
  author: "R Analytics",
  date: "2024-03-20",
  tags: ["Gráficos", "R"],
  readTime: "10 min"
}
```

---

## 🔄 Passo a Passo para Atualizações

### **Método 1: Via Lovable (Mais Simples)**

#### 1. Conectar ao GitHub
- Clique em **GitHub** → **Connect to GitHub** no Lovable
- Autorize e crie o repositório

#### 2. Adicionar Post Simples
- Edite `src/data/posts.ts` diretamente no Lovable
- Adicione novo objeto antes do `];` final
- Alterações são automaticamente enviadas ao GitHub

#### 3. Adicionar Imagens
**Opção A: URL externa**
```typescript
imageUrl: "https://images.unsplash.com/photo-1234567890"
```

**Opção B: Imagem local**
1. Faça upload da imagem para `public/images/` no GitHub
2. Referencie como:
```typescript
imageUrl: "/images/nome-imagem.jpg"
```

#### 4. GitHub Pages Publica Automaticamente
- Após push, aguarde 1-2 minutos
- Acesse: `https://seu-usuario.github.io/seu-repo/`

---

### **Método 2: Via R Local (Automação Completa)**

#### Setup Inicial (Uma vez apenas)

```r
# Instalar pacotes
install.packages(c("glue", "git2r", "rmarkdown"))

library(glue)
library(git2r)

# 1. Clonar repositório
clone(
  "https://github.com/seu-usuario/seu-repo.git",
  "~/meu-blog"
)

# 2. Configurar diretório de trabalho
setwd("~/meu-blog")

# 3. Configurar Git (se necessário)
config(user.name = "Seu Nome", user.email = "seu@email.com")
```

#### Workflow Diário

##### **A) Adicionar Post Simples**

```r
# Copie a função adicionar_post() do GUIA_POSTS_R.md
source("scripts/adicionar_post.R")  # Salve a função aqui

# Adicionar post
adicionar_post(
  titulo = "Análise Semanal - 20 Mar 2024",
  resumo = "Principais movimentos do mercado esta semana",
  conteudo = "Conteúdo completo aqui...\n\nPode ter múltiplos parágrafos.",
  autor = "R Analytics",
  tags = c("Semanal", "Análise", "Mercado"),
  tempo_leitura = "6 min",
  imagem = "https://images.unsplash.com/photo-xxx"  # Opcional
)

# Commit e push
add(path = "src/data/posts.ts")
commit(message = "Adicionar análise semanal 20/03")
push()
```

##### **B) Adicionar Post com Gráficos HTML**

```r
library(ggplot2)
library(rmarkdown)

# 1. Criar conteúdo RMarkdown
conteudo_rmd <- '
## Análise de Volatilidade

```{r warning=FALSE, message=FALSE}
library(ggplot2)

dados <- data.frame(
  data = seq(as.Date("2024-01-01"), by = "day", length.out = 90),
  volatilidade = cumsum(rnorm(90, 0, 0.015))
)

ggplot(dados, aes(x = data, y = volatilidade)) +
  geom_line(color = "#2563eb", size = 1.2) +
  geom_smooth(method = "loess", se = TRUE, alpha = 0.2) +
  theme_minimal() +
  labs(
    title = "Volatilidade Histórica 90 dias",
    x = "Data",
    y = "Volatilidade (%)"
  )
```

## Principais Conclusões

1. **Tendência de alta** observada no último mês
2. **Picos de volatilidade** em eventos específicos
3. **Recomendações** para ajuste de carteira
'

# 2. Gerar HTML
arquivo_rmd <- tempfile(fileext = ".Rmd")
writeLines(conteudo_rmd, arquivo_rmd)

render(
  arquivo_rmd,
  output_file = "public/posts/post-7.html",
  output_format = html_document(
    theme = "flatly",
    highlight = "tango",
    toc = TRUE
  )
)

# 3. Adicionar referência ao posts.ts
adicionar_post(
  titulo = "Análise de Volatilidade Q1 2024",
  resumo = "Análise completa com gráficos interativos do comportamento do mercado",
  conteudo = '<iframe src="/posts/post-7.html" width="100%" height="800px" style="border:none;"></iframe>',
  autor = "R Analytics Team",
  tags = c("Volatilidade", "Análise", "Gráficos"),
  tempo_leitura = "10 min"
)

# 4. Commit e push (inclui HTML + referência)
add(path = c("public/posts/post-7.html", "src/data/posts.ts"))
commit(message = "Adicionar análise de volatilidade com gráficos")
push()
```

---

## 🖼️ Guia de Imagens

### **Opção 1: Unsplash (Recomendada)**

```r
# Buscar imagem no Unsplash: https://unsplash.com/
# Copiar URL com parâmetros de otimização
imageUrl = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
```

**Vantagens:**
- ✅ Sem gerenciamento de arquivos
- ✅ CDN rápido
- ✅ Redimensionamento automático
- ✅ Imagens profissionais gratuitas

### **Opção 2: Imgur**

```r
# Upload em: https://imgur.com/
imageUrl = "https://i.imgur.com/xxxxx.jpg"
```

### **Opção 3: Imagens Locais**

```r
# 1. Adicione arquivo em public/images/
# 2. Commit e push
add(path = "public/images/analise-dividendos.jpg")
commit(message = "Adicionar imagem de análise")
push()

# 3. Referencie no post
imageUrl = "/images/analise-dividendos.jpg"
```

**Quando usar:**
- Imagens geradas pelo R (gráficos exportados)
- Infográficos personalizados
- Screenshots de análises

---

## 🚀 Checklist de Publicação

### Setup Inicial (Uma vez)
- [ ] Repositório conectado ao GitHub via Lovable
- [ ] GitHub Pages ativado em Settings → Pages
- [ ] Branch `main` selecionado como fonte
- [ ] URL de publicação confirmada: `https://usuario.github.io/repo/`

### Para Cada Post
- [ ] ID único escolhido (próximo número disponível)
- [ ] Data no formato `YYYY-MM-DD`
- [ ] Tags escolhidas (2-4 tags)
- [ ] Tempo de leitura estimado
- [ ] Imagem escolhida (se aplicável)
- [ ] Conteúdo revisado (quebras de linha com `\n\n`)
- [ ] Post adicionado ao `src/data/posts.ts`
- [ ] Commit com mensagem descritiva
- [ ] Push para GitHub
- [ ] Aguardar 1-2 min e verificar no site

---

## 🆘 Troubleshooting

### Posts não aparecem no site

**Verifique:**
```r
# 1. Sintaxe do TypeScript está correta?
cat src/data/posts.ts  # Ver conteúdo

# 2. Vírgulas estão corretas?
# Cada post precisa de vírgula, exceto o último

# 3. Aspas estão escapadas?
conteudo <- 'Texto com "aspas" deve ser: Texto com \\"aspas\\"'
```

### Imagens não carregam

**Checklist:**
- [ ] URL está correta e acessível?
- [ ] Arquivo existe em `public/images/`?
- [ ] Caminho começa com `/` para imagens locais?
- [ ] HTTPS usado para URLs externas?

### HTML posts não aparecem

**Verifique:**
```r
# 1. Arquivo HTML foi commitado?
file.exists("public/posts/post-7.html")

# 2. Push foi feito?
status()  # Ver status do git

# 3. Referência está correta?
# Deve ser: '<iframe src="/posts/post-7.html" ...'
```

### Erro de permissão no Git

```r
# Configurar credenciais
cred <- cred_user_pass(
  username = "seu-usuario",
  password = "seu-token-github"  # Gerar em GitHub Settings → Developer settings → Tokens
)

push(credentials = cred)
```

---

## 📊 Exemplo Completo: Post com Análise R

```r
# ===== SCRIPT COMPLETO: Análise Semanal =====

library(glue)
library(git2r)
library(ggplot2)
library(rmarkdown)

# 1. Carregar dados (exemplo)
dados_mercado <- data.frame(
  data = seq(as.Date("2024-03-01"), as.Date("2024-03-20"), by = "day"),
  ibov = cumsum(rnorm(20, 0.5, 2)) + 100
)

# 2. Criar análise textual
analise_texto <- glue("
Durante as últimas 3 semanas, o Ibovespa apresentou:

- **Valorização acumulada**: {round(tail(dados_mercado$ibov, 1) - 100, 2)}%
- **Maior alta**: {max(dados_mercado$ibov) - 100}%
- **Volatilidade**: Moderada

## Recomendações

1. Manter posições em ações de baixa volatilidade
2. Considerar realização parcial de lucros
3. Aguardar correção para novas entradas
")

# 3. Gerar gráfico HTML (opcional)
rmd_content <- glue('
## Desempenho do Ibovespa

```{{r echo=FALSE}}
library(ggplot2)
dados <- data.frame(
  data = seq(as.Date("2024-03-01"), as.Date("2024-03-20"), by = "day"),
  ibov = {paste(deparse(dados_mercado$ibov), collapse = "")}
)

ggplot(dados, aes(x = data, y = ibov)) +
  geom_line(color = "#2563eb", size = 1.2) +
  theme_minimal() +
  labs(title = "Ibovespa - Março 2024", x = "", y = "Variação (%)")
```

{analise_texto}
')

# 4. Escolher método de publicação

# OPÇÃO A: Post simples (texto + imagem)
source("scripts/adicionar_post.R")
adicionar_post(
  titulo = "Análise Semanal - 20 Março 2024",
  resumo = "Ibovespa acumula alta de 2.3% na semana com volatilidade moderada",
  conteudo = as.character(analise_texto),
  tags = c("Semanal", "Ibovespa", "Análise"),
  imagem = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
)

# OPÇÃO B: Post com HTML (inclui gráfico)
arquivo_rmd <- tempfile(fileext = ".Rmd")
writeLines(rmd_content, arquivo_rmd)
render(arquivo_rmd, output_file = "public/posts/post-analise-semanal.html")

adicionar_post(
  titulo = "Análise Semanal - 20 Março 2024",
  resumo = "Ibovespa acumula alta de 2.3% na semana com volatilidade moderada",
  conteudo = '<iframe src="/posts/post-analise-semanal.html" width="100%" height="800px" style="border:none;"></iframe>',
  tags = c("Semanal", "Ibovespa", "Análise", "Gráficos")
)

# 5. Commit e push
add(path = ".")  # Adiciona todos os arquivos modificados
commit(message = "Análise semanal - 20 Março 2024")
push()

cat("✅ Post publicado! Acesse em 1-2 minutos.\n")
```

---

## 🎯 Resumo: Qual Método Escolher?

| Critério | Opção 1: Posts Simples | Opção 2: HTML Completo |
|----------|------------------------|------------------------|
| **Complexidade** | ⭐ Simples | ⭐⭐⭐ Avançado |
| **Gráficos R** | ❌ Não | ✅ Sim |
| **Tabelas Interativas** | ❌ Limitado | ✅ Sim |
| **Tempo de Setup** | 5 min | 15 min |
| **Manutenção** | Fácil | Moderada |
| **Recomendado para** | Maioria dos posts | Posts técnicos |

**Recomendação:** Comece com a **Opção 1** para 90% dos posts. Use a **Opção 2** apenas quando precisar de visualizações avançadas.

---

## 📚 Arquivos de Referência

- `GUIA_POSTS_R.md` - Scripts R detalhados
- `README_POSTS.md` - Visão geral da estrutura de posts
- `src/data/posts.ts` - Arquivo principal de dados

---

**Última atualização:** 2024-03-20
