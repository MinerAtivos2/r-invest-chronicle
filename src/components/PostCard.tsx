import { Calendar, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary cursor-pointer h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4" />
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="text-base mt-2">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Por <span className="font-medium text-foreground">{post.author}</span>
        </div>
      </CardContent>
    </Card>
  );
};
