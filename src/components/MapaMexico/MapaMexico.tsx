"use client";

import React, { useState } from "react";

interface Estado {
  id: string;
  nombre: string;
  path: string;
  color?: string;
}

// Mapa simplificado pero más realista de México
const estados: Estado[] = [
  {
    id: "aguascalientes",
    nombre: "Aguascalientes",
    path: "M 280 320 L 300 315 L 310 330 L 305 345 L 285 350 L 275 335 Z",
  },
  {
    id: "baja-california",
    nombre: "Baja California",
    path: "M 80 80 L 120 75 L 130 100 L 125 130 L 90 140 L 75 110 Z",
  },
  {
    id: "baja-california-sur",
    nombre: "Baja California Sur",
    path: "M 100 200 L 140 195 L 150 220 L 145 250 L 110 260 L 95 230 Z",
  },
  {
    id: "campeche",
    nombre: "Campeche",
    path: "M 450 420 L 490 415 L 500 440 L 495 470 L 455 480 L 445 450 Z",
  },
  {
    id: "chiapas",
    nombre: "Chiapas",
    path: "M 470 450 L 510 445 L 520 470 L 515 500 L 475 510 L 465 480 Z",
  },
  {
    id: "chihuahua",
    nombre: "Chihuahua",
    path: "M 180 120 L 230 115 L 250 140 L 240 170 L 190 180 L 170 150 Z",
  },
  {
    id: "coahuila",
    nombre: "Coahuila",
    path: "M 230 180 L 280 175 L 300 200 L 290 230 L 240 240 L 220 210 Z",
  },
  {
    id: "colima",
    nombre: "Colima",
    path: "M 280 380 L 310 375 L 320 400 L 315 430 L 285 440 L 275 410 Z",
  },
  {
    id: "durango",
    nombre: "Durango",
    path: "M 200 250 L 250 245 L 270 270 L 260 300 L 210 310 L 190 280 Z",
  },
  {
    id: "guanajuato",
    nombre: "Guanajuato",
    path: "M 280 300 L 310 295 L 330 320 L 320 350 L 290 360 L 270 330 Z",
  },
  {
    id: "guerrero",
    nombre: "Guerrero",
    path: "M 350 420 L 390 415 L 410 440 L 400 470 L 360 480 L 340 450 Z",
  },
  {
    id: "hidalgo",
    nombre: "Hidalgo",
    path: "M 320 300 L 350 295 L 370 320 L 360 350 L 330 360 L 310 330 Z",
  },
  {
    id: "jalisco",
    nombre: "Jalisco",
    path: "M 250 350 L 290 345 L 310 370 L 300 400 L 260 410 L 240 380 Z",
  },
  {
    id: "mexico",
    nombre: "Estado de México",
    path: "M 320 320 L 350 315 L 370 340 L 360 370 L 330 380 L 310 350 Z",
  },
  {
    id: "michoacan",
    nombre: "Michoacán",
    path: "M 280 380 L 310 375 L 330 400 L 320 430 L 290 440 L 270 410 Z",
  },
  {
    id: "morelos",
    nombre: "Morelos",
    path: "M 330 380 L 360 375 L 380 400 L 370 430 L 340 440 L 320 410 Z",
  },
  {
    id: "nayarit",
    nombre: "Nayarit",
    path: "M 220 300 L 250 295 L 270 320 L 260 350 L 230 360 L 210 330 Z",
  },
  {
    id: "nuevo-leon",
    nombre: "Nuevo León",
    path: "M 280 200 L 330 195 L 350 220 L 340 250 L 290 260 L 270 230 Z",
  },
  {
    id: "oaxaca",
    nombre: "Oaxaca",
    path: "M 380 420 L 420 415 L 440 440 L 430 470 L 390 480 L 370 450 Z",
  },
  {
    id: "puebla",
    nombre: "Puebla",
    path: "M 360 360 L 390 355 L 410 380 L 400 410 L 370 420 L 350 390 Z",
  },
  {
    id: "queretaro",
    nombre: "Querétaro",
    path: "M 300 320 L 330 315 L 350 340 L 340 370 L 310 380 L 290 350 Z",
  },
  {
    id: "quintana-roo",
    nombre: "Quintana Roo",
    path: "M 500 420 L 540 415 L 560 440 L 550 470 L 510 480 L 490 450 Z",
  },
  {
    id: "san-luis-potosi",
    nombre: "San Luis Potosí",
    path: "M 280 250 L 330 245 L 350 270 L 340 300 L 290 310 L 270 280 Z",
  },
  {
    id: "sinaloa",
    nombre: "Sinaloa",
    path: "M 180 250 L 230 245 L 250 270 L 240 300 L 190 310 L 170 280 Z",
  },
  {
    id: "sonora",
    nombre: "Sonora",
    path: "M 120 120 L 180 115 L 200 140 L 190 170 L 130 180 L 110 150 Z",
  },
  {
    id: "tabasco",
    nombre: "Tabasco",
    path: "M 420 420 L 460 415 L 480 440 L 470 470 L 430 480 L 410 450 Z",
  },
  {
    id: "tamaulipas",
    nombre: "Tamaulipas",
    path: "M 330 250 L 380 245 L 400 270 L 390 300 L 340 310 L 320 280 Z",
  },
  {
    id: "tlaxcala",
    nombre: "Tlaxcala",
    path: "M 340 360 L 370 355 L 390 380 L 380 410 L 350 420 L 330 390 Z",
  },
  {
    id: "veracruz",
    nombre: "Veracruz",
    path: "M 380 320 L 420 315 L 440 340 L 430 370 L 390 380 L 370 350 Z",
  },
  {
    id: "yucatan",
    nombre: "Yucatán",
    path: "M 470 420 L 510 415 L 530 440 L 520 470 L 480 480 L 460 450 Z",
  },
  {
    id: "zacatecas",
    nombre: "Zacatecas",
    path: "M 230 250 L 280 245 L 300 270 L 290 300 L 240 310 L 220 280 Z",
  },
  {
    id: "cdmx",
    nombre: "Ciudad de México",
    path: "M 330 340 L 350 335 L 360 360 L 350 390 L 330 400 L 320 370 Z",
  },
];

interface MapaMexicoProps {
  estadosConServicio?: string[];
  colorServicio?: string;
  colorHover?: string;
  colorDefault?: string;
}

export default function MapaMexico({
  estadosConServicio = [
    "jalisco",
    "michoacan",
    "guanajuato",
    "aguascalientes",
    "zacatecas",
    "queretaro",
  ],
  colorServicio = "#008FBE",
  colorHover = "#006d94",
  colorDefault = "#e5e7eb",
}: MapaMexicoProps) {
  const [estadoHover, setEstadoHover] = useState<string | null>(null);

  const getEstadoColor = (estadoId: string) => {
    if (estadoHover === estadoId) return colorHover;
    if (estadosConServicio.includes(estadoId)) return colorServicio;
    return colorDefault;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Mapa de Puntos de Venta
        </h2>

        <div className="relative">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-auto max-h-[500px]"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            {estados.map((estado) => (
              <path
                key={estado.id}
                d={estado.path}
                fill={getEstadoColor(estado.id)}
                stroke="#ffffff"
                strokeWidth="1"
                className="transition-all duration-300 cursor-pointer hover:opacity-80"
                onMouseEnter={() => setEstadoHover(estado.id)}
                onMouseLeave={() => setEstadoHover(null)}
                style={{
                  filter:
                    estadoHover === estado.id ? "brightness(1.1)" : "none",
                }}
              />
            ))}
          </svg>

          {/* Tooltip */}
          {estadoHover && (
            <div
              className="absolute bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none z-10"
              style={{
                left: "50%",
                top: "20px",
                transform: "translateX(-50%)",
              }}
            >
              {estados.find((e) => e.id === estadoHover)?.nombre}
              {estadosConServicio.includes(estadoHover) && (
                <div className="text-xs text-green-300 mt-1">
                  ✓ Con servicio
                </div>
              )}
            </div>
          )}
        </div>

        {/* Leyenda */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: colorServicio }}
            ></div>
            <span className="text-sm text-gray-600">Estados con servicio</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: colorDefault }}
            ></div>
            <span className="text-sm text-gray-600">Otros estados</span>
          </div>
        </div>
      </div>
    </div>
  );
}
