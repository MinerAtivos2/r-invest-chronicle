# 📝 Guia Completo: Criar Posts via R

Este guia mostra como gerar e publicar posts no blog usando R.

## 🎯 Opções de Publicação

### **Opção 1: Posts Simples (Recomendado para Começar)**
Edite diretamente o arquivo `src/data/posts.ts`

### **Opção 2: Posts HTML Completos (Avançado)**
Gere HTMLs completos com gráficos, tabelas interativas, etc.

---

## 📊 Opção 1: Posts no arquivo TypeScript

### Estrutura do Post

Cada post em `src/data/posts.ts` tem este formato:

```typescript
{
  id: "1",
  title: "Título do Post",
  excerpt: "Resumo em 1-2 frases",
  content: "Conteúdo completo pode incluir:\n\n- Parágrafos\n- Quebras de linha\n- Formatação básica",
  author: "Seu Nome",
  date: "2024-03-15",
  tags: ["Ações", "Análise"],
  readTime: "5 min"
}
```

### Script R para Adicionar Post

```r
# Instalar pacotes necessários
if (!require("glue")) install.packages("glue")
library(glue)

# Função para adicionar post
adicionar_post <- function(
  titulo,
  resumo,
  conteudo,
  autor = "Análise R",
  tags = c("Investimentos"),
  tempo_leitura = "5 min"
) {
  
  # Ler arquivo atual
  arquivo <- "src/data/posts.ts"
  linhas <- readLines(arquivo, warn = FALSE)
  
  # Encontrar último ID usado
  ids <- gsub('.*id: "(\\d+)".*', "\\1", grep('id: "', linhas, value = TRUE))
  novo_id <- as.character(max(as.numeric(ids)) + 1)
  
  # Formatar tags
  tags_formatadas <- paste0('["', paste(tags, collapse = '", "'), '"]')
  
  # Escapar aspas no conteúdo
  conteudo_escapado <- gsub('"', '\\\\"', conteudo)
  conteudo_escapado <- gsub('\n', '\\\\n\\\\n', conteudo_escapado)
  
  # Criar novo post
  novo_post <- glue('  ,
  {{
    id: "{novo_id}",
    title: "{titulo}",
    excerpt: "{resumo}",
    content: "{conteudo_escapado}",
    author: "{autor}",
    date: "{Sys.Date()}",
    tags: {tags_formatadas},
    readTime: "{tempo_leitura}"
  }}')
  
  # Encontrar linha com ];
  linha_final <- which(grepl("^];$", linhas))
  
  # Inserir novo post
  linhas_novas <- c(
    linhas[1:(linha_final-1)],
    as.character(novo_post),
    linhas[linha_final:length(linhas)]
  )
  
  # Salvar
  writeLines(linhas_novas, arquivo)
  cat("✓ Post adicionado com ID:", novo_id, "\n")
  
  return(novo_id)
}

# Exemplo de uso
adicionar_post(
  titulo = "Análise de Dividendos Q1 2024",
  resumo = "Análise estatística das melhores pagadoras de dividendos no primeiro trimestre.",
  conteudo = "Este relatório apresenta uma análise detalhada dos dividendos...
  
Principais descobertas:
- Setor elétrico liderou com 8.5% de dividend yield
- Crescimento de 12% em relação ao trimestre anterior
- Recomendações para diversificação de carteira",
  autor = "R Analytics Team",
  tags = c("Dividendos", "Ações", "Análise Quantitativa"),
  tempo_leitura = "8 min"
)
```

### Script Completo para Workflow Automatizado

```r
# setup_blog.R - Configure uma vez

library(glue)
library(git2r)

# Configurar repositório
config_blog <- function(repo_url, pasta_local = "meu-blog") {
  if (!dir.exists(pasta_local)) {
    clone(repo_url, pasta_local)
  }
  setwd(pasta_local)
  cat("✓ Repositório configurado\n")
}

# Publicar post
publicar_post <- function(
  titulo,
  conteudo,
  resumo = substr(conteudo, 1, 150),
  tags = c("Investimentos"),
  commit_msg = NULL
) {
  
  # Adicionar post
  id <- adicionar_post(titulo, resumo, conteudo, tags = tags)
  
  # Git add, commit, push
  add(path = "src/data/posts.ts")
  
  if (is.null(commit_msg)) {
    commit_msg <- paste("Adicionar post:", titulo)
  }
  
  commit(message = commit_msg)
  push()
  
  cat("✓ Post publicado! ID:", id, "\n")
  cat("✓ Disponível em: https://seu-usuario.github.io/seu-repo/post/", id, "\n", sep="")
  
  return(id)
}

# Uso:
# config_blog("https://github.com/seu-usuario/seu-repo.git")
# publicar_post(
#   titulo = "Meu Primeiro Post Automático",
#   conteudo = "Conteúdo gerado automaticamente pelo R...",
#   tags = c("Automação", "R", "Investimentos")
# )
```

---

## 🚀 Opção 2: Posts HTML Completos (Com Gráficos R)

Para posts com visualizações complexas, gráficos interativos, etc.

### Estrutura de Pastas

```
seu-repo/
├── public/
│   └── posts/          # ← Posts HTML gerados pelo R
│       ├── post-1.html
│       ├── post-2.html
│       └── ...
└── src/
    └── data/
        └── posts.ts    # ← Metadados e links para HTMLs
```

### Script R para Gerar HTML Completo

```r
library(ggplot2)
library(plotly)
library(rmarkdown)

# Gerar post HTML com gráficos
gerar_post_html <- function(
  id,
  titulo,
  conteudo_rmd,
  pasta_saida = "public/posts"
) {
  
  # Criar pasta se não existir
  if (!dir.exists(pasta_saida)) {
    dir.create(pasta_saida, recursive = TRUE)
  }
  
  # Arquivo temporário RMarkdown
  arquivo_rmd <- tempfile(fileext = ".Rmd")
  
  # Template HTML
  template <- glue('
---
title: "{titulo}"
output: 
  html_document:
    theme: flatly
    highlight: tango
    toc: true
    toc_float: true
---

{conteudo_rmd}
  ')
  
  writeLines(template, arquivo_rmd)
  
  # Renderizar para HTML
  arquivo_saida <- file.path(pasta_saida, paste0("post-", id, ".html"))
  render(arquivo_rmd, output_file = arquivo_saida)
  
  cat("✓ HTML gerado:", arquivo_saida, "\n")
  
  return(arquivo_saida)
}

# Exemplo: Post com gráfico
conteudo_exemplo <- '
## Análise de Volatilidade

```{r}
library(ggplot2)

# Dados de exemplo
dados <- data.frame(
  data = seq(as.Date("2024-01-01"), by = "day", length.out = 100),
  volatilidade = cumsum(rnorm(100, 0, 0.02))
)

ggplot(dados, aes(x = data, y = volatilidade)) +
  geom_line(color = "#1e40af", size = 1.2) +
  theme_minimal() +
  labs(title = "Volatilidade do Mercado",
       x = "Data", y = "Volatilidade (%)")
```

## Conclusões

A análise mostra tendências interessantes...
'

# Gerar
gerar_post_html(
  id = "7",
  titulo = "Análise de Volatilidade Q1 2024",
  conteudo_rmd = conteudo_exemplo
)
```

### Adicionar Referência ao HTML no posts.ts

Depois de gerar o HTML, adicione a referência:

```r
# Se você gerou um HTML, mude o campo content:
adicionar_post(
  titulo = "Análise de Volatilidade Q1 2024",
  resumo = "Análise completa com gráficos interativos...",
  content = '<iframe src="/posts/post-7.html" width="100%" height="800px" style="border:none;"></iframe>',
  tags = c("Volatilidade", "Análise", "Gráficos")
)
```

---

## 🔄 Workflow Diário Recomendado

```r
# 1. Configure uma vez
source("setup_blog.R")
config_blog("https://github.com/seu-usuario/seu-repo.git")

# 2. Crie análise
analise <- realizar_analise_investimentos()

# 3. Publique (escolha opção 1 ou 2)

# Opção 1: Post simples
publicar_post(
  titulo = "Análise Semanal - " + format(Sys.Date()),
  conteudo = paste(analise$texto, collapse = "\n\n"),
  tags = c("Semanal", "Análise")
)

# Opção 2: Post com HTML
gerar_post_html(id = "8", titulo = "...", conteudo_rmd = "...")
adicionar_post(...) # adiciona referência
```

---

## ✅ Checklist

- [ ] Repositório clonado localmente
- [ ] Pacotes R instalados (glue, git2r, rmarkdown)
- [ ] Script `adicionar_post()` testado
- [ ] Primeiro post adicionado manualmente
- [ ] Git configurado (user.name e user.email)
- [ ] Push para GitHub funcionando
- [ ] GitHub Pages ativado

## 🆘 Problemas Comuns

**Erro: "Permission denied"**
```bash
# Configure SSH ou use HTTPS com token
git remote set-url origin https://TOKEN@github.com/usuario/repo.git
```

**Erro: "Posts não aparecem"**
- Verifique se o formato do TypeScript está correto
- Use `cat src/data/posts.ts` para ver o arquivo
- Procure por vírgulas ou aspas faltando

**Gráficos não aparecem no HTML**
- Certifique-se que a pasta `public/posts/` existe
- Verifique permissões do GitHub Pages em Settings

---

## 📚 Recursos Adicionais

- [RMarkdown Guide](https://rmarkdown.rstudio.com/)
- [git2r Documentation](https://docs.ropensci.org/git2r/)
- [Plotly R](https://plotly.com/r/)
