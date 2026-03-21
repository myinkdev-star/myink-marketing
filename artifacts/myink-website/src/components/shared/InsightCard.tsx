import { Clock, ArrowUpRight } from "lucide-react";

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
    <article className="group cursor-pointer flex flex-col h-full relative overflow-hidden pt-5 pb-9 border-b border-border">

      {/* Top accent — grows from left on hover */}
      <div className="absolute top-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />

      {/* Category + read time */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {article.category}
        </span>
        <span className="text-foreground/20">·</span>
        <span className="flex items-center gap-1.5 text-[11px] text-foreground/35 font-medium">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-display font-bold leading-snug mb-4 group-hover:text-primary transition-colors duration-200 flex-grow"
        style={{ fontSize: "clamp(17px, 1.4vw, 20px)", letterSpacing: "-0.01em" }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-foreground/65 text-[15px] leading-[1.85] mb-7">
        {article.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-[11px] text-foreground/50 font-medium">{article.date}</span>
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>

    </article>
  );
}
