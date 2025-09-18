import Image from "next/image";
import Link from "next/link";

export default function JobBoard() {
	return (
		<section className="min-h-screen w-screen">
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

				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
					<div>
						<span className="relative text-5xl font-semibold text-white z-10">
							BOLSA DE TRABAJO
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-xl font-extralight">
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
							¿Quieres trabajar con nosotros?
						</h2>
						<form className="space-y-4">
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
										type="text"
										placeholder="Ingresa tu nombre completo"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
										required
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="correo"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Correo<span className="text-red-500">*</span>
									</label>
									<input
										id="correo"
										type="email"
										placeholder="ejemplo@correo.com"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
										required
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="repetir-correo"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Repetir Correo<span className="text-red-500">*</span>
									</label>
									<input
										id="repetir-correo"
										type="email"
										placeholder="Repite tu correo"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
										required
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="telefono"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Teléfono
									</label>
									<input
										id="telefono"
										type="tel"
										placeholder="Tu número de teléfono"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									/>
								</div>
								<div className="flex flex-col md:col-span-2">
									<label
										htmlFor="direccion"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Dirección (Calle y número)
									</label>
									<input
										id="direccion"
										type="text"
										placeholder="Calle y número"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="colonia"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Colonia
									</label>
									<input
										id="colonia"
										type="text"
										placeholder="Colonia"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="delegacion"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Delegación/Municipio
									</label>
									<input
										id="delegacion"
										type="text"
										placeholder="Delegación o municipio"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									/>
								</div>
								<div className="flex flex-col md:col-span-2">
									<label
										htmlFor="cp"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										C.P.
									</label>
									<input
										id="cp"
										type="text"
										placeholder="Código Postal"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none"
									/>
								</div>
								<div className="flex flex-col md:col-span-2">
									<label
										htmlFor="cv"
										className="mb-1 text-sm text-gray-700 font-medium"
									>
										Envíanos tu CV:
									</label>
									<input
										id="cv"
										type="file"
										className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00d4ff] focus:outline-none bg-white"
										accept=".pdf,.doc,.docx"
									/>
								</div>
							</div>
							<button
								type="submit"
								className="bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transform transition"
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
