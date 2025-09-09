import React from "react";
import MapaMexicoExacto from "@/components/MapaMexico/MapaMexicoExacto";

export default function Parkings() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Estacionamientos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra red de estacionamientos inteligentes distribuidos
            estratégicamente en las principales ciudades de México.
          </p>
        </div>

        <MapaMexicoExacto
          estadosConServicio={[
            "jalisco",
            "michoacan",
            "guanajuato",
            "aguascalientes",
            "zacatecas",
            "queretaro",
            "cdmx",
            "mexico",
          ]}
          colorServicio="#008FBE"
          colorHover="#006d94"
          colorDefault="#e5e7eb"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Estacionamientos Activos
            </h3>
            <p className="text-3xl font-bold text-[#008FBE] mb-2">8</p>
            <p className="text-gray-600">Estados con servicio</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Capacidad Total
            </h3>
            <p className="text-3xl font-bold text-[#008FBE] mb-2">2,500+</p>
            <p className="text-gray-600">Lugares disponibles</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tecnología
            </h3>
            <p className="text-3xl font-bold text-[#008FBE] mb-2">100%</p>
            <p className="text-gray-600">Sistemas inteligentes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
