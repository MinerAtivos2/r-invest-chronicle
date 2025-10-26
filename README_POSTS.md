# Como Adicionar Posts ao Blog via R

Este blog foi estruturado para facilitar a adição de novos posts gerados pelo R.

## Estrutura de um Post

Cada post deve seguir esta estrutura TypeScript em `src/data/posts.ts`:

```typescript
{
  id: "numero_unico",
  title: "Título do Post",
  excerpt: "Resumo curto do post (1-2 frases)",
  content: "Conteúdo completo em markdown ou texto",
  author: "Nome do Autor",
  date: "YYYY-MM-DD", // Formato: 2024-03-15
  tags: ["Tag1", "Tag2", "Tag3"],
  readTime: "X min"
}
```

## Exemplo de Script R para Gerar Posts

```r
library(jsonlite)

# Criar novo post
novo_post <- list(
  id = "7",
  title = "Análise de Dividendos em 2024",
  excerpt = "Descubra as melhores ações pagadoras de dividendos",
  content = "Conteúdo completo aqui...",
  author = "R Analytics",
  date = format(Sys.Date(), "%Y-%m-%d"),
  tags = c("Dividendos", "Ações", "Análise"),
  readTime = "6 min"
)

# Ler posts existentes
posts_file <- "src/data/posts.ts"
posts_content <- readLines(posts_file)

# Converter o novo post para formato TypeScript
novo_post_ts <- sprintf('  {
    id: "%s",
    title: "%s",
    excerpt: "%s",
    content: "%s",
    author: "%s",
    date: "%s",
    tags: [%s],
    readTime: "%s"
  }',
  novo_post$id,
  novo_post$title,
  novo_post$excerpt,
  novo_post$content,
  novo_post$author,
  novo_post$date,
  paste0('"', novo_post$tags, '"', collapse = ", "),
  novo_post$readTime
)

# Adicionar ao array de posts (inserir antes do último ']')
# ... seu código para adicionar o novo post ao arquivo ...
```

## Workflow Recomendado

1. **Crie seus posts em R** usando análises, gráficos, etc.
2. **Exporte para o formato TypeScript** mostrado acima
3. **Adicione ao array `posts`** no arquivo `src/data/posts.ts`
4. **Commit e push para GitHub** - o blog será atualizado automaticamente

## Dicas

- Mantenha IDs únicos para cada post
- Use datas no formato ISO (YYYY-MM-DD) para ordenação correta
- Tags ajudam na busca - use tags consistentes
- O campo `content` pode conter markdown
- ReadTime é apenas estimativa visual

## Publicação no GitHub Pages

Após fazer push dos posts:
1. Vá em Settings > Pages no seu repositório
2. Selecione a branch principal
3. O blog será publicado automaticamente

## Busca

O blog já inclui:
- ✅ Busca por texto (título, conteúdo, tags)
- ✅ Filtro por data
- ✅ Ordenação por data (mais recente primeiro)
