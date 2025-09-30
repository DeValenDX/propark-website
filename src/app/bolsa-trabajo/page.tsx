"use client";

import Image from "next/image";
import { useState } from "react";
import SuccessMessage from "@/components/forms/SuccessMessage";
import SendButton from "@/components/Buttons/Send";

export default function JobBoard() {
	const [formData, setFormData] = useState({
		nombre: "",
		correo: "",
		telefono: "",
		puesto: "",
		experiencia: "",
		cv: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState({ type: "", text: "" });
	const [isSuccess, setIsSuccess] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value, files } = e.target as HTMLInputElement;
		
		if (name === 'cv' && files && files[0]) {
			// Para archivos, guardamos el nombre del archivo
			setFormData(prev => ({
				...prev,
				[name]: files[0].name,
			}));
		} else if (name === 'telefono') {
			// Para teléfono, solo permitir números y máximo 10 dígitos
			const numbersOnly = value.replace(/\D/g, '');
			if (numbersOnly.length <= 10) {
				setFormData(prev => ({
					...prev,
					[name]: numbersOnly,
				}));
			}
		} else {
			setFormData(prev => ({
				...prev,
				[name]: value,
			}));
		}
		// Limpiar mensaje cuando el usuario empiece a escribir
		if (message.text) setMessage({ type: "", text: "" });
	};

	const handleLoadingComplete = () => {
		setIsSuccess(true);
		// Limpiar formulario
		setFormData({
			nombre: "",
			correo: "",
			telefono: "",
			puesto: "",
			experiencia: "",
			cv: "",
		});
		setIsLoading(false);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		

		setIsLoading(true);
		setMessage({ type: "", text: "" });

		// Validación adicional del teléfono
		if (formData.telefono.length !== 10) {
			setMessage({
				type: "error",
				text: "El teléfono debe tener exactamente 10 dígitos.",
			});
			setIsLoading(false);
			return;
		}

		// Validación del archivo CV
		const cvInput = document.getElementById('cv') as HTMLInputElement;
		if (!cvInput.files || !cvInput.files[0]) {
			setMessage({
				type: "error",
				text: "Debes subir tu CV (archivo PDF o Word).",
			});
			setIsLoading(false);
			return;
		}

		try {
			// Crear FormData para enviar archivos
			const formDataToSend = new FormData();
			formDataToSend.append('nombre', formData.nombre);
			formDataToSend.append('correo', formData.correo);
			formDataToSend.append('telefono', formData.telefono);
			formDataToSend.append('puesto', formData.puesto);
			formDataToSend.append('experiencia', formData.experiencia);
			
			// Agregar el archivo CV
			const cvInput = document.getElementById('cv') as HTMLInputElement;
			if (cvInput.files && cvInput.files[0]) {
				formDataToSend.append('cv', cvInput.files[0]);
			}

			const response = await fetch("/api/jobs", {
				method: "POST",
				body: formDataToSend,
			});

			const data = await response.json();

			if (response.ok) {
				// El loader se encarga de mostrar el éxito después de 4 segundos
				// No llamamos setIsSuccess aquí, lo hace handleLoadingComplete
			} else {
				setIsLoading(false);
				setMessage({
					type: "error",
					text: data.error || "Error al enviar la solicitud. Por favor, intenta nuevamente.",
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
		<section className="min-h-screen w-full overflow-x-hidden">
			<div className="relative w-full h-96 flex items-center justify-center">
				<Image
					src="/assets/jobBoard.jpg"
					alt="Imagen de estacionamiento"
					fill
					className="object-cover object-center"
					priority
					sizes="100vw"
					placeholder="blur"
					blurDataURL="/parking-places/PARKING-blur.jpg"
				/>

				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center px-4">
					<div>
						<span className="relative text-3xl md:text-5xl font-semibold text-white z-10 text-center">
							BOLSA DE TRABAJO
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-base md:text-xl font-extralight">
							¿Buscas formar parte de un equipo{" "}
							<span className="font-semibold text-[#00d4ff]">innovador</span> y{" "}
							<span className="font-semibold text-[#00d4ff]">comprometido</span>
							? Explora nuestras{" "}
							<span className="font-semibold text-[#00d4ff]">vacantes</span> y
							únete a{" "}
							<span className="font-semibold text-[#00d4ff]">Propark</span> para
							impulsar tu{" "}
							<span className="font-semibold text-[#00d4ff]">
								desarrollo profesional
							</span>{" "}
							en un ambiente de{" "}
							<span className="font-semibold text-[#00d4ff]">crecimiento</span>{" "}
							y{" "}
							<span className="font-semibold text-[#00d4ff]">
								aprendizaje continuo
							</span>
							. Descubre oportunidades únicas y sé parte de una empresa que
							valora el{" "}
							<span className="font-semibold text-[#00d4ff]">talento</span> y el{" "}
							<span className="font-semibold text-[#00d4ff]">compromiso</span>.
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center py-16 px-4 md:px-10 bg-gray-50">
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
							¿Quieres trabajar con nosotros?
						</h2>

						{/* Estado de éxito */}
						{isSuccess ? (
							<SuccessMessage
								title="Tu solicitud fue enviada con éxito"
								subtitle="Gracias por tu interés en trabajar con nosotros. Te contactaremos pronto."
								buttonText="Enviar otra solicitud"
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
								<div className="flex flex-col">
									<label
										htmlFor="telefono"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Teléfono *
									</label>
									<input
										id="telefono"
										name="telefono"
										type="tel"
										value={formData.telefono}
										onChange={handleInputChange}
										placeholder="1234567890"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
										required
										disabled={isLoading}
										maxLength={10}
										pattern="[0-9]{10}"
									/>
									<p className="text-xs text-gray-500 mt-1">
										10 dígitos exactos (solo números)
									</p>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="puesto"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Puesto de interés *
									</label>
									<select
										id="puesto"
										name="puesto"
										value={formData.puesto}
										onChange={handleInputChange}
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
										required
										disabled={isLoading}
									>
										<option value="">Selecciona un puesto</option>
										<option value="Operador de Estacionamiento">Operador de Estacionamiento</option>
										<option value="Supervisor">Supervisor</option>
										<option value="Gerente de Operaciones">Gerente de Operaciones</option>
										<option value="Atención al Cliente">Atención al Cliente</option>
										<option value="Mantenimiento">Mantenimiento</option>
										<option value="Seguridad">Seguridad</option>
										<option value="Administrativo">Administrativo</option>
										<option value="Otro">Otro</option>
									</select>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="experiencia"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Años de experiencia
									</label>
									<select
										id="experiencia"
										name="experiencia"
										value={formData.experiencia}
										onChange={handleInputChange}
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff]"
										disabled={isLoading}
									>
										<option value="">Selecciona tu experiencia</option>
										<option value="Sin experiencia">Sin experiencia</option>
										<option value="1-2 años">1-2 años</option>
										<option value="3-5 años">3-5 años</option>
										<option value="6-10 años">6-10 años</option>
										<option value="Más de 10 años">Más de 10 años</option>
									</select>
								</div>
								<div className="flex flex-col md:col-span-2">
									<label
										htmlFor="cv"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Subir CV (PDF o Word) *
									</label>
									<input
										id="cv"
										name="cv"
										type="file"
										onChange={handleInputChange}
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff] bg-white"
										accept=".pdf,.doc,.docx"
										required
										disabled={isLoading}
									/>
									<p className="text-xs text-gray-500 mt-1">
										Formatos permitidos: PDF, DOC, DOCX (máximo 5MB) - Campo obligatorio
									</p>
								</div>
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
