import Image from "next/image";

export default function Parkings() {
  return (
    <section className="min-h-screen w-screen">
      <div className="relative w-full h-96 flex items-center justify-center">
        <Image
          src="/assets/parking-bg.jpg"
          alt="Imagen de estacionamiento"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/parking-places/PARKING-blur.jpg"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
          <div>
            <span className="relative text-5xl font-semibold text-white z-10">
              ESTACIONAMIENTOS
            </span>
          </div>
          <div className="flex items-center justify-center mt-4 px-4">
            <span className="text-white text-center max-w-2xl text-xl font-extralight">
              En Propark, ofrecemos{" "}
              <span className="font-semibold text-[#00d4ff]">
                soluciones de estacionamiento
              </span>{" "}
              que priorizan tu{" "}
              <span className="font-semibold text-[#00d4ff]">seguridad</span>,{" "}
              <span className="font-semibold text-[#00d4ff]">
                accesibilidad
              </span>{" "}
              y <span className="font-semibold text-[#00d4ff]">comodidad</span>.
              Nos adaptamos a las{" "}
              <span className="font-semibold text-[#00d4ff]">
                necesidades de cada cliente
              </span>
              , brindando experiencias{" "}
              <span className="font-semibold text-[#00d4ff]">eficientes</span> y{" "}
              <span className="font-semibold text-[#00d4ff]">confiables</span>{" "}
              en cada visita, aportando{" "}
              <span className="font-semibold text-[#00d4ff]">valor real</span> a
              tu movilidad y tranquilidad. Descubre nuestros{" "}
              <span className="font-semibold text-[#00d4ff]">
                lugares de estacionamiento
              </span>{" "}
              y cómo pueden{" "}
              <span className="font-semibold text-[#00d4ff]">
                facilitar tu día a día
              </span>
              .
            </span>
          </div>
        </div>
      </div>

      {/* Sección del mapa */}
      <div className="w-full py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Nuestras Ubicaciones
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto text-xs">
              Descubre todos nuestros estacionamientos estratégicamente ubicados
              para brindarte la mejor experiencia de movilidad urbana.
            </p>
          </div>

          <div className="relative w-full h-auto bg-white rounded-lg overflow-hidden">
            <Image
              src="/assets/mapa.png"
              alt="Mapa de estacionamientos ProPark"
              width={600}
              height={450}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
