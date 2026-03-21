import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default:
        "bg-primary text-primary-foreground hover:brightness-110 active:brightness-95",
      outline:
        "border border-input bg-transparent hover:border-primary hover:text-primary",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/85",
      ghost:
        "hover:bg-foreground/6 hover:text-foreground",
      link:
        "text-primary underline-offset-4 hover:underline p-0 h-auto",
    }

    const sizes = {
      default: "h-11 px-6 text-sm",
      sm:      "h-9 px-4 text-xs",
      lg:      "h-13 px-8 text-sm",
      icon:    "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center whitespace-nowrap",
          "rounded-none font-bold tracking-[0.1em] uppercase text-xs",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-40",
          // Variant
          variants[variant],
          // Size
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
