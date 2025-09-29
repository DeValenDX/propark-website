"use client";

import Image from "next/image";
import { useState } from "react";
import SuccessMessage from "@/components/forms/SuccessMessage";
import SendButton from "@/components/Buttons/Send";

export default function Contact() {
	const [formData, setFormData] = useState({
		nombre: "",
		correo: "",
		asunto: "",
		mensaje: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState({ type: "", text: "" });
	const [isSuccess, setIsSuccess] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
		// Limpiar mensaje cuando el usuario empiece a escribir
		if (message.text) setMessage({ type: "", text: "" });
	};

	const handleLoadingComplete = () => {
		setIsSuccess(true);
		// Limpiar formulario
		setFormData({
			nombre: "",
			correo: "",
			asunto: "",
			mensaje: "",
		});
		setIsLoading(false);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		

		setIsLoading(true);
		setMessage({ type: "", text: "" });

		try {
			const response = await fetch("/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				// El loader se encarga de mostrar el éxito después de 4 segundos
				// No llamamos setIsSuccess aquí, lo hace handleLoadingComplete
			} else {
				setIsLoading(false);
				setMessage({
					type: "error",
					text: data.error || "Error al enviar el mensaje. Por favor, intenta nuevamente.",
				});
			}
		} catch {
			setIsLoading(false);
			setMessage({
				type: "error",
				text: "Error de conexión. Por favor, verifica tu internet e intenta nuevamente.",
			});
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
				<div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
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

						{/* Estado de éxito */}
						{isSuccess ? (
							<SuccessMessage
								title="Tu mensaje fue enviado con éxito"
								subtitle="Gracias por contactarnos. Te responderemos pronto."
								buttonText="Enviar otro mensaje"
								onButtonClick={() => setIsSuccess(false)}
							/>
						) : (
							<>
								{/* Mensaje de error */}
								{message.text && message.type === "error" && (
									<div className="mb-4 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
										{message.text}
									</div>
								)}

								<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="flex flex-col">
									<label
										htmlFor="nombre"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Nombre *
									</label>
									<input
										id="nombre"
										name="nombre"
										type="text"
										value={formData.nombre}
										onChange={handleInputChange}
										placeholder="Ingresa tu nombre completo"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
										required
										disabled={isLoading}
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="correo"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Correo electrónico *
									</label>
									<input
										id="correo"
										name="correo"
										type="email"
										value={formData.correo}
										onChange={handleInputChange}
										placeholder="ejemplo@correo.com"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
										required
										disabled={isLoading}
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="asunto"
									className="mb-1 text-sm text-gray-700 font-medium"
								>
									Asunto *
								</label>
								<input
									id="asunto"
									name="asunto"
									type="text"
									value={formData.asunto}
									onChange={handleInputChange}
									placeholder="¿Sobre qué quieres contactarnos?"
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
									required
									disabled={isLoading}
								/>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="mensaje"
									className="mb-1 text-sm text-gray-700 font-medium"
								>
									Mensaje *
								</label>
								<textarea
									id="mensaje"
									name="mensaje"
									value={formData.mensaje}
									onChange={handleInputChange}
									placeholder="Escribe tu mensaje aquí"
									rows={4}
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
									required
									disabled={isLoading}
								></textarea>
							</div>
							
							{/* CAPTCHA */}
							
                                                                        <SendButton
                                                                        isLoading={isLoading}
                                                                        onLoadingComplete={handleLoadingComplete}
                                                                        buttonText="Enviar"
                                                                        duration={4000}
                                                                        />
							</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
