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
