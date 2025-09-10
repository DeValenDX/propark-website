"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix para los iconos de Leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapaMexicoExactoProps {
  estadosConServicio?: string[];
  colorServicio?: string;
  colorHover?: string;
  colorDefault?: string;
}

// Componente para centrar el mapa
function CentrarMapa() {
  const map = useMap();

  useEffect(() => {
    map.setView([23.6345, -102.5528], 5);
  }, [map]);

  return null;
}

export default function MapaMexicoExacto({
  estadosConServicio = [
    "ciudad de mexico",
    "estado de mexico",
    "cuernavaca morelos",
    "tijuana",
    "guadalajara",
    "guanajuato",
    "puebla",
    "guerrero",
  ],
  colorServicio = "#008FBE",
  colorHover = "#006d94",
  colorDefault = "#e5e7eb",
}: MapaMexicoExactoProps) {
  const [mexicoData, setMexicoData] =
    useState<GeoJSON.FeatureCollection | null>(null);
  const [estadosEspecificos, setEstadosEspecificos] = useState<
    GeoJSON.FeatureCollection[]
  >([]);
  const [estadoHover, setEstadoHover] = useState<string | null>(null);

  // Normaliza nombres y mapea ciudades a su estado
  const normalize = (value: string) =>
    value
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, " ")
      .trim();

  const cityToStateMap: Record<string, string> = {
    tijuana: "baja california",
    guadalajara: "jalisco",
    "cuernavaca morelos": "morelos",
  };

  const estadosObjetivo = new Set(
    estadosConServicio.map(
      (e) => normalize(cityToStateMap[normalize(e)] || e) || ""
    )
  );

  useEffect(() => {
    // Cargar México completo + todos los estados específicos
    const estadosFiles = [
      "cdmx.json",
      "guanajuato.json",
      "guerrero.json",
      "morelos.json",
      "puebla.json",
    ];

    Promise.all([
      fetch("/mexico.geo.json").then((res) => res.json()),
      ...estadosFiles.map((file) =>
        fetch(`/geo/estados/${file}`).then((res) => res.json())
      ),
    ])
      .then(([mexicoCompleto, ...estadosData]) => {
        setMexicoData(mexicoCompleto);
        setEstadosEspecificos(estadosData);
      })
      .catch((error) => console.error("Error cargando GeoJSON:", error));
  }, []);

  const getEstadoColor = (estadoId: string) => {
    if (estadoHover === estadoId) return colorHover;
    if (estadosObjetivo.has(estadoId)) return colorServicio;
    return colorDefault;
  };

  const style = (feature: GeoJSON.Feature, isEstadoEspecifico = false) => {
    if (isEstadoEspecifico) {
      // Estados específicos siempre en azul
      return {
        fillColor: colorServicio,
        fillOpacity: 0.8,
        stroke: true,
        color: "white",
        weight: 1.5,
        opacity: 1,
      };
    }

    const nombreRaw =
      feature.properties?.NOM_ENT ||
      feature.properties?.NAME_1 ||
      feature.properties?.name ||
      feature.properties?.state ||
      feature.properties?.admin ||
      "";
    // Estandariza nombres: "México" -> "estado de mexico", "Ciudad de México" -> "ciudad de mexico"
    let estandar = normalize(nombreRaw) || "";
    if (estandar === "mexico") estandar = "estado de mexico";
    if (estandar === "ciudad de mexico" || estandar === "mexico city")
      estandar = "ciudad de mexico";
    const estadoId = estandar;

    return {
      fillColor: getEstadoColor(estadoId),
      fillOpacity: 0.8,
      stroke: true,
      color: "white",
      weight: 1.5,
      opacity: 1,
    };
  };

  const onEachFeature = (
    feature: GeoJSON.Feature,
    layer: L.Layer,
    isEstadoEspecifico = false,
    estadoNombre = ""
  ) => {
    if (isEstadoEspecifico) {
      // Solo los estados específicos tienen hover
      layer.on({
        mouseover: () => setEstadoHover(estadoNombre),
        mouseout: () => setEstadoHover(null),
      });

      layer.bindTooltip(estadoNombre, {
        permanent: false,
        direction: "top",
        offset: [0, -10],
      });
      return;
    }

    // Mapa base sin hover effects
    const nombreRaw =
      feature.properties?.NOM_ENT ||
      feature.properties?.NAME_1 ||
      feature.properties?.name ||
      feature.properties?.state ||
      feature.properties?.admin ||
      "Estado";
    const nombreEstado = nombreRaw;

    // Solo tooltip, sin hover
    layer.bindTooltip(nombreEstado, {
      permanent: false,
      direction: "top",
      offset: [0, -10],
    });
  };

  if (!mexicoData || estadosEspecificos.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">Cargando mapa...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Mapa de Puntos de Venta
        </h2>

        <div className="relative">
          <div style={{ height: "500px", width: "100%" }}>
            <MapContainer
              center={[23.6345, -102.5528]}
              zoom={5}
              style={{ height: "100%", width: "100%" }}
              zoomControl={true}
              scrollWheelZoom={true}
            >
              <CentrarMapa />
              {/* Mapa completo de México (gris) */}
              <GeoJSON
                data={mexicoData}
                style={(feature) => (feature ? style(feature, false) : {})}
                onEachFeature={(feature, layer) =>
                  feature ? onEachFeature(feature, layer, false) : null
                }
              />
              {/* Estados específicos (azul) */}
              {estadosEspecificos.map((estadoData, index) => {
                const nombresEstados = [
                  "Ciudad de México",
                  "Guanajuato",
                  "Guerrero",
                  "Morelos",
                  "Puebla",
                ];
                const nombreEstado =
                  nombresEstados[index] || `Estado ${index + 1}`;

                return (
                  <GeoJSON
                    key={index}
                    data={estadoData}
                    style={(feature) => (feature ? style(feature, true) : {})}
                    onEachFeature={(feature, layer) =>
                      feature
                        ? onEachFeature(feature, layer, true, nombreEstado)
                        : null
                    }
                  />
                );
              })}
            </MapContainer>
          </div>

          {/* Tooltip personalizado */}
          {estadoHover && (
            <div
              className="absolute bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none z-10"
              style={{
                left: "50%",
                top: "20px",
                transform: "translateX(-50%)",
              }}
            >
              {estadoHover}
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
