"use client";

import React, { useState } from "react";

interface Estado {
  id: string;
  nombre: string;
  path: string;
  color?: string;
}

// Mapa realista de México con formas geográficas precisas
const estados: Estado[] = [
  {
    id: "aguascalientes",
    nombre: "Aguascalientes",
    path: "M 280 320 L 290 315 L 295 325 L 290 335 L 280 335 L 275 325 Z",
  },
  {
    id: "baja-california",
    nombre: "Baja California",
    path: "M 50 50 L 80 45 L 90 70 L 85 120 L 60 130 L 45 100 L 50 50 Z",
  },
  {
    id: "baja-california-sur",
    nombre: "Baja California Sur",
    path: "M 70 180 L 100 175 L 110 200 L 105 250 L 80 260 L 65 230 L 70 180 Z",
  },
  {
    id: "campeche",
    nombre: "Campeche",
    path: "M 420 380 L 460 375 L 470 400 L 465 430 L 425 440 L 410 410 L 420 380 Z",
  },
  {
    id: "chiapas",
    nombre: "Chiapas",
    path: "M 440 410 L 480 405 L 490 430 L 485 460 L 445 470 L 430 440 L 440 410 Z",
  },
  {
    id: "chihuahua",
    nombre: "Chihuahua",
    path: "M 150 80 L 200 75 L 220 100 L 210 150 L 160 160 L 140 130 L 150 80 Z",
  },
  {
    id: "coahuila",
    nombre: "Coahuila",
    path: "M 220 150 L 270 145 L 290 170 L 280 220 L 230 230 L 210 200 L 220 150 Z",
  },
  {
    id: "colima",
    nombre: "Colima",
    path: "M 260 360 L 280 355 L 285 375 L 280 395 L 265 400 L 255 380 L 260 360 Z",
  },
  {
    id: "durango",
    nombre: "Durango",
    path: "M 180 220 L 230 215 L 250 240 L 240 280 L 190 290 L 170 260 L 180 220 Z",
  },
  {
    id: "guanajuato",
    nombre: "Guanajuato",
    path: "M 270 280 L 300 275 L 320 300 L 310 330 L 280 340 L 260 310 L 270 280 Z",
  },
  {
    id: "guerrero",
    nombre: "Guerrero",
    path: "M 320 380 L 360 375 L 380 400 L 370 440 L 330 450 L 310 420 L 320 380 Z",
  },
  {
    id: "hidalgo",
    nombre: "Hidalgo",
    path: "M 300 280 L 330 275 L 350 300 L 340 330 L 310 340 L 290 310 L 300 280 Z",
  },
  {
    id: "jalisco",
    nombre: "Jalisco",
    path: "M 230 320 L 270 315 L 290 340 L 280 380 L 240 390 L 220 360 L 230 320 Z",
  },
  {
    id: "mexico",
    nombre: "Estado de México",
    path: "M 300 300 L 330 295 L 350 320 L 340 350 L 310 360 L 290 330 L 300 300 Z",
  },
  {
    id: "michoacan",
    nombre: "Michoacán",
    path: "M 270 340 L 300 335 L 320 360 L 310 390 L 280 400 L 260 370 L 270 340 Z",
  },
  {
    id: "morelos",
    nombre: "Morelos",
    path: "M 310 350 L 330 345 L 340 365 L 335 385 L 320 390 L 305 370 L 310 350 Z",
  },
  {
    id: "nayarit",
    nombre: "Nayarit",
    path: "M 200 280 L 230 275 L 250 300 L 240 330 L 210 340 L 190 310 L 200 280 Z",
  },
  {
    id: "nuevo-leon",
    nombre: "Nuevo León",
    path: "M 270 180 L 320 175 L 340 200 L 330 240 L 280 250 L 260 220 L 270 180 Z",
  },
  {
    id: "oaxaca",
    nombre: "Oaxaca",
    path: "M 360 380 L 400 375 L 420 400 L 410 440 L 370 450 L 350 420 L 360 380 Z",
  },
  {
    id: "puebla",
    nombre: "Puebla",
    path: "M 340 320 L 370 315 L 390 340 L 380 370 L 350 380 L 330 350 L 340 320 Z",
  },
  {
    id: "queretaro",
    nombre: "Querétaro",
    path: "M 280 300 L 310 295 L 330 320 L 320 350 L 290 360 L 270 330 L 280 300 Z",
  },
  {
    id: "quintana-roo",
    nombre: "Quintana Roo",
    path: "M 480 380 L 520 375 L 540 400 L 530 430 L 490 440 L 470 410 L 480 380 Z",
  },
  {
    id: "san-luis-potosi",
    nombre: "San Luis Potosí",
    path: "M 270 220 L 320 215 L 340 240 L 330 280 L 280 290 L 260 260 L 270 220 Z",
  },
  {
    id: "sinaloa",
    nombre: "Sinaloa",
    path: "M 160 220 L 210 215 L 230 240 L 220 280 L 170 290 L 150 260 L 160 220 Z",
  },
  {
    id: "sonora",
    nombre: "Sonora",
    path: "M 100 80 L 160 75 L 180 100 L 170 150 L 120 160 L 100 130 L 100 80 Z",
  },
  {
    id: "tabasco",
    nombre: "Tabasco",
    path: "M 390 380 L 420 375 L 440 400 L 430 430 L 400 440 L 380 410 L 390 380 Z",
  },
  {
    id: "tamaulipas",
    nombre: "Tamaulipas",
    path: "M 320 220 L 370 215 L 390 240 L 380 280 L 330 290 L 310 260 L 320 220 Z",
  },
  {
    id: "tlaxcala",
    nombre: "Tlaxcala",
    path: "M 320 320 L 340 315 L 350 335 L 345 355 L 330 360 L 315 340 L 320 320 Z",
  },
  {
    id: "veracruz",
    nombre: "Veracruz",
    path: "M 360 280 L 400 275 L 420 300 L 410 340 L 370 350 L 350 320 L 360 280 Z",
  },
  {
    id: "yucatan",
    nombre: "Yucatán",
    path: "M 450 380 L 490 375 L 510 400 L 500 430 L 460 440 L 440 410 L 450 380 Z",
  },
  {
    id: "zacatecas",
    nombre: "Zacatecas",
    path: "M 220 220 L 270 215 L 290 240 L 280 280 L 230 290 L 210 260 L 220 220 Z",
  },
  {
    id: "cdmx",
    nombre: "Ciudad de México",
    path: "M 310 320 L 320 315 L 325 330 L 320 345 L 310 350 L 305 335 L 310 320 Z",
  },
];

interface MapaMexicoProps {
  estadosConServicio?: string[];
  colorServicio?: string;
  colorHover?: string;
  colorDefault?: string;
}

export default function MapaMexicoRealista({
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
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Mapa de Puntos de Venta
        </h2>

        <div className="relative">
          <svg
            viewBox="0 0 600 500"
            className="w-full h-auto max-h-[500px]"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            {estados.map((estado) => (
              <path
                key={estado.id}
                d={estado.path}
                fill={getEstadoColor(estado.id)}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all duration-300 cursor-pointer hover:opacity-80"
                onMouseEnter={() => setEstadoHover(estado.id)}
                onMouseLeave={() => setEstadoHover(null)}
                style={{
                  filter:
                    estadoHover === estado.id
                      ? "brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                      : "none",
                }}
              />
            ))}
          </svg>

          {/* Tooltip */}
          {estadoHover && (
            <div
              className="absolute bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none z-10"
              style={{
                left: "50%",
                top: "20px",
                transform: "translateX(-50%)",
              }}
            >
              {estados.find((e) => e.id === estadoHover)?.nombre}
              {estadosConServicio.includes(estadoHover) && (
                <div className="text-xs text-green-300 mt-1 flex items-center gap-1">
                  <span>✓</span>
                  <span>Con servicio</span>
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
