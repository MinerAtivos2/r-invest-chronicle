# 🚀 Setup Completo do GitHub - Guia Passo a Passo

Este guia mostra **exatamente** como configurar seu blog no GitHub e publicá-lo.

---

## 📋 Método 1: Via Lovable (RECOMENDADO - Mais Fácil)

### Passo 1: Conectar ao GitHub

1. No Lovable, clique no botão **GitHub** (canto superior direito)
2. Clique em **Connect to GitHub**
3. Autorize o Lovable GitHub App
4. Clique em **Create Repository**
5. Escolha um nome (ex: `blog-investimentos`)
6. ✅ Pronto! Todos os arquivos foram enviados automaticamente

### Passo 2: Ativar GitHub Pages

1. Vá para o repositório no GitHub: `github.com/seu-usuario/blog-investimentos`
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde 1-2 minutos
7. Seu blog estará em: `https://seu-usuario.github.io/blog-investimentos/`

### Passo 3: Adicionar Posts

**Opção A: Diretamente no Lovable**
1. Edite o arquivo `src/data/posts.ts`
2. Adicione um novo post antes do `];` final
3. As mudanças vão automaticamente para o GitHub
4. Aguarde 1-2 min e recarregue seu site

**Opção B: Via R (veja seção abaixo)**

---

## 📋 Método 2: Setup Manual (Sem Lovable)

### Passo 1: Criar Repositório

```bash
# 1. No GitHub, crie um novo repositório
# Nome: blog-investimentos
# Público ou Privado (sua escolha)

# 2. Clone no seu computador
git clone https://github.com/seu-usuario/blog-investimentos.git
cd blog-investimentos
```

### Passo 2: Criar Estrutura de Pastas

```bash
# Criar todas as pastas necessárias
mkdir -p public/posts
mkdir -p public/images
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/lib
```

### Passo 3: Copiar TODOS os Arquivos

#### 📁 **Arquivos Raiz**

**package.json**
```json
{
  "name": "blog-investimentos",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@types/node": "^22.10.5",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}
```

**vite.config.ts**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/blog-investimentos/", // ⚠️ MUDE PARA O NOME DO SEU REPO
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**tsconfig.json**
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**tsconfig.app.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

**tsconfig.node.json**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

**tailwind.config.ts**
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**.gitignore**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

**index.html**
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog de Investimentos</title>
    <meta name="description" content="Análises, estratégias e insights para potencializar seus investimentos" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**public/robots.txt**
```
User-agent: *
Allow: /
```

**public/posts/.gitkeep**
```
# Esta pasta é para posts HTML gerados pelo R
# Veja GUIA_POSTS_R.md para instruções
```

---

#### 📁 **Arquivos src/**

**src/main.tsx**
```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**src/App.tsx**
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/blog-investimentos">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**src/vite-env.d.ts**
```typescript
/// <reference types="vite/client" />
```

---

#### 📁 **src/data/**

**src/data/posts.ts** (ARQUIVO PRINCIPAL - Aqui você adiciona posts)
```typescript
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // formato: YYYY-MM-DD
  tags: string[];
  readTime: string;
  imageUrl?: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Análise do Mercado de Ações em 2024",
    excerpt: "Uma visão abrangente sobre as tendências do mercado de ações e as principais oportunidades para investidores em 2024.",
    content: "Conteúdo completo do post aqui...",
    author: "João Silva",
    date: "2024-03-15",
    tags: ["Ações", "Mercado", "Análise"],
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Diversificação de Carteira: Estratégias Essenciais",
    excerpt: "Aprenda como diversificar sua carteira de investimentos para minimizar riscos e maximizar retornos.",
    content: "Conteúdo completo do post aqui...",
    author: "Maria Santos",
    date: "2024-03-10",
    tags: ["Estratégia", "Diversificação", "Portfolio"],
    readTime: "7 min"
  }
];
```

---

#### 📁 **src/pages/**

**src/pages/Index.tsx**
```typescript
import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDate = !dateFilter || post.date === dateFilter;

      return matchesSearch && matchesDate;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, dateFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
        />

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">
              Nenhum post encontrado com os filtros aplicados.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 Blog de Investimentos. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-80 mt-2">
            Posts gerados e gerenciados via R
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
```

**src/pages/Post.tsx**
```typescript
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { useEffect } from "react";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => navigate("/")}>
            Voltar para o Blog
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/20 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-card rounded-lg shadow-xl overflow-hidden">
          {post.imageUrl && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => {
                const variants = ["blue", "green", "purple", "orange", "pink", "accent"] as const;
                const variant = variants[index % variants.length];
                return (
                  <Badge key={tag} variant={variant} className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                );
              })}
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-muted-foreground italic border-l-4 border-primary pl-4 mb-8">
                {post.excerpt}
              </p>
            </div>

            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </div>
        </article>

        <div className="mt-12 p-8 bg-muted rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                {post.author.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Sobre o autor</h3>
              <p className="text-muted-foreground mb-4">
                {post.author} é especialista em investimentos e análise de mercado.
              </p>
              <Button variant="outline" onClick={() => navigate("/")}>
                Ver mais posts
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
```

**src/pages/NotFound.tsx**
```typescript
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button onClick={() => navigate("/")}>
          Voltar para o Blog
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
```

---

#### 📁 **src/components/**

**src/components/Header.tsx**
```typescript
import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4 shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <TrendingUp className="h-10 w-10" />
          <h1 className="text-4xl md:text-5xl font-bold">
            Blog de Investimentos
          </h1>
        </div>
        <p className="text-center text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Análises, estratégias e insights para potencializar seus investimentos
        </p>
      </div>
    </header>
  );
};
```

**src/components/SearchBar.tsx**
```typescript
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  dateFilter: string;
  onDateChange: (value: string) => void;
}

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  dateFilter,
  onDateChange
}: SearchBarProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar posts por título, conteúdo ou tags..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-14 text-lg border-2 focus:border-primary transition-all"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => onDateChange(e.target.value)}
            className="pl-12 h-12 border-2"
          />
        </div>
        {(searchTerm || dateFilter) && (
          <Button
            variant="outline"
            onClick={() => {
              onSearchChange("");
              onDateChange("");
            }}
            className="h-12"
          >
            Limpar Filtros
          </Button>
        )}
      </div>
    </div>
  );
};
```

**src/components/PostCard.tsx**
```typescript
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card 
      onClick={() => navigate(`/post/${post.id}`)}
      className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer h-full flex flex-col overflow-hidden"
    >
      {post.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(post.date)}</span>
          <span className="mx-1">•</span>
          <Clock className="h-4 w-4" />
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
        <CardDescription className="text-base line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => {
            const variants = ["blue", "green", "purple", "orange", "pink", "accent"] as const;
            const variant = variants[index % variants.length];
            return (
              <Badge key={tag} variant={variant} className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            );
          })}
        </div>
        <div className="text-sm text-muted-foreground">
          Por <span className="font-medium text-foreground">{post.author}</span>
        </div>
      </CardContent>
    </Card>
  );
};
```

---

#### 📁 **src/lib/**

**src/lib/utils.ts**
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

#### 📁 **src/components/ui/** (Componentes Shadcn necessários)

Vou listar apenas os essenciais. Para ter TODOS, use o método 1 (Lovable).

**src/components/ui/button.tsx** - Veja arquivo existente no seu projeto
**src/components/ui/card.tsx** - Veja arquivo existente no seu projeto
**src/components/ui/badge.tsx** - Veja arquivo existente no seu projeto (com variantes coloridas)
**src/components/ui/input.tsx** - Veja arquivo existente no seu projeto

_(Nota: Há ~50 componentes UI. Para setup manual completo, copie toda a pasta `src/components/ui/` do Lovable)_

---

### Passo 4: Instalar Dependências

```bash
npm install
```

### Passo 5: Testar Localmente

```bash
npm run dev
# Acesse: http://localhost:8080
```

### Passo 6: Build e Deploy

```bash
# 1. Build
npm run build

# 2. Commit tudo
git add .
git commit -m "Setup inicial do blog"
git push origin main

# 3. Ativar GitHub Pages (como explicado no Método 1)
```

---

## 🔧 Configurações Importantes

### ⚠️ Ajustes para GitHub Pages

Em **vite.config.ts**, altere a linha `base`:

```typescript
export default defineConfig({
  base: "/SEU-NOME-REPO/",  // ⚠️ IMPORTANTE! Use o nome do seu repositório
  // ...
});
```

Em **src/App.tsx**, altere o `basename`:

```typescript
<BrowserRouter basename="/SEU-NOME-REPO">
```

**Exemplo:**
- Se seu repo é `https://github.com/joao/meu-blog`
- Então: `base: "/meu-blog/"` e `basename="/meu-blog"`

---

## 📝 Como Adicionar Posts via R

### Script R Completo

Salve como `scripts/adicionar_post.R`:

```r
library(glue)
library(git2r)

setwd("~/blog-investimentos")  # Ajuste o caminho

adicionar_post <- function(
  titulo,
  resumo,
  conteudo,
  autor = "Análise R",
  tags = c("Investimentos"),
  tempo_leitura = "5 min",
  imagem = NULL
) {
  
  arquivo <- "src/data/posts.ts"
  linhas <- readLines(arquivo, warn = FALSE)
  
  # Encontrar último ID
  ids <- gsub('.*id: "(\\d+)".*', "\\1", grep('id: "', linhas, value = TRUE))
  novo_id <- as.character(max(as.numeric(ids)) + 1)
  
  # Formatar
  tags_formatadas <- paste0('["', paste(tags, collapse = '", "'), '"]')
  conteudo_escapado <- gsub('"', '\\\\"', conteudo)
  conteudo_escapado <- gsub('\n', '\\\\n\\\\n', conteudo_escapado)
  
  # Criar post
  if (!is.null(imagem)) {
    imagem_linha <- glue(',\n    imageUrl: "{imagem}"')
  } else {
    imagem_linha <- ""
  }
  
  novo_post <- glue('  ,
  {{
    id: "{novo_id}",
    title: "{titulo}",
    excerpt: "{resumo}",
    content: "{conteudo_escapado}",
    author: "{autor}",
    date: "{Sys.Date()}",
    tags: {tags_formatadas},
    readTime: "{tempo_leitura}"{imagem_linha}
  }}')
  
  linha_final <- which(grepl("^];$", linhas))
  linhas_novas <- c(
    linhas[1:(linha_final-1)],
    as.character(novo_post),
    linhas[linha_final:length(linhas)]
  )
  
  writeLines(linhas_novas, arquivo)
  
  # Commit e push
  add(path = arquivo)
  commit(message = glue("Adicionar post: {titulo}"))
  push()
  
  cat("✅ Post publicado! ID:", novo_id, "\n")
  cat("🌐 Disponível em 1-2 minutos no GitHub Pages\n")
  
  return(novo_id)
}

# Exemplo de uso:
adicionar_post(
  titulo = "Análise Semanal - 20 Março 2024",
  resumo = "Principais movimentos do mercado esta semana",
  conteudo = "Conteúdo detalhado aqui...\n\nCom múltiplos parágrafos.",
  autor = "R Analytics",
  tags = c("Semanal", "Análise", "Mercado"),
  tempo_leitura = "6 min",
  imagem = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
)
```

---

## ✅ Checklist Final

### Setup Inicial
- [ ] Repositório criado no GitHub
- [ ] Código commitado e enviado
- [ ] GitHub Pages ativado em Settings → Pages
- [ ] `base` e `basename` configurados corretamente
- [ ] Site acessível em `https://usuario.github.io/repo/`

### Para Cada Post
- [ ] ID único (próximo número disponível)
- [ ] Data no formato `YYYY-MM-DD`
- [ ] Tags (2-4 tags)
- [ ] Tempo de leitura estimado
- [ ] Imagem escolhida (opcional)
- [ ] Post adicionado ao `src/data/posts.ts`
- [ ] Commit com mensagem descritiva
- [ ] Push para GitHub
- [ ] Aguardar 1-2 min e verificar

---

## 🆘 Problemas Comuns

### Site mostra página em branco

**Solução:**
- Verifique se `base` em `vite.config.ts` está correto
- Deve ser: `base: "/nome-do-repo/"`
- Mesmo nome do `basename` em `App.tsx`

### Rotas não funcionam (404)

**Solução:**
- Adicione arquivo `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Blog de Investimentos</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/blog-investimentos/'"></meta>
  </head>
</html>
```

### Imagens não aparecem

**Solução:**
- Use URLs completas (https://)
- Para imagens locais, coloque em `public/images/`
- Referencie como `/images/nome.jpg` (com `/` no início)

---

## 📚 Próximos Passos

1. ✅ **Teste localmente**: `npm run dev`
2. ✅ **Publique no GitHub**
3. ✅ **Configure GitHub Pages**
4. ✅ **Adicione seu primeiro post via R**
5. ✅ **Compartilhe seu blog!**

---

**Última atualização:** 2025-10-27
