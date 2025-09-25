interface AgainSendButtonProps {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
}

export default function AgainSendButton({
  buttonText = "Enviar otro mensaje",
  className = "bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition flex items-center justify-center gap-2",
  onClick
}: AgainSendButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {buttonText}
    </button>
  );
}
