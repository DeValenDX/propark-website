import Image from "next/image";

export default function WhoWeAre() {
	return (
		<section className="min-h-screen w-full overflow-x-hidden">
			<div className="relative w-full h-96 flex items-center justify-center">
				<Image
					src="/assets/parking-bg.jpg"
					alt="Imagen de estacionamiento"
					fill
					className="object-cover object-center"
					priority
					sizes="100vw"
					placeholder="blur"
					blurDataURL="/parking-places/PARKING-blur.jpg"
				/>
				{/* Degradado gris superpuesto más intenso */}
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center px-4">
					<div>
						<span className="relative text-3xl md:text-5xl font-semibold text-white z-10 text-center">
							ESTACIONAMIENTOS
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-base md:text-xl font-extralight">
							Nuestra marca tiene presencia en todo el país, consolidándose como{" "}
							<span className="font-bold text-cyan-400">líder</span> en
							soluciones de estacionamiento{" "}
							<span className="font-bold text-cyan-400">innovadoras</span> y{" "}
							<span className="font-bold text-cyan-400">confiables</span>.
							Estamos presentes en{" "}
							<span className="font-bold text-cyan-400">
								múltiples ciudades de México
							</span>
							, brindando{" "}
							<span className="font-bold text-cyan-400">
								tecnología de punta
							</span>
							, <span className="font-bold text-cyan-400">seguridad</span> y{" "}
							<span className="font-bold text-cyan-400">comodidad</span> a miles
							de usuarios cada día, y contribuyendo al{" "}
							<span className="font-bold text-cyan-400">desarrollo urbano</span>{" "}
							y la{" "}
							<span className="font-bold text-cyan-400">
								movilidad eficiente
							</span>{" "}
							en cada región donde operamos.
						</span>
					</div>
				</div>
				{/* Contenido de la sección */}
			</div>

			<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4 px-4 md:px-10">
				<div className="flex flex-col items-center mb-4">
					<span className="uppercase tracking-widest text-cyan-700 font-bold text-2xl md:text-3xl mb-1 text-center">
						Presencia Nacional
					</span>
					<h2 className="text-gray-800 font-semibold text-xl md:text-2xl text-center drop-shadow-sm">
						Descubre nuestros estacionamientos en todo México
					</h2>

					<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-1" />
				</div>

				<div className="flex items-center justify-center w-full h-[300px] md:h-[600px] rounded-4xl shadow-2xl relative">
					<div className="relative w-full h-full max-w-5xl overflow-hidden group">
						<Image
							src="/assets/prescencia.png"
							alt="Imagen de estacionamiento"
							fill
							className="object-contain transition-transform duration-300 group-hover:scale-95"
							priority
						/>
						{/* Efecto de destello centrado */}
						<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
							<div className="w-2/3 h-2/3 rounded-full bg-white/30 blur-2xl opacity-70 animate-pulse" />
						</div>
						
					</div>
				</div>
			</div>

			{/*Este partado contendra un grid con los lagunas iamgenes de nuestros estacionamientos */}
		</section>
	);
}
