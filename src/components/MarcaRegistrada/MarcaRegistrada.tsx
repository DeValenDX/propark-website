import React from "react";

interface MarcaRegistradaProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function MarcaRegistrada({
  size = "md",
  className = "",
}: MarcaRegistradaProps) {
  const sizeClasses = {
    sm: "w-4 h-4 text-xs",
    md: "w-6 h-6 text-sm",
    lg: "w-8 h-8 text-base",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}
    >
      <div className="relative">
        {/* Círculo azul de fondo */}
        <div className="w-full h-full rounded-full bg-[#008FBE] flex items-center justify-center">
          {/* Letras MR en blanco */}
          <span className="text-white font-bold leading-none">MR</span>
        </div>
      </div>
    </div>
  );
}
