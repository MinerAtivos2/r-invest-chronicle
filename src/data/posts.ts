// Esta estrutura pode ser gerada automaticamente pelo R
// Cada post deve seguir este formato
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // formato: YYYY-MM-DD
  tags: string[];
  readTime: string;
}

// Posts de exemplo - você pode substituir ou adicionar novos posts gerados pelo R
export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Análise do Mercado de Ações em 2024",
    excerpt: "Uma visão abrangente sobre as tendências do mercado de ações e as principais oportunidades para investidores em 2024.",
    content: "Conteúdo completo do post aqui...",
    author: "João Silva",
    date: "2024-03-15",
    tags: ["Ações", "Mercado", "Análise"],
    readTime: "5 min"
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
  },
  {
    id: "3",
    title: "Fundos Imobiliários: Guia Completo para Iniciantes",
    excerpt: "Tudo o que você precisa saber antes de investir em fundos imobiliários (FIIs).",
    content: "Conteúdo completo do post aqui...",
    author: "Carlos Oliveira",
    date: "2024-03-05",
    tags: ["FII", "Imobiliário", "Iniciantes"],
    readTime: "10 min"
  },
  {
    id: "4",
    title: "Renda Fixa vs Renda Variável: Quando Escolher Cada Uma",
    excerpt: "Compare as características de cada tipo de investimento e saiba qual se adequa melhor ao seu perfil.",
    content: "Conteúdo completo do post aqui...",
    author: "Ana Costa",
    date: "2024-02-28",
    tags: ["Renda Fixa", "Renda Variável", "Comparação"],
    readTime: "6 min"
  },
  {
    id: "5",
    title: "Criptomoedas: Riscos e Oportunidades em 2024",
    excerpt: "Análise do mercado de criptomoedas e como investir de forma consciente neste ativo volátil.",
    content: "Conteúdo completo do post aqui...",
    author: "Pedro Lima",
    date: "2024-02-20",
    tags: ["Cripto", "Bitcoin", "Blockchain"],
    readTime: "8 min"
  },
  {
    id: "6",
    title: "Planejamento Financeiro para Aposentadoria",
    excerpt: "Estratégias de longo prazo para garantir uma aposentadoria tranquila e financeiramente segura.",
    content: "Conteúdo completo do post aqui...",
    author: "Luciana Ferreira",
    date: "2024-02-15",
    tags: ["Aposentadoria", "Planejamento", "Longo Prazo"],
    readTime: "9 min"
  }
];
