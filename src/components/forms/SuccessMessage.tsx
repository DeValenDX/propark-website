import Image from "next/image";
import AgainSendButton from "@/components/Buttons/AgainSend";

interface SuccessMessageProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  logoPath?: string;
}

export default function SuccessMessage({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  logoPath = "/map-icons/PP.jpg"
}: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Mensaje de éxito */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h3>
        <p className="text-gray-600">
          {subtitle}
        </p>
      </div>
      
      {/* Logo ProPark */}
      <div className="flex justify-center">
        <Image
          src={logoPath}
          alt="ProPark Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Botón para acción */}
      <div className="mt-6">
        <AgainSendButton
          buttonText={buttonText}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}
