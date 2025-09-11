"use client";

import React from "react";
import Image from "next/image";

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

        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Mapa de Puntos de Venta
            </h2>
            <div className="relative">
              <Image
                src="/assets/mapa.png"
                alt="Mapa de estacionamientos ProPark"
                width={600}
                height={375}
                className="w-full h-auto rounded-lg max-w-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
