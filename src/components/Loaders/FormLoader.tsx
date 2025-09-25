import React from "react";

interface FormLoaderProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
  duration?: number;
}

export default function FormLoader({
  isLoading,
  onLoadingComplete,
  duration = 4000
}: FormLoaderProps) {
  // Simular carga con requestAnimationFrame
  React.useEffect(() => {
    if (!isLoading) return;

    const startTime = Date.now();
    const checkDuration = () => {
      if (Date.now() - startTime >= duration) {
        onLoadingComplete();
      } else {
        requestAnimationFrame(checkDuration);
      }
    };
    
    requestAnimationFrame(checkDuration);
  }, [isLoading, duration, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Loader personalizado con color #0091C0 */}
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#0091C0"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="#0091C0"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Enviando...
    </div>
  );
}
