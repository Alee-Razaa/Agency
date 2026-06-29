interface BadgeProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
}

export function Badge({ text, className = "", variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 border-primary/20 text-primary",
    secondary: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    outline: "bg-transparent border-border text-gray-400"
  };

  return (
    <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${variants[variant]} ${className}`}>
      {variant !== 'outline' && <span className={`w-2 h-2 rounded-full animate-pulse ${
        variant === 'primary' ? 'bg-primary' :
        variant === 'secondary' ? 'bg-blue-500' :
        variant === 'success' ? 'bg-emerald-500' : ''
      }`}></span>}
      {text}
    </div>
  );
}
