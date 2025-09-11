import {
	Heart,
	Settings, Handshake,
	UserStar,
	Shield,
	Star,
	Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
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
];

export default function WhoWeAre() {
	return (
		<section className="min-h-screen w-screen">
			<div className="relative w-full h-96 flex items-center justify-center">
				<Image
					src="/assets/buildings.jpg"
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
							[QUIÉNES SOMOS]
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-xl font-extralight">
							<span className=" font-bold">ProPark</span> es una empresa
							mexicana creada por un grupo de especialistas en gestión y
							operación eficiente de estacionamientos en toda la República
							Mexicana, tenemos un alto nivel de conocimiento del negocio, lo
							que garantiza a nuestros clientes grandes resultados.
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
					<h2 className="text-gray-800 font-semibold text-2xl  text-center drop-shadow-sm">
						La base de nuestra identidad
					</h2>
					<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-1" />
				</div>

				{/* Grid de cards de valores */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-2 px-2 md:px-0 w-full max-w-4xl mx-auto">
					{/* Card 1 */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Settings size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Integridad
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Actuamos con honestidad y respeto.
						</div>
					</div>

					{/* Card 2 */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Heart size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Desarrollo humano
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Impulsamos el crecimiento de nuestra gente.
						</div>
					</div>

					{/* Card 3 */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Handshake size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Trabajo en equipo
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Colaboramos para lograr metas comunes.
						</div>
					</div>

					{/* Card 4 */}
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<UserStar size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Responsabilidad
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Cumplimos nuestros compromisos.
						</div>
					</div>
				</div>
				{/* Segunda hilera centrada */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 px-2 md:px-0 w-full max-w-3xl mx-auto justify-center">
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Shield size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Seguridad
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Protegemos personas, bienes y operaciones.
						</div>
					</div>
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Star size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Excelencia operativa
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Trabajamos con calidad y eficiencia.
						</div>
					</div>
					<div className="group relative bg-white/90 border border-cyan-100 rounded-2xl shadow-md p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-white h-40 w-full">
						<div className="mb-2 text-cyan-600 group-hover:text-cyan-800 transition-colors z-10">
							<Sparkles size={28} strokeWidth={2} />
						</div>
						<div className="text-base font-semibold text-gray-800 mb-0.5 text-center z-10">
							Innovación
						</div>
						<div className="text-gray-500 text-center text-xs z-10">
							Mejoramos con tecnología y nuevas ideas.
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center mt-8  text-2xl font-semibold text-gray-800 flex-col gap-2">


					{/* Grid tipo "lago" de 3x3 para mostrar imágenes de estacionamientos inteligentes */}
					<div className="flex items-center justify-center mt-8 text-2xl font-semibold text-gray-800 flex-col gap-1">
						{/* Título */}
						<div className="flex flex-col items-center ">
							<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
								Visión de negocios
							</span>
							<h2 className="text-gray-800 font-semibold text-2xl text-center drop-shadow-sm">
								Estacionamientos inteligentes
							</h2>
							<div className="w-16 h-1 bg-[#0091c0] rounded-full mt-2 mb-1" />
						</div>


						<div className="relative w-[700px] h-[700px] flex items-center justify-center">
							{/* SVG para unir los puntos con líneas */}
							<svg
								className="absolute left-0 top-0 pointer-events-none"
								width={700}
								height={700}
							>
								{items.map((_, idx) => {
									const angle1 = (idx / items.length) * (2 * Math.PI);
									const angle2 = (((idx + 1) % items.length) / items.length) * (2 * Math.PI);
									const radius = 260;
									const cx = 350 + radius * Math.cos(angle1);
									const cy = 350 + radius * Math.sin(angle1);
									const nx = 350 + radius * Math.cos(angle2);
									const ny = 350 + radius * Math.sin(angle2);

									// Línea entre cada punto y el siguiente (círculo)
									return (
										<line
											key={idx}
											x1={cx}
											y1={cy}
											x2={nx}
											y2={ny}
											stroke="#0091c0"
											strokeWidth={5}
											opacity={0.7}
										/>
									);
								})}
								{/* Líneas del centro a cada punto */}
								{items.map((_, idx) => {
									const angle = (idx / items.length) * (2 * Math.PI);
									const radius = 260;
									const x = 350 + radius * Math.cos(angle);
									const y = 350 + radius * Math.sin(angle);

									return (
										<line
											key={`center-${idx}`}
											x1={350}
											y1={350}
											x2={x}
											y2={y}
											stroke="#0091c0"
											strokeWidth={4}
											opacity={0.7}
											strokeDasharray="8 6"
										/>
									);
								})}
							</svg>

							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full overflow-hidden shadow-lg z-10 border-4 border-[#0091c0] bg-white flex items-center justify-center">
								<Image
									src={'/assets/PP.png'}
									alt={'Logo de ProPark'}
									height={100}
									width={100}
									quality={100}
								/>
							</div>

							{/* Items alrededor, más grandes y más separados */}
							{items.map((img, idx) => {
								const angle = (idx / items.length) * (2 * Math.PI);
								const radius = 260;
								const x = radius * Math.cos(angle);
								const y = radius * Math.sin(angle);

								return (
									<div
										key={img.src}
										className="absolute w-44 h-44 rounded-full overflow-hidden shadow-lg border bg-gray-200 group"
										style={{
											transform: `translate(${x}px, ${y}px)`,
											left: "50%",
											top: "50%",
											marginLeft: "-88px",
											marginTop: "-88px",
										}}
									>
										<Image
											src={img.src}
											alt={img.alt}
											fill
											className="object-cover transition-transform duration-200 group-hover:scale-105"
											sizes="176px"
											quality={90}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-gray-700/10 flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
											<span className="text-white text-base font-bold text-center px-2 transition-opacity duration-300 group-hover:opacity-0 select-none drop-shadow-md">
												{img.text}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>


		</section>
	);
}
