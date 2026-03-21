import { Clock } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export interface Insight {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
}

interface InsightCardProps {
  article: Insight;
  delay?: number;
}

export function InsightCard({ article }: InsightCardProps) {
  return (
    <article className="group border border-border hover:border-primary transition-colors duration-300 p-8 h-full flex flex-col cursor-pointer relative overflow-hidden">
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500" />

      {/* Category + read time */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {article.category}
        </span>
        <span className="text-foreground/25">·</span>
        <span className="flex items-center gap-1 text-xs text-foreground/40">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-display font-bold leading-snug mb-4 group-hover:text-primary transition-colors flex-grow">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-foreground/55 text-sm leading-relaxed mb-8">
        {article.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
        <span className="text-xs text-foreground/40">{article.date}</span>
        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 text-primary transition-opacity">
          Read <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </article>
  );
}
