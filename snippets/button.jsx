const Button = ({ className, variant = "default", size = "default", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
  
  const variants = {
    default: "bg-white text-[#181B20] py-2 px-5 font-semibold text-[16px] cursor-pointer hover:bg-[#DCDADA] focus-within:bg-[#DCDADA] active:bg-[#F1F1F1]",
    secondary: "bg-[#222528] border-[0.5px] border-[#6A7370] py-2 px-5 text-white font-semibold text-[16px] cursor-pointer hover:bg-[#171717] focus-within:bg-[#171717] active:bg-[#2E2E2E]",
  }

  const sizes = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 px-6 has-[>svg]:px-4",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
