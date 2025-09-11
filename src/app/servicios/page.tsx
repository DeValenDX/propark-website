import React from "react";
import {
	Target,
	Eye,
	Heart,
	Settings,
	BarChart3,
	Users,
	CheckCircle,
	Shield,
	Circle,
	FileText,
	Home,
	Scan,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
	{
		icon: <Circle className="w-8 h-8 text-green-600" />,
		title: "Eficiencia",
		description:
			"Hemos diseñado soluciones inteligentes & estrategias eficientes que resuelven la operación y control impecable de los estacionamientos que operamos.",
	},
	{
		icon: <FileText className="w-8 h-8 text-blue-600" />,
		title: "Profesionalismo",
		description:
			"Más de 200 colaboradores capacitados para atender las solicitudes de nuestros clientes.",
	},
	{
		icon: <Home className="w-8 h-8 text-purple-600" />,
		title: "Experiencia",
		description:
			"Contamos con especialistas en cada rubro. Como parte de nuestro compromiso, garantizamos alinearnos con las políticas de la empresa.",
	},
	{
		icon: <Scan className="w-8 h-8 text-orange-600" />,
		title: "Sistemas Guiados",
		description:
			"Guía a los usuarios hasta los espacios disponibles de forma fácil y rápida. Reduciendo congestiones, contaminación y mejorando la satisfacción de conductores y usuarios.",
	},
];
export default function Services() {
	return (
		<>
			<section className="min-h-screen w-screen pb-32">
				{/* <div className="relative w-full bg-gray-400 h-96 flex items-center justify-center bg-[url('/parking-places/DSC02509.JPG')] bg-cover bg-center"> */}
				<div className="relative w-full h-96 flex items-center justify-center">
					<Image
						src="/parking-places/DSC02509.jpg"
						alt="Imagen de estacionamiento"
						fill
						className="object-cover object-center"
						priority
						sizes="100vw"
						placeholder="blur"
						blurDataURL="/parking-places/PARKING-blur.jpg"
					/>
					{/* Degradado gris superpuesto más intenso */}
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
						<div>
							<span className="relative text-5xl font-semibold text-white z-10">
								[SERVICIOS]
							</span>
						</div>
						<div className="flex items-center justify-center mt-4 px-4">
							<span className="text-white text-center max-w-2xl text-xl font-extralight">
								Pro Park es una empresa mexicana creada por un grupo de
								especialistas en gestión y operación eficiente de
								estacionamientos en toda la República Mexicana, tenemos un alto
								nivel de conocimiento del negocio, lo que garantiza a nuestros
								clientes grandes resultados.
							</span>
						</div>

						<div className="flex justify-center items-center mt-6 space-x-4 z-10">
							<Link href="/servicios">
								<button className="bg-[#0090c1] text-xl text-white px-6 py-2 rounded-xl shadow-lg hover:bg-[#0077a8] hover:scale-105 transition-all duration-200 font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-[#0090c1]/50 cursor-pointer">
									VER SERVICIOS
								</button>
							</Link>
						</div>
					</div>
					{/* Contenido de la sección */}
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

				<div className="w-full mt-20 px-20">

					<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4">
						<div className="flex flex-col items-center mb-4">
							<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
								BENEFICIOS
							</span>
							<h2 className="text-gray-800 font-semibold text-2xl  text-center drop-shadow-sm">
								TE OFRECEMOS SOLUCIONES
							</h2>
						</div>
					</div>
					{/* Cards pegadas con imágenes, degradado más fuerte y título/descrición hover */}
					<div className="h-96 rounded-3xl shadow-lg overflow-hidden flex flex-row">
						{/* Card 1 */}
						<div
							className="flex-1 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/eficiencia.jpg')] bg-cover bg-center  transition-transform duration-300 hover:-translate-y-3 hover:scale-105"
						>
							{/* Gradiente más fuerte */}
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />

							{/* Contenedor de título y descripción */}
							<div className="relative z-10 text-center px-4">
								<span className="text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Eficiencia
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									Hemos diseñado soluciones inteligentes & estrategias eficientes que resuelven la operación y control impecable de los estacionamientos que operamos.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div
							className="flex-1 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/profesionalismo.jpg')] bg-cover bg-center  transition-transform duration-300 hover:-translate-y-3 hover:scale-105"
						>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />
							<div className="relative z-10 text-center px-4">
								<span className="text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Profesionalismo
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									Más de 200 colaboradores capacitados para atender las solicitudes de nuestros clientes.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div
							className="flex-1 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/experiencia.jpg')] bg-cover bg-center  transition-transform duration-300 hover:-translate-y-3 hover:scale-105"
						>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />
							<div className="relative z-10 text-center px-4">
								<span className="text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Experiencia
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									Guía a os usuarios hasta los espacios disponibles de forma fácil y rápida.
									Si facilitas y agilizas el estacionamiento conseguirás tener meno congestiones, menos contaminación y obtendrás una mayor satisfacción de los conductores y usuarios.
								</p>
							</div>
						</div>

						{/* Card 4 */}
						<div
							className="flex-1 relative group overflow-hidden flex items-center justify-center  bg-[url('/assets/estacionamiento.jpg')] bg-cover bg-center  transition-transform duration-300 hover:-translate-y-3 hover:scale-105"
						>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/70 to-transparent" />
							<div className="relative z-10 text-center px-4">
								<span className="text-2xl font-bold text-white drop-shadow-lg transition-opacity duration-300 group-hover:opacity-0">
									Sistemas Guiados
								</span>
								<p className="absolute inset-0 flex items-center justify-center text-white text-base font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									Guía a os usuarios hasta los espacios disponibles de forma fácil y rápida.
									Si facilitas y agilizas el estacionamiento conseguirás tener meno congestiones, menos contaminación y obtendrás una mayor satisfacción de los conductores y usuarios.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
