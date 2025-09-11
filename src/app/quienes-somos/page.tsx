import React from "react";
import { Target, Eye, Heart, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
	return (
		<section className="min-h-screen w-screen">
			<div className="relative w-full bg-gray-400 h-96 flex items-center justify-center bg-[url('/parking-places/PARKING.jpg')] bg-cover bg-center">
				{/* Degradado gris superpuesto más intenso */}
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
					<div>
						<span className="relative text-5xl font-semibold text-white z-10">[QUIÉNES SOMOS]</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-xl font-extralight">
							Pro Park es una empresa mexicana creada por un grupo de especialistas en gestión y operación eficiente de
							estacionamientos en toda la República Mexicana, tenemos un
							alto nivel de conocimiento del negocio, lo que garantiza a
							nuestros clientes grandes resultados.
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
						Nuestros valores
					</span>
					{/* <h2 className="text-gray-800 font-semibold text-2xl  text-center drop-shadow-sm">
						Valores que nos definen
					</h2> */}
					<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-1" />
				</div>

				{/* Grid de cards de valores */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-4 px-2 md:px-0 w-full max-w-6xl mx-auto">
					{/* Card 1 */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-3xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white">
						<div className="mb-4 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Settings size={40} strokeWidth={2.2} />
						</div>
						<div className="text-lg font-semibold text-gray-800 mb-1 text-center z-10">
							Eficiencia Operativa
						</div>
						<div className="text-gray-500 text-center text-sm z-10">
							Optimizamos procesos y recursos para ofrecer resultados sobresalientes a nuestros clientes.
						</div>
					</div>

					{/* Card 2 (ejemplo, puedes duplicar y modificar para más valores) */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-3xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white">
						<div className="mb-4 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Heart size={40} strokeWidth={2.2} />
						</div>
						<div className="text-lg font-semibold text-gray-800 mb-1 text-center z-10">
							Transparencia y Confianza
						</div>
						<div className="text-gray-500 text-center text-sm z-10">
							Nos dedicamos con entusiasmo y compromiso a superar las expectativas de nuestros clientes.
						</div>
					</div>

					{/* Card 3 (ejemplo) */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-3xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white ">
						<div className="mb-4 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<BarChart3 size={40} strokeWidth={2.2} />
						</div>
						<div className="text-lg font-semibold text-gray-800 mb-1 text-center z-10">
							Resultados Medibles
						</div>
						<div className="text-gray-500 text-center text-sm z-10">
							Enfocamos nuestros esfuerzos en lograr objetivos claros y cuantificables.
						</div>
					</div>



					{/* Agrega más cards aquí duplicando el bloque anterior y cambiando icono/texto */}
				</div>
				<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4">
					<div className="flex flex-col items-center mb-4">
						<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
							VISIÓN DE NEGOCIOS
						</span>
						<h2 className="text-gray-800 font-semibold text-xl text-center drop-shadow-sm">
							[ESTACIONAMIENTO INTELIGENTE]
						</h2>
						<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-1" />
					</div>

					<div className="flex justify-center items-center">
						<span className="text-gray-500 text-center text-lg font-semibold max-w-2xl">
							La tecnología y el diseño son nuestro motor para perseguir la innovación en cada operación de parking urbano.
						</span>
					</div>

					{/* Grid tipo "lago" de 3x3 para mostrar imágenes de estacionamientos inteligentes */}
					<div className="mt-8 w-full flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8 w-full max-w-6xl">
							{[
								{
									src: "/parking-places/DSC02391.JPG",
									alt: "Estacionamiento inteligente 1",
									text: "Control de Acceso Inteligente",
								},
								{
									src: "/parking-places/DSC02410.JPG",
									alt: "Estacionamiento inteligente 2",
									text: "Comodidad y Seguridad",
								},
								{
									src: "/parking-places/DSC02738.JPG",
									alt: "Estacionamiento inteligente 3",
									text: "Accesibilidad y Eficiencia",
								},
								{
									src: "/parking-places/DSC02509.JPG",
									alt: "Estacionamiento inteligente 4",
									text: "Operabilidad Avanzada",
								},
								{
									src: "/parking-places/DSC02589.JPG",
									alt: "Estacionamiento inteligente 5",
									text: "Automatización y Tecnología",
								},
								{
									src: "/parking-places/DSC02318.JPG",
									alt: "Estacionamiento inteligente 6",
									text: "Fiablidad y Confianza",
								},
							].map((img, idx) => (
								<div
									key={img.src}
									className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-gray-200 h-[200px] group cursor-pointer"
								>
									<Image
										src={img.src}
										alt={img.alt}
										fill
										className="object-cover transition-transform duration-200 group-hover:scale-105"
										sizes="(max-width: 1024px) 100vw, 600px"
										quality={100}
										priority
									/>
									{/* Degradado azul muy leve y texto superpuesto */}
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-700/10 flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-0">
										<span className="text-white text-xl font-bold text-center px-4 transition-opacity duration-300 group-hover:opacity-0 select-none drop-shadow-md">
											{img.text}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
