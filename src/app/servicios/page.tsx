import { Settings, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
	return (
		<>
			<section className="min-h-screen w-full overflow-x-hidden pb-32">

				<div className="h-96 bg-cyan-100 flex flex-col md:flex-row">
					{/* Imagen */}
					<div className="w-full md:w-1/2 h-48 md:h-full relative">
						<Image
							src="/assets/servicios-camioneta.png"
							alt="Imagen de estacionamiento"
							fill
							className="object-cover object-center rounded-lg bg-gradient-to-b from-gray-900/70 to-gray-800/70"
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
							placeholder="blur"
							blurDataURL="/parking-places/PARKING-blur.jpg"
						/>
						<div className="absolute "></div>
					</div>

					{/* Texto */}
					<div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:px-8 py-8 md:py-0 bg-gradient-to-b from-gray-700/90 to-gray-600/70">
						<span className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-6">SERVICIOS</span>
						<span className="text-white text-center max-w-xl text-base md:text-xl font-extralight">
							<span className="font-bold text-cyan-400">Pro Park</span> es una
							<span className="font-bold text-cyan-400"> empresa mexicana</span> creada por un grupo de
							<span className="font-bold text-cyan-400"> especialistas</span> en gestión y operación eficiente de estacionamientos en toda la
							<span className="font-bold text-cyan-400"> República Mexicana</span>, con un alto nivel de conocimiento del negocio, lo que garantiza a nuestros clientes
							<span className="font-bold text-cyan-400"> resultados excepcionales</span>.
						</span>
					</div>

				</div>


				<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4">
					<div className="flex flex-col items-center mb-4">
						<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
							Operación y administración
						</span>
						<h2 className="text-gray-800 font-semibold text-2xl  text-center drop-shadow-sm">
							Servicios integrales para el manejo eficiente de estacionamientos
						</h2>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
					{/* Card */}
					<div className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
						{/* Gradiente decorativo arriba */}
						<div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-cyan-300" />
						<div className="p-8 flex flex-col">
							<Settings className="text-cyan-600 w-12 h-12 mb-6" />
							<h4 className="text-sm font-medium text-cyan-600 uppercase tracking-wide mb-1">
								Gestión
							</h4>
							<h3 className="text-2xl font-bold mb-4 text-gray-800 leading-snug">
								Operación y administración
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Garantizamos el funcionamiento eficaz del estacionamiento. Cada
								usuario es monitoreado para asegurar una experiencia
								satisfactoria, alineada con la oferta comercial de nuestros
								clientes.
							</p>
						</div>
					</div>

					{/* Card */}
					<div className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
						<div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-400" />
						<div className="p-8 flex flex-col">
							<BarChart3 className="text-cyan-600 w-12 h-12 mb-6" />
							<h4 className="text-sm font-medium text-cyan-600 uppercase tracking-wide mb-1">
								Transparencia
							</h4>
							<h3 className="text-2xl font-bold mb-4 text-gray-800 leading-snug">
								Auditoría y reportes
							</h3>
							<p className="text-gray-600 leading-relaxed">
								El patrimonio de nuestros clientes está protegido mediante
								auditorías 24/7 y reportes personalizados según las necesidades
								de cada inmueble, siempre con valor práctico para la toma de
								decisiones.
							</p>
						</div>
					</div>

					{/* Card */}
					<div className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
						<div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-green-400" />
						<div className="p-8 flex flex-col">
							<Users className="text-cyan-600 w-12 h-12 mb-6" />
							<h4 className="text-sm font-medium text-cyan-600 uppercase tracking-wide mb-1">
								Acompañamiento
							</h4>
							<h3 className="text-2xl font-bold mb-4 text-gray-800 leading-snug">
								Consultoría, asesoría y gestión
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Colaboramos estrechamente con nuestros clientes, cuidando sus
								intereses y proponiendo siempre las mejores alternativas en
								ámbitos jurídicos y financieros.
							</p>
						</div>
					</div>
				</div>

				<div className="w-full mt-20 px-4 md:px-10 lg:px-20">
					<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4">
						<div className="flex flex-col items-center mb-4">
							<span className="uppercase tracking-widest text-cyan-700 font-bold text-2xl md:text-3xl mb-1 text-center">
								BENEFICIOS
							</span>
							<h2 className="text-gray-800 font-semibold text-xl md:text-2xl text-center drop-shadow-sm px-4">
								TE OFRECEMOS SOLUCIONES
							</h2>
						</div>
					</div>
					{/* Cards pegadas con imágenes, degradado más fuerte y título/descrición hover */}
					<div className="min-h-[24rem] md:h-96 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
						{/* Card 1 */}
						<div className="flex-1 min-h-[200px] md:min-h-0 relative group overflow-hidden flex items-center justify-center bg-[#007DA8] transition-transform duration-300 md:hover:-translate-y-3 md:hover:scale-105 rounded-2xl md:rounded-none">
							{/* Contenedor de título y descripción */}
							<div className="relative z-10 text-center px-4">
								<span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Eficiencia
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4">
									Hemos diseñado soluciones inteligentes & estrategias
									eficientes que resuelven la operación y control impecable de
									los estacionamientos que operamos.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="flex-1 min-h-[200px] md:min-h-0 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/profesionistas.jpg')] bg-cover bg-center  transition-transform duration-300 md:hover:-translate-y-3 md:hover:scale-105 rounded-2xl md:rounded-none">
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />
							<div className="relative z-10 text-center px-4">
								<span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Profesionalismo
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4">
									Más de 500 colaboradores capacitados para atender las
									solicitudes de nuestros clientes.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="flex-1 min-h-[200px] md:min-h-0 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/pexels-pixabay-63294.jpg')] bg-cover bg-center  transition-transform duration-300 md:hover:-translate-y-3 md:hover:scale-105 rounded-2xl md:rounded-none">
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />
							<div className="relative z-10 text-center px-4">
								<span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Experiencia
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4">
									Contamos con especialistas en cada rublo como parte de nuestro
									compromiso ofrecemos garantizado nuestro compromiso con las
									políticas de la empresa.
								</p>
							</div>
						</div>

						{/* Card 4 */}
						<div className="flex-1 min-h-[200px] md:min-h-0 relative group overflow-hidden flex items-center justify-center bg-[#007DA8] transition-transform duration-300 md:hover:-translate-y-3 md:hover:scale-105 rounded-2xl md:rounded-none">
							<div className="relative z-10 text-center px-4">
								<span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Sistemas Guiados
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4">
									Guíamos a los usuarios hasta los espacios disponibles de forma
									fácil y rápida. Si facilitas y agilizas el estacionamiento
									conseguirás tener menos congestiones, menos contaminación y
									obtendrás una mayor satisfacción de los conductores y
									usuarios.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
