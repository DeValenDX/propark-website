"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

interface WhatsAppConfig {
  numero: string;
  mensaje: string;
}

const whatsappConfigs: Record<string, WhatsAppConfig> = {
  "/": {
    numero: "525512345678", // Número para páginas principales
    mensaje: "Hola, me interesa conocer más sobre los servicios de ProPark",
  },
  "/welcome": {
    numero: "525512345678", // Número para páginas principales
    mensaje: "Hola, me interesa conocer más sobre los servicios de ProPark",
  },
  "/quienes-somos": {
    numero: "525512345678", // Número para páginas principales
    mensaje: "Hola, me interesa conocer más sobre ProPark",
  },
  "/servicios": {
    numero: "525512345678", // Número para páginas principales
    mensaje: "Hola, me interesa conocer los servicios de ProPark",
  },
  "/estacionamientos": {
    numero: "525512345678", // Número para páginas principales
    mensaje: "Hola, me interesa conocer los estacionamientos de ProPark",
  },
  "/contacto": {
    numero: "525598765432", // Número para contacto
    mensaje: "Hola, me gustaría contactar con ProPark",
  },
  "/bolsa-trabajo": {
    numero: "525555555555", // Número para bolsa de trabajo
    mensaje: "Hola, me interesa trabajar en ProPark",
  },
  "/facturacion": {
    numero: "525544444444", // Número para facturación
    mensaje: "Hola, necesito ayuda con la facturación de ProPark",
  },
};

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Obtener configuración para la página actual o usar la configuración por defecto
  const config = whatsappConfigs[pathname] || whatsappConfigs["/"];

  const handleWhatsAppClick = () => {
    const mensajeCodificado = encodeURIComponent(config.mensaje);
    const url = `https://wa.me/${config.numero}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        width={24}
        height={24}
        className="text-white"
      />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Escríbenos por WhatsApp!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </button>
  );
}
