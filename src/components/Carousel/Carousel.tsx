"use client";
import { useEffect } from "react";
import Image from "next/image";
import companiesData from "../../app/utils/companies.json";
import { useSpring, animated } from '@react-spring/web';

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

  // Animaciones para la sección de bienvenida
  const titleAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const logoAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 800,
  });

  const textAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 1200,
  });
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
      <section className="min-h-[60vh] md:h-[70vh] bg-gradient-to-b from-[#008FBE] to-[#006d94] flex flex-col justify-center items-center text-center px-4 md:px-6 py-8">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <animated.h1 style={titleAnim} className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Bienvenido a la nueva era <br className="hidden md:block" /> de la movilidad urbana
          </animated.h1>
          <animated.div style={logoAnim} className="flex items-center justify-center mb-4 md:mb-6">
            <Image
              src="/logo estatico.png?v=2"
              alt="ProPark Logo"
              width={800}
              height={256}
              className="h-40 md:h-56 lg:h-64 w-auto brightness-0 invert"
            />
          </animated.div>
          <animated.p style={textAnim} className="max-w-2xl text-sm md:text-base text-white leading-relaxed px-4">
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
          </animated.p>
        </div>
      </section>

      {/* Área del carrusel */}
      <div className="w-full" style={{ backgroundColor: "#B9E4F8" }}>
        <div
          className="shadow-xl px-4 md:px-6 lg:px-10 py-6 md:py-8 w-full h-auto flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#B9E4F8" }}
        >
          <div className="overflow-hidden w-full">
            <div className="flex gap-2 md:gap-3 w-max animate-scroll">
              {loop.map((company, index) => (
                <div
                  key={index}
                  className="flex-none w-48 md:w-56 lg:w-60 h-40 md:h-44 lg:h-48 flex items-center justify-center bg-white/80 rounded-lg p-3 md:p-4 shadow-sm"
                >
                  <Image
                    src={company.path}
                    alt={`Logo de ${company.path ?? `Compañía ${index + 1}`}`}
                    width={180}
                    height={180}
                    className={`object-contain max-h-full w-full ${
                      company.path?.includes("CÚSPIDE") ? "brightness-0" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer text */}
        <div className="w-full py-6 md:py-8 px-4 mt-6 md:mt-8">
          <div className="w-full text-center">
            <p className="text-xs md:text-base lg:text-lg text-[#434343] leading-relaxed font-bold tracking-wide">
              LAS MARCAS Y LOGOTIPOS CITADOS EN ESTE SITIO SON PARA FINES INFORMATIVOS, SIN FINES DE LUCRO Y SON PROPIEDAD DE SUS RESPECTIVOS DUEÑOS Y/O AUTORES
            </p>
          </div>
        </div>

        {/* Cajas de estadísticas */}
        <div className="mt-8 md:mt-12 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-md shadow-md p-4 min-h-[120px] md:h-32 flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight text-center">
              EXPERIENCIA EN EL MERCADO
            </h3>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">+10</p>
              <p className="text-xs md:text-sm text-gray-600">Años liderando la innovación</p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 min-h-[120px] md:h-32 flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight text-center">
              ESTACIONAMIENTOS EN OPERACIÓN
            </h3>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">+100</p>
              <p className="text-xs md:text-sm text-gray-600">Ubicaciones estratégicas</p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 min-h-[120px] md:h-32 flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight text-center">
              CANTIDAD DE COLABORADORES
            </h3>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">+500</p>
              <p className="text-xs md:text-sm text-gray-600">Equipo especializado</p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 min-h-[120px] md:h-32 flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight text-center">
              CAJONES EN OPERACIÓN
            </h3>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">+50,000</p>
              <p className="text-xs md:text-sm text-gray-600">Espacios disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
