"use client";
import { useSprings, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import Image from "next/image";
import companiesData from "../../app/utils/companies.json";

export default function Carousel() {
	const companies = companiesData?.companies ?? [];
	const loop = [...companies, ...companies];
	
	// Estado para la animación del logo
	const [logoLoaded, setLogoLoaded] = useState(false);

	// Definir el orden y las letras del logo
	const logoLetters = [
		{ id: 'P1', file: '/animated-logo/P1.svg', delay: 0 },
		{ id: 'R1', file: '/animated-logo/R1.svg', delay: 200 },
		{ id: 'O', file: '/animated-logo/O.svg', delay: 400 },
		{ id: 'P2', file: '/animated-logo/P2.svg', delay: 600 },
		{ id: 'A', file: '/animated-logo/A.svg', delay: 800 },
		{ id: 'R2', file: '/animated-logo/R2.svg', delay: 1000 },
		{ id: 'K', file: '/animated-logo/K.svg', delay: 1200 },
	];

	// Crear springs para todas las letras usando useSprings
	const springs = useSprings(
		logoLetters.length,
		logoLetters.map((letter) => ({
			from: { 
				opacity: 0, 
				transform: 'translateY(50px) scale(0.5)',
			},
			to: logoLoaded ? {
				opacity: 1,
				transform: 'translateY(0px) scale(1)'
			} : {
				opacity: 0,
				transform: 'translateY(50px) scale(0.5)'
			},
			delay: letter.delay,
			config: {
				tension: 300,
				friction: 20,
				mass: 1
			}
		}))
	);

	useEffect(() => {
		// Activar la animación después de un pequeño delay
		const timer = setTimeout(() => {
			setLogoLoaded(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative w-full h-screen overflow-hidden bg-white flex flex-col  ">
			{/* Hero con textos */}
			<div className="flex flex-col items-center px-10 pt-10 pb-8 gap-4 md:gap-6">
				<h3 className="text-center text-lg md:text-xl font-medium bg-[#008fbe] rounded-3xl px-6 py-2 text-white shadow-md">
					Bienvenido a la nueva era de la movilidad urbana
				</h3>

				{/* Logo animado "ProPark" con React Spring */}
				<div className="flex items-center justify-center">
					{logoLetters.map((letter, index) => (
						<animated.div
							key={letter.id}
							style={springs[index]}
							className="mx-1"
						>
							<Image
								src={letter.file}
								alt={`ProPark Logo Letter ${letter.id}`}
								width={96}
								height={96}
								className="h-16 md:h-20 lg:h-24 w-auto"
							/>
						</animated.div>
					))}
				</div>

				<p className="text-center text-sm md:text-base lg:text-lg text-blue-900/90 max-w-4xl leading-relaxed font-medium">
					En Pro Park somos especialistas en la gestión y operación eficiente de
					estacionamientos en toda la República Mexicana. Nuestra experiencia y
					conocimiento garantizan soluciones confiables e inteligentes, que
					optimizan cada espacio y brindan tranquilidad a nuestros clientes.
				</p>
			</div>

			{/* Carrusel con desplazamiento automático */}
			<div className="w-full flex-1 overflow-hidden relative px-6 md:px-16 lg:px-24 mt-2">
				<div className="flex gap-6 animate-scroll">
					{loop.map((company, index) => (
						<div
							key={index}
							className="flex-none w-64 h-80 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm border border-gray-100 transform transition-all duration-300 ease-out hover:scale-102 hover:shadow-[0_8px_35px_rgb(0,143,190,0.12)] overflow-hidden flex flex-col items-center justify-center group"
						>
							<div className="relative w-full h-full flex items-center justify-center p-8 transition-transform duration-300 group-hover:scale-105">
								<Image
									src={company.path}
									alt={`Logo ${index + 1}`}
									width={176}
									height={176}
									className="max-w-44 max-h-44 object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
								/>
							</div>
						</div>
					))}
				</div>

				<div className="pt-10 flex items-center justify-center">
					<button className="py-3 px-8 bg-[#008fbe] text-white font-semibold text-lg rounded-3xl shadow-lg transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-xl">
						Descubrir más
					</button>
				</div>
			</div>

			{/* Animación CSS */}
			<style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>
		</div>
	);
}
