"use client";

import Image from "next/image";
import { useState } from "react";
import {
  getEmailErrorMessage,
  getRequiredErrorMessage,
} from "@/utils/validation";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    const newErrors = {
      nombre: getRequiredErrorMessage(formData.nombre, "El nombre"),
      correo: getEmailErrorMessage(formData.correo),
      asunto: getRequiredErrorMessage(formData.asunto, "El asunto"),
      mensaje: getRequiredErrorMessage(formData.mensaje, "El mensaje"),
    };

    setErrors(newErrors);

    // Si hay errores, no enviar
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Mensaje enviado correctamente!");
        setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" });
      } else {
        alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch {
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="min-h-screen w-screen">
      <div className="relative w-full h-96 flex items-center justify-center">
        <Image
          src="/assets/networking.jpg"
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
              CONTACTO
            </span>
          </div>
          <div className="flex items-center justify-center mt-4 px-4">
            <span className="text-white text-center max-w-2xl text-xl font-extralight">
              Lograrás una gestión mucho más{" "}
              <span className="font-semibold text-[#00d4ff]">eficiente</span> de
              las plazas reguladas a través de una mayor{" "}
              <span className="font-semibold text-[#00d4ff]">
                productividad
              </span>
              , así como por un control mucho más{" "}
              <span className="font-semibold text-[#00d4ff]">eficaz</span> del
              uso establecido para el estacionamiento. Sabemos que la{" "}
              <span className="font-semibold text-[#00d4ff]">humanización</span>{" "}
              y la{" "}
              <span className="font-semibold text-[#00d4ff]">innovación</span>{" "}
              en los servicios son la clave de{" "}
              <span className="font-semibold text-[#00d4ff]">éxito</span> en
              cada producto que ofrecemos.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center py-16 px-10 bg-gray-50">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative text-white p-8 flex flex-col justify-center">
            <Image
              src="/assets/urban.jpg"
              alt="Fondo de contacto"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="/parking-places/PARKING-blur.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 to-gray-700/70 flex flex-col items-center justify-center z-10" />
            <div className="relative z-20">
              <h2 className="text-2xl font-bold mb-4">
                ¿Por qué contactarnos?
              </h2>
              <p className="mb-6 text-sm text-gray-100">
                En Propark, creemos que la{" "}
                <span className="font-semibold text-[#00d4ff]">innovación</span>{" "}
                y la{" "}
                <span className="font-semibold text-[#00d4ff]">
                  cercanía con nuestros clientes
                </span>{" "}
                son la base para transformar la gestión de estacionamientos. Al
                contactarnos, das el primer paso hacia{" "}
                <span className="font-semibold text-[#00d4ff]">
                  soluciones personalizadas, eficientes y humanas
                </span>{" "}
                que impulsarán el{" "}
                <span className="font-semibold text-[#00d4ff]">
                  éxito de tu proyecto
                </span>
                . Estamos listos para escucharte y acompañarte en cada etapa del
                camino.
              </p>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Escribenos
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="nombre"
                    className="mb-1 text-sm text-gray-700 font-medium"
                  >
                    Nombre<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none ${
                      errors.nombre ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="correo"
                    className="mb-1 text-sm text-gray-700 font-medium"
                  >
                    Correo electrónico<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none ${
                      errors.correo ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-500 text-xs mt-1">{errors.correo}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="asunto"
                  className="mb-1 text-sm text-gray-700 font-medium"
                >
                  Asunto<span className="text-red-500">*</span>
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="¿Sobre qué quieres contactarnos?"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none ${
                    errors.asunto ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.asunto && (
                  <p className="text-red-500 text-xs mt-1">{errors.asunto}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mensaje"
                  className="mb-1 text-sm text-gray-700 font-medium"
                >
                  Mensaje<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí"
                  rows={4}
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none ${
                    errors.mensaje ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.mensaje && (
                  <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
