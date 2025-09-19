import Image from "next/image";

export default function WhoWeAre() {
	return (
		<section className="min-h-screen w-screen">
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
				<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/70 flex flex-col items-center justify-center">
					<div>
						<span className="relative text-5xl font-semibold text-white z-10">
							ESTACIONAMIENTOS
						</span>
					</div>
					<div className="flex items-center justify-center mt-4 px-4">
						<span className="text-white text-center max-w-2xl text-xl font-extralight">
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

			<div className="flex items-center justify-center mt-12 mb-8 text-4xl font-semibold text-gray-800 flex-col gap-4 px-10">
				<div className="flex flex-col items-center mb-4">
					<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
						Prescencia Nacional
					</span>
					<h2 className="text-gray-800 font-semibold text-2xl text-center drop-shadow-sm">
						Descubre nuestros estacionamientos en todo México
					</h2>

					<p className="text-xl text-gray-700 text-center mt-4 font-normal mx-auto max-w-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel nobis
						soluta amet nihil, voluptates quidem placeat nulla alias, quibusdam,
						officiis obcaecati. Laborum odio sequi iure et deleniti, debitis
						placeat.
					</p>
					<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-1" />
				</div>

				<div className="flex items-center justify-center w-full h-[600px] rounded-4xl shadow-2xl relative">
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
			<div className="flex flex-col items-center justify-center mt-12 mb-20  w-full px-10">
				<span className="uppercase tracking-widest text-cyan-700 font-bold text-3xl mb-1">
					Explora Nuestros Estacionamientos
				</span>
				<h2 className="text-gray-800 font-semibold text-2xl text-center drop-shadow-sm mb-2">
					Conoce nuestras sucursales en todo México
				</h2>
				<div className="w-16 h-1 bg-cyan-400 rounded-full mt-2 mb-6" />

				{/* Grid 5x5, mostrando 10 sucursales, cards grandes y visuales */}
				<div className="w-full  rounded-3xl overflow-hidden shadow-2xl bg-white">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 w-full">
						{[
							{
								img: "/grid-places/torre-cuarzo.JPG",
								name: "Torre Cuarzo",
							},
							{
								img: "/grid-places/torre-reforma.JPG",
								name: "Torre Reforma",
							},
							{
								img: "/grid-places/chapultepec-uno.JPG",
								name: "Chapultepec Uno",
							},
							{
								img: "/grid-places/abc-santa-fe.JPG",
								name: "ABC Santa Fe",
							},
							{
								img: "/grid-places/garden-santa-fe.JPG",
								name: "Garden Santa Fe",
							},
							{
								img: "/grid-places/torre-linda-vista.JPG",
								name: "Torre Linda Vista",
							},
							{
								img: "/grid-places/super-center.JPG",
								name: "Supercenter Vistahermosa",
							},
							{
								img: "/grid-places/encuentro-averanda.JPG",
								name: "Encuentro Averanda",
							},
							{
								img: "/grid-places/dos-patios.JPG",
								name: "Dos Patios",
							},
							{
								img: "/grid-places/la-gran-plaza.JPG",
								name: "La Gran Plaza GDL",
							},
						].map((sucursal, idx) => (
							<div
								key={idx}
								className="relative flex flex-col justify-center items-center min-h-[280px] bg-gray-100 group cursor-pointer"
							>
								<div className="absolute inset-0">
									<Image
										src={sucursal.img}
										alt={sucursal.name}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										priority={idx < 4}
									/>

									<div className="absolute inset-0 pointer-events-none">
										<div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>
								</div>

								<div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="text-white font-bold text-xl drop-shadow text-center px-4">
										{sucursal.name}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
