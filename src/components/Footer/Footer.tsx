import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#434343] text-white w-full min-w-0">
      <div className="w-full min-w-0 px-2 sm:px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/logo estatico.png"
                  alt="ProPark Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                La tecnología y el diseño son nuestro motor para perseguir la
                innovación en cada operación de nuestros estacionamientos.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contacto
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="leading-relaxed">
                  Av. Pról. Paseo de la Reforma No. 379, Piso 10, Desp 7,
                  <br />
                  Paseo de las Lomas, Álvaro Obregón, Ciudad de México CP 01330
                </p>
                <p>
                  <a
                    href="mailto:contacto@ppark.mx"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    contacto@ppark.mx
                  </a>
                </p>
                <p>
                  <strong>Fijo:</strong>{" "}
                  <a
                    href="tel:+525552590014"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    55 5259 0014
                  </a>
                </p>
                <p>
                  <strong>Móvil:</strong>{" "}
                  <a
                    href="tel:+525568166346"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    55 68 16 63 46
                  </a>
                </p>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Servicios
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Operación y administración</p>
                <p>Auditoria y reportes</p>
                <p>Consultoria, asesoría y gestión</p>
                <p>Equipo y financiamiento</p>
                <p>Valet Parking, Floor Valet y Eventos Especiales</p>
              </div>
            </div>

            {/* Aviso de privacidad */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Aviso de privacidad
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <Link
                  href="/aviso-privacidad"
                  className="hover:text-blue-400 transition-colors duration-200 block"
                >
                  Consulta nuestro aviso de privacidad
                </Link>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="text-center text-sm text-gray-400">
              <p>&copy; 2024 ProPark. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
