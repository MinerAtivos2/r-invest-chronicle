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
