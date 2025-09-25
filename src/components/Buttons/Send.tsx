import FormLoader from "@/components/Loaders/FormLoader";

interface SendButtonProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
  buttonText?: string;
  className?: string;
  duration?: number;
}

export default function SendButton({
  isLoading,
  onLoadingComplete,
  buttonText = "Enviar",
  className = "bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2",
  duration = 4000
}: SendButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <FormLoader
          isLoading={isLoading}
          onLoadingComplete={onLoadingComplete}
          duration={duration}
        />
      ) : (
        buttonText
      )}
    </button>
  );
}
