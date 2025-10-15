interface NichelyLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function NichelyLogo({ className = "", size = "md" }: NichelyLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Geometric N shape with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#00796b" />
            </linearGradient>
          </defs>
          <path d="M20 20 L20 80 L35 80 L65 35 L65 80 L80 80 L80 20 L65 20 L35 65 L35 20 Z" fill="url(#logoGradient)" />
          {/* Circular element with star */}
          <circle cx="50" cy="50" r="15" fill="rgba(30, 41, 59, 0.8)" />
          <path d="M50 40 L52 46 L58 46 L53 50 L55 56 L50 52 L45 56 L47 50 L42 46 L48 46 Z" fill="#00bcd4" />
        </svg>
      </div>
      {size !== "sm" && (
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-secondary">Nichely</span>
          {size === "lg" && <span className="text-sm text-muted-foreground">AI powered niche discovery</span>}
        </div>
      )}
    </div>
  )
}
