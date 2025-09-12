"use client";
import { useEffect } from "react";
import Image from "next/image";
import companiesData from "../../app/utils/companies.json";

const styles = {
  scroll: `
   @keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

            .animate-scroll {
              animation: scroll 60s linear infinite;
            }

  `,
};

export default function Carousel() {
  const companies = companiesData?.companies ?? [];
  const loop = [...companies, ...companies];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles.scroll;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sección Hero */}
      <section className="h-[70vh] bg-gradient-to-b from-[#008FBE] to-[#006d94] flex flex-col justify-center items-center text-center px-6">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Bienvenido a la nueva era <br /> de la movilidad urbana
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/logo estatico.png"
              alt="ProPark Logo"
              width={250}
              height={80}
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
          </div>
          <p className="max-w-2xl text-sm md:text-base text-white leading-relaxed">
            En <span className="font-semibold">Pro Park</span> somos
            especialistas en la <span className="font-semibold">gestión</span> y{" "}
            <span className="font-semibold">operación eficiente</span> de
            estacionamientos en toda la República Mexicana. Nuestra experiencia
            garantiza{" "}
            <span className="font-semibold">
              soluciones confiables e inteligentes
            </span>
            , optimizando cada espacio y brindando tranquilidad a nuestros
            clientes.
          </p>
        </div>
      </section>

      {/* Área del carrusel */}
      <div className="w-full" style={{ backgroundColor: "#B9E4F8" }}>
        <div
          className="shadow-xl px-6 md:px-10 py-8 w-full h-auto flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#B9E4F8" }}
        >
          <div className="overflow-hidden w-full">
            <div className="flex gap-2 w-max animate-scroll">
              {loop.map((company, index) => (
                <div
                  key={index}
                  className="flex-none w-60 h-48 flex items-center justify-center bg-white/80 rounded-lg p-4 shadow-sm"
                >
                  <Image
                    src={company.path}
                    alt={`Logo de ${company.path ?? `Compañía ${index + 1}`}`}
                    width={180}
                    height={180}
                    className={`object-contain max-h-full ${
                      company.path?.includes("CÚSPIDE") ? "brightness-0" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cajas de estadísticas */}
        <div className="mt-12 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Estacionamientos Activos
            </h3>
            <p className="text-gray-600">Estados con servicio</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Capacidad Total
            </h3>
            <p className="text-gray-600">Lugares disponibles</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tecnología
            </h3>
            <p className="text-gray-600">Sistemas inteligentes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
