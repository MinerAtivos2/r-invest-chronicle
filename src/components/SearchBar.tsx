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
