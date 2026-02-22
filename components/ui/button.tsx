import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 disabled:transform-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive origin-center hover:scale-[1.03] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline origin-auto hover:scale-100 active:scale-100",
        /* Hero-style brand variants – scale, glow, lift like logo/map */
        cta:
          "bg-brand-red hover:bg-brand-red-hover text-white shadow-lg hover:shadow-xl hover:shadow-[0_0_25px_rgba(228,31,41,0.35)] ring-2 ring-brand-red/20 min-h-[44px] px-6 py-5 text-base sm:text-lg",
        "cta-hero":
          "bg-brand-red hover:bg-brand-red-hover text-white shadow-lg hover:shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] ring-2 ring-white/20 min-h-[44px] px-6 py-5 text-base sm:text-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
        brand:
          "bg-brand-navy hover:bg-brand-navy-light text-white shadow-md hover:shadow-lg hover:shadow-[0_0_25px_rgba(42,48,124,0.35)] min-h-[44px] px-8 py-6 text-base",
        "brand-outline":
          "border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy/5 hover:shadow-md hover:shadow-[0_0_15px_rgba(42,48,124,0.2)] min-h-[44px] px-8 py-6 text-base",
        "brand-inverse":
          "bg-white text-brand-navy hover:bg-gray-100 shadow-md hover:shadow-lg min-h-[48px] px-8 text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
        "cta-footer":
          "bg-brand-red hover:bg-brand-red-hover text-white font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-[0_0_25px_rgba(228,31,41,0.35)] min-h-[44px] px-6 py-5 rounded-md",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        cta: "min-h-[44px] px-6 py-5 text-base sm:text-lg",
        "cta-lg": "min-h-[48px] px-8 py-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
