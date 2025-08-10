import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#434343] text-white w-full min-w-0">
      <div className="w-full min-w-0 px-2 sm:px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Logo y descripción */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Image
                  src="/img/logo.png"
                  alt="ProPark Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                La tecnología y el diseño son nuestro motor para perseguir la innovación en cada operación de nuestros estacionamientos.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
              <div className="space-y-2 text-sm text-gray-300">
                {/* Aquí irá el contenido de contacto */}
                <p>Contenido de contacto</p>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
              <div className="space-y-2 text-sm text-gray-300">
                {/* Aquí irá el contenido de servicios */}
                <p>Contenido de servicios</p>
              </div>
            </div>

            {/* Aviso de privacidad y Redes sociales */}
            <div className="space-y-6">
              {/* Aviso de privacidad */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Aviso de privacidad</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  {/* Aquí irá el contenido del aviso de privacidad */}
                  <p>Contenido del aviso</p>
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Redes sociales</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  {/* Aquí irán los enlaces de redes sociales */}
                  <p>Enlaces de redes sociales</p>
                </div>
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
