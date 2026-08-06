import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    
    // Wayfinder button styles
    const baseStyles = "inline-flex items-center justify-center font-enreal text-[13px] tracking-normal px-[16px] py-[8px] transition-opacity hover:opacity-80 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-bone-white text-void-black border-none",
      secondary: "bg-charcoal text-bone-white border border-ash",
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
